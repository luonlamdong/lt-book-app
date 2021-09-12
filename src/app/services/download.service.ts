import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  InAppBrowser,
  InAppBrowserOptions,
} from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  options: InAppBrowserOptions = {
    // location: 'no',
    // mediaPlaybackRequiresUserAction: 'no',
  };

  constructor(private httpClient: HttpClient, private iab: InAppBrowser) {}

  onDownload(url) {
    // return this.httpClient.get(url, { responseType: 'blob' });
    // window.open(url, '_system', 'location=yes');
    return this.iab.create(url, '_self', this.options);
  }
}
