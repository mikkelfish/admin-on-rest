'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _EmailField = require('./EmailField');

var _EmailField2 = _interopRequireDefault(_EmailField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<EmailField />', function () {
    it('should render as an email link', function () {
        var record = { foo: 'foo@bar.com' };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_EmailField2.default, { record: record, source: 'foo' }));
        _assert2.default.equal(wrapper.html(), '<a href="mailto:foo@bar.com">foo@bar.com</a>');
    });

    it('should handle deep fields', function () {
        var record = { foo: { bar: 'foo@bar.com' } };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_EmailField2.default, { record: record, source: 'foo.bar' }));
        _assert2.default.equal(wrapper.html(), '<a href="mailto:foo@bar.com">foo@bar.com</a>');
    });

    it('should display an email (mailto) link', function () {
        var record = { email: 'hal@kubrickcorp.com' };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_EmailField2.default, { record: record, source: 'email' }));
        _assert2.default.equal(wrapper.html(), '<a href="mailto:hal@kubrickcorp.com">hal@kubrickcorp.com</a>');
    });
});