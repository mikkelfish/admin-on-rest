'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _UrlField = require('./UrlField');

var _UrlField2 = _interopRequireDefault(_UrlField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<UrlField />', function () {
    it('should display a link', function () {
        var record = { website: 'https://en.wikipedia.org/wiki/HAL_9000' };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_UrlField2.default, { record: record, source: 'website' }));
        _assert2.default.equal(wrapper.html(), '<a href="https://en.wikipedia.org/wiki/HAL_9000">https://en.wikipedia.org/wiki/HAL_9000</a>');
    });

    it('should handle deep fields', function () {
        var record = { foo: { website: 'https://en.wikipedia.org/wiki/HAL_9000' } };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_UrlField2.default, { record: record, source: 'foo.website' }));
        _assert2.default.equal(wrapper.html(), '<a href="https://en.wikipedia.org/wiki/HAL_9000">https://en.wikipedia.org/wiki/HAL_9000</a>');
    });
});