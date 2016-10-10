/**
 * Created by naname on 2016/10/10.
 */
import QrankResult from './QrankResult';

export default class QrankParser {
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
