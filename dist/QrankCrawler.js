/**
 * Created by naname on 2016/10/02.
 */
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QrankCrawler = function () {
  function QrankCrawler() {
    _classCallCheck(this, QrankCrawler);

    this.request = require('sync-request');
  }

  _createClass(QrankCrawler, [{
    key: 'get',
    value: function get(timeout) {
      timeout = timeout === undefined ? 30 * 1000 : timeout * 1000;
      try {
        return this.request('GET', this.url, { timeout: timeout });
      } catch (e) {
        throw e;
      }
    }
  }, {
    key: 'url',
    get: function get() {
      return 'http://qrank.wbsrv.net/entries?days=7&orderby=stock_count';
    }
  }]);

  return QrankCrawler;
}();

exports.default = QrankCrawler;