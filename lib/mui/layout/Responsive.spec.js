'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Responsive = require('./Responsive');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Responsive>', function () {
    var Small = function Small() {
        return _react2.default.createElement('div', null);
    };
    var Medium = function Medium() {
        return _react2.default.createElement('div', null);
    };
    var Large = function Large() {
        return _react2.default.createElement('div', null);
    };

    it('should render the small component on small screens', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { small: _react2.default.createElement(Small, null), medium: _react2.default.createElement(Medium, null), large: _react2.default.createElement(Large, null), width: 1 }));
        var component = wrapper.find('Small');
        _assert2.default.equal(component.length, 1);
    });
    it('should render the medium component on medium screens', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { small: _react2.default.createElement(Small, null), medium: _react2.default.createElement(Medium, null), large: _react2.default.createElement(Large, null), width: 2 }));
        var component = wrapper.find('Medium');
        _assert2.default.equal(component.length, 1);
    });
    it('should render the large component on large screens', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { small: _react2.default.createElement(Small, null), medium: _react2.default.createElement(Medium, null), large: _react2.default.createElement(Large, null), width: 3 }));
        var component = wrapper.find('Large');
        _assert2.default.equal(component.length, 1);
    });
    it('should render the small component on all screens when no other component is passed', function () {
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { small: _react2.default.createElement(Small, null), width: 1 })).find('Small').length, 1);
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { small: _react2.default.createElement(Small, null), width: 2 })).find('Small').length, 1);
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { small: _react2.default.createElement(Small, null), width: 3 })).find('Small').length, 1);
    });
    it('should render the medium component on all screens when no other component is passed', function () {
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { medium: _react2.default.createElement(Medium, null), width: 1 })).find('Medium').length, 1);
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { medium: _react2.default.createElement(Medium, null), width: 2 })).find('Medium').length, 1);
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { medium: _react2.default.createElement(Medium, null), width: 3 })).find('Medium').length, 1);
    });
    it('should render the large component on all screens when no other component is passed', function () {
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { large: _react2.default.createElement(Large, null), width: 1 })).find('Large').length, 1);
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { large: _react2.default.createElement(Large, null), width: 2 })).find('Large').length, 1);
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { large: _react2.default.createElement(Large, null), width: 3 })).find('Large').length, 1);
    });
    it('should fallback to the large component on medium screens', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { small: _react2.default.createElement(Small, null), large: _react2.default.createElement(Large, null), width: 2 }));
        var component = wrapper.find('Large');
        _assert2.default.equal(component.length, 1);
    });
    it('should fallback to the medium component on small screens', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { medium: _react2.default.createElement(Medium, null), large: _react2.default.createElement(Large, null), width: 1 }));
        var component = wrapper.find('Medium');
        _assert2.default.equal(component.length, 1);
    });
    it('should fallback to the medium component on large screens', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Responsive.Responsive, { small: _react2.default.createElement(Small, null), medium: _react2.default.createElement(Medium, null), width: 3 }));
        var component = wrapper.find('Medium');
        _assert2.default.equal(component.length, 1);
    });
});