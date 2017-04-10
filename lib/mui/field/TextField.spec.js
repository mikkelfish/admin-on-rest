'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<TextField />', function () {
    it('should display record specific value as plain text', function () {
        var record = { title: "I'm sorry, Dave. I'm afraid I can't do that." };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextField2.default, { record: record, source: 'title' }));
        _assert2.default.equal(wrapper.html(), '<span>I&#x27;m sorry, Dave. I&#x27;m afraid I can&#x27;t do that.</span>');
    });

    it('should handle deep fields', function () {
        var record = { foo: { title: "I'm sorry, Dave. I'm afraid I can't do that." } };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextField2.default, { record: record, source: 'foo.title' }));
        _assert2.default.equal(wrapper.html(), '<span>I&#x27;m sorry, Dave. I&#x27;m afraid I can&#x27;t do that.</span>');
    });
});