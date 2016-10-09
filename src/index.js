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

export class QrankResult {
  constructor() {
    this.id = null;
    this.rank = null;
    this.title = null;
    this.stock = null;
    this.hatenaBookmark = null;
  }
}

export class QrankParser {
  constructor() {
    this.cheerio = require('cheerio');
  }
  parse(html) {
    try {
      const $ = this.cheerio.load(html);
      const results = [];
      let table = $('table').first();
      $('tbody > tr', table).each(function () {
        const result = new QrankResult();
        result.id = $('a', this).attr('href').split('/').pop();
        result.rank = $(this).children().eq(0).text().match('[0-9]+')[0];
        result.title = $('a', this).text();
        result.stock = $(this).children().eq(2).text().match('[0-9]+')[0];
        result.hatenaBookmark = $(this).children().eq(3).text().match('[0-9]+')[0];
        results.push(result);
      });
      return results;
    } catch (e) {
      throw e;
    }
  }
}
