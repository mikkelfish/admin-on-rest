'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _RadioButtonGroupInput = require('./RadioButtonGroupInput');

var _RadioButtonGroupInput2 = _interopRequireDefault(_RadioButtonGroupInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<RadioButtonGroupInput />', function () {
    var defaultProps = {
        source: 'foo',
        meta: {},
        input: {}
    };

    it('should use a mui RadioButtonGroup', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RadioButtonGroupInput2.default, (0, _extends3.default)({}, defaultProps, { label: 'hello' })));
        var RadioButtonGroupElement = wrapper.find('RadioButtonGroup');
        _assert2.default.equal(RadioButtonGroupElement.length, 1);
    });

    it('should use the input parameter value as the initial input value', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RadioButtonGroupInput2.default, (0, _extends3.default)({}, defaultProps, { input: { value: 2 } })));
        var RadioButtonGroupElement = wrapper.find('RadioButtonGroup').first();
        _assert2.default.equal(RadioButtonGroupElement.prop('defaultSelected'), '2');
    });

    it('should render choices as mui RadioButton components', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RadioButtonGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            choices: [{ id: 'M', name: 'Male' }, { id: 'F', name: 'Female' }]
        })));
        var RadioButtonElements = wrapper.find('RadioButton');
        _assert2.default.equal(RadioButtonElements.length, 2);
        var RadioButtonElement1 = RadioButtonElements.first();
        _assert2.default.equal(RadioButtonElement1.prop('value'), 'M');
        _assert2.default.equal(RadioButtonElement1.prop('label'), 'Male');
        var RadioButtonElement2 = RadioButtonElements.at(1);
        _assert2.default.equal(RadioButtonElement2.prop('value'), 'F');
        _assert2.default.equal(RadioButtonElement2.prop('label'), 'Female');
    });

    it('should use optionValue as value identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RadioButtonGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionValue: 'foobar',
            choices: [{ foobar: 'M', name: 'Male' }]
        })));
        var RadioButtonElements = wrapper.find('RadioButton');
        var RadioButtonElement1 = RadioButtonElements.first();
        _assert2.default.equal(RadioButtonElement1.prop('value'), 'M');
        _assert2.default.equal(RadioButtonElement1.prop('label'), 'Male');
    });

    it('should use optionText with a string value as text identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RadioButtonGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: 'foobar',
            choices: [{ id: 'M', foobar: 'Male' }]
        })));
        var RadioButtonElements = wrapper.find('RadioButton');
        var RadioButtonElement1 = RadioButtonElements.first();
        _assert2.default.equal(RadioButtonElement1.prop('value'), 'M');
        _assert2.default.equal(RadioButtonElement1.prop('label'), 'Male');
    });

    it('should use optionText with a function value as text identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RadioButtonGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: function optionText(choice) {
                return choice.foobar;
            },
            choices: [{ id: 'M', foobar: 'Male' }]
        })));
        var RadioButtonElements = wrapper.find('RadioButton');
        var RadioButtonElement1 = RadioButtonElements.first();
        _assert2.default.equal(RadioButtonElement1.prop('value'), 'M');
        _assert2.default.equal(RadioButtonElement1.prop('label'), 'Male');
    });

    it('should use optionText with an element value as text identifier', function () {
        var Foobar = function Foobar(_ref) {
            var record = _ref.record;
            return _react2.default.createElement(
                'span',
                null,
                record.foobar
            );
        };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_RadioButtonGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: _react2.default.createElement(Foobar, null),
            choices: [{ id: 'M', foobar: 'Male' }]
        })));
        var RadioButtonElements = wrapper.find('RadioButton');
        var RadioButtonElement1 = RadioButtonElements.first();
        _assert2.default.equal(RadioButtonElement1.prop('value'), 'M');
        _assert2.default.deepEqual(RadioButtonElement1.prop('label'), _react2.default.createElement(Foobar, { record: { id: 'M', foobar: 'Male' } }));
    });
});