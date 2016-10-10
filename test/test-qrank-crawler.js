'use strict';
import assert from 'assert';
require('should');
import FS from 'fs';
import {QrankParser, QrankCrawler} from '../src/index';

const dummy = FS.readFileSync('test/qrank_daily.html', 'utf-8');
const parser = new QrankParser();

describe('qrank.wbsrv.netからデータを取得する', () => {
  describe('qrankからhtmlを取得する', function () {
    this.timeout(10000);
    const crawler = new QrankCrawler();
    it('Crawler returns statusCode 200', () => {
      crawler.get(10).statusCode.should.equal(200);
    });
    it('sync-requestモジュールは子プロセスを生成するためモック出来ない。');
  });
});

describe('ダミーデータをパースする', () => {
  it('パースできないHTMLをパースしたときはエラーを投げる', () => {
    (() => {
      parser.parse(null);
    }).should.throw(Error);
  });
  let result = parser.parse(dummy);
  it('パースした結果の１行目を検証する', () => {
    result[0].title.should.equal('ポケモンGOプラスを完全自動化Hack（物理）してみました');
    result[0].id.should.equal('26fd8aab831e30446038');
    result[0].rank.should.equal('1');
    result[0].stock.should.equal('18');
    result[0].hatenaBookmark.should.equal('6');
  });
  it('パースした結果の20行目を検証する', () => {
    result[19].title.should.equal('Watson Speech to Text を使ってPepper同士は会話できるのか？　〜シンプルな伝言からラップバトルへの挑戦まで');
    result[19].id.should.equal('31a66cec17c35d07919c');
    result[19].rank.should.equal('20');
    result[19].stock.should.equal('6');
    result[19].hatenaBookmark.should.equal('1');
  });
  it('パースした結果が20行存在するか確認する', () => {
    assert.equal(true, result.length === 20);
  });
});
