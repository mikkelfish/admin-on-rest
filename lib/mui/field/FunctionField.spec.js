'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _FunctionField = require('./FunctionField');

var _FunctionField2 = _interopRequireDefault(_FunctionField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<FunctionField />', function () {
    it('should render using the render function', function () {
        var record = { foo: 'bar' };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FunctionField2.default, { record: record, render: function render(r) {
                return r['foo'].substr(0, 2);
            } }));
        _assert2.default.equal(wrapper.html(), '<span>ba</span>');
    });
});