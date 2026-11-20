import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

/**
 * Links to other rebit.org.in pages. In the standalone preview they point at the
 * live site so every link lands; once this page is merged into the site,
 * `environment.siteOrigin` is '' and they become ordinary relative links.
 */
@Pipe({ name: 'site' })
export class SiteUrlPipe implements PipeTransform {
  transform(path: string): string {
    if (/^(https?:|mailto:|tel:)/.test(path)) return path;
    return environment.siteOrigin + path;
  }
}
