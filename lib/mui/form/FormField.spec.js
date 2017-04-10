'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<FormField>', function () {
    var Foo = function Foo() {
        return _react2.default.createElement('div', null);
    };
    Foo.defaultProps = { source: 'bar' };
    it('should render the input component', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, { input: _react2.default.createElement(Foo, null) }));
        var component = wrapper.find('Foo');
        _assert2.default.equal(component.length, 1);
    });
    it('should render the input component even if it\'s an html element', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, { input: _react2.default.createElement('div', null) }));
        var component = wrapper.find('div');
        _assert2.default.equal(component.length, 1);
    });
    it('should not render <Field /> component by default', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, { input: _react2.default.createElement(Foo, null) }));
        var component = wrapper.find('Field');
        _assert2.default.equal(component.length, 0);
    });
    it('should render a <Field /> component when addField is true', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, { input: _react2.default.createElement(Foo, { addField: true }) }));
        var component = wrapper.find('Field');
        _assert2.default.equal(component.length, 1);
    });
    it('should not render a <Labeled /> component when addField is true by default', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, { input: _react2.default.createElement(Foo, { addField: true }) }));
        var component = wrapper.find('Field').prop('component').name;
        _assert2.default.equal(component, 'Foo');
    });
    it('should render a <Labeled /> component when addField is true and addLabel is true', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, { input: _react2.default.createElement(Foo, { addField: true, addLabel: true }) }));
        var component = wrapper.find('Field').prop('component').name;
        _assert2.default.equal(component, 'Labeled');
    });

    it('should not render a <Labeled /> component by default', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, { input: _react2.default.createElement(Foo, null) }));
        var component = wrapper.find('Labeled');
        _assert2.default.equal(component.length, 0);
    });
    it('should render a <Labeled /> component when addLabel is true', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, { input: _react2.default.createElement(Foo, { addLabel: true }) }));
        var component = wrapper.find('Labeled');
        _assert2.default.equal(component.length, 1);
    });
    it('should not render a <Field /> component when addLabel is true by default', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_FormField2.default, { input: _react2.default.createElement(Foo, { addLabel: true }) }));
        var component = wrapper.find('Field');
        _assert2.default.equal(component.length, 0);
    });
});