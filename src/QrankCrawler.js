/**
 * Created by naname on 2016/10/02.
 */
'use strict';
export default class QrankCrawler {
  constructor() {
    this.request = require('sync-request');
  }

  get url() {
    return 'http://qrank.wbsrv.net/';
  }

  get(timeout) {
    timeout = (timeout === undefined) ? 30 * 1000 : timeout * 1000;
    try {
      return this.request('GET', this.url, {timeout: timeout});
    } catch (e) {
      throw e;
    }
  }
}
