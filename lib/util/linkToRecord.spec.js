'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _linkToRecord = require('./linkToRecord');

var _linkToRecord2 = _interopRequireDefault(_linkToRecord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Linking to a record', function () {
  it('should generate valid links', function () {
    _assert2.default.equal((0, _linkToRecord2.default)('books', 22), 'books/22');
    _assert2.default.equal((0, _linkToRecord2.default)('books', '/books/13'), 'books/%2Fbooks%2F13');
    _assert2.default.equal((0, _linkToRecord2.default)('blogs', 'https://dunglas.fr'), 'blogs/https%3A%2F%2Fdunglas.fr');
  });
});