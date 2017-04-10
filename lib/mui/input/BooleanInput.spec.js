'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BooleanInput = require('./BooleanInput');

var _BooleanInput2 = _interopRequireDefault(_BooleanInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<BooleanInput />', function () {

    it('should render as a mui Toggle', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_BooleanInput2.default, { source: 'foo', input: {} }));
        var choices = wrapper.find('Toggle');
        _assert2.default.equal(choices.length, 1);
    });

    it('should be checked if the value is true', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_BooleanInput2.default, { source: 'foo', input: { value: true } }));
        _assert2.default.equal(wrapper.find('Toggle').prop('defaultToggled'), true);
    });

    it('should not be checked if the value is false', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_BooleanInput2.default, { source: 'foo', input: { value: false } }));
        _assert2.default.equal(wrapper.find('Toggle').prop('defaultToggled'), false);
    });

    it('should not be checked if the value is undefined', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_BooleanInput2.default, { source: 'foo', input: {} }));
        _assert2.default.equal(wrapper.find('Toggle').prop('defaultToggled'), false);
    });
});