'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by naname on 2016/10/10.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */


var _QrankResult = require('./QrankResult');

var _QrankResult2 = _interopRequireDefault(_QrankResult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var QrankParser = function () {
  function QrankParser() {
    _classCallCheck(this, QrankParser);

    this.cheerio = require('cheerio');
  }

  _createClass(QrankParser, [{
    key: 'parse',
    value: function parse(html) {
      var _this = this;

      try {
        var _ret = function () {
          var $ = _this.cheerio.load(html);
          var results = [];
          var table = $('table').first();
          $('tbody > tr', table).each(function () {
            var result = new _QrankResult2.default();
            result.id = $('a', this).attr('href').split('/').pop();
            result.rank = $(this).children().eq(0).text().match('[0-9]+')[0];
            result.title = $('a', this).text();
            result.stock = $(this).children().eq(2).text().match('[0-9]+')[0];
            result.hatenaBookmark = $(this).children().eq(3).text().match('[0-9]+')[0];
            results.push(result);
          });
          return {
            v: results
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      } catch (e) {
        throw e;
      }
    }
  }]);

  return QrankParser;
}();

exports.default = QrankParser;