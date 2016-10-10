'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by naname on 2016/10/10.
 */

var QrankResult = function () {
  function QrankResult() {
    _classCallCheck(this, QrankResult);

    this.id = null;
    this.rank = null;
    this.title = null;
    this.stock = null;
    this.hatenaBookmark = null;
  }

  _createClass(QrankResult, [{
    key: 'url',
    get: function get() {
      return 'http://qiita.com/items/' + this.id;
    }
  }]);

  return QrankResult;
}();

exports.default = QrankResult;