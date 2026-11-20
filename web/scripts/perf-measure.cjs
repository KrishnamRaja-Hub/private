// Load-performance baseline for the built page.
// Usage: node scripts/perf-measure.cjs [url] [runs]
// Needs the preview server: node scripts/serve.mjs 4300
// Emulates a mid-range phone on slow 4G (CPU 4x slower, 150 ms RTT, 1.6 Mbps down)
// and reports median FCP, LCP, TBT, CLS plus gzip transfer bytes by type.
const { chromium } = require('playwright');
const zlib = require('zlib');

const url = process.argv[2] || 'http://127.0.0.1:4300/committee-members/cs-ai-governance';
const runs = Number(process.argv[3] || 3);
const median = a => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)];

async function once(browser) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const cdp = await ctx.newCDPSession(page);
  await cdp.send('Network.enable');
  await cdp.send('Network.setCacheDisabled', { cacheDisabled: true });
  await cdp.send('Network.emulateNetworkConditions', {
    offline: false, latency: 150, downloadThroughput: (1.6 * 1024 * 1024) / 8, uploadThroughput: (750 * 1024) / 8,
  });
  await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });

  const bytes = {};
  page.on('response', async r => {
    try {
      const body = await r.body();
      const type = (r.headers()['content-type'] || '').split(';')[0].split('/').pop() || 'other';
      const k = /javascript/.test(type) ? 'js' : type;
      bytes[k] = (bytes[k] || 0) + zlib.gzipSync(body).length;
    } catch {}
  });
  await page.addInitScript(() => {
    window.__m = { lcp: 0, cls: 0, tbt: 0 };
    new PerformanceObserver(l => { for (const e of l.getEntries()) window.__m.lcp = e.startTime; }).observe({ type: 'largest-contentful-paint', buffered: true });
    new PerformanceObserver(l => { for (const e of l.getEntries()) if (!e.hadRecentInput) window.__m.cls += e.value; }).observe({ type: 'layout-shift', buffered: true });
    new PerformanceObserver(l => { for (const e of l.getEntries()) window.__m.tbt += Math.max(0, e.duration - 50); }).observe({ type: 'longtask', buffered: true });
  });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);
  const m = await page.evaluate(() => ({
    fcp: performance.getEntriesByName('first-contentful-paint')[0]?.startTime ?? 0,
    ...window.__m,
  }));
  await ctx.close();
  return { ...m, bytes };
}

(async () => {
  const browser = await chromium.launch();
  const res = [];
  for (let i = 0; i < runs; i++) res.push(await once(browser));
  await browser.close();
  const pick = k => Math.round(median(res.map(r => r[k])));
  const b = res[0].bytes;
  const kb = n => (n / 1024).toFixed(1) + ' KB';
  console.log(`FCP ${pick('fcp')} ms | LCP ${pick('lcp')} ms | TBT ${pick('tbt')} ms | CLS ${median(res.map(r => r.cls)).toFixed(3)}`);
  console.log('gzip transfer: ' + Object.entries(b).sort((x, y) => y[1] - x[1]).map(([k, v]) => `${k} ${kb(v)}`).join(', ') +
    ` | total ${kb(Object.values(b).reduce((a, c) => a + c, 0))}`);
})();
