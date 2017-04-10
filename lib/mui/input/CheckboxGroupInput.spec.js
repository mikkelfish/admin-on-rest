'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _CheckboxGroupInput = require('./CheckboxGroupInput');

var _CheckboxGroupInput2 = _interopRequireDefault(_CheckboxGroupInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<CheckboxGroupInput />', function () {
    var defaultProps = {
        source: 'foo',
        meta: {},
        choices: [{ id: 1, name: 'John doe' }],
        input: {
            onChange: function onChange() {},
            value: []
        }
    };

    it('should use a mui Checkbox', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxGroupInput2.default, defaultProps));
        var CheckboxElement = wrapper.find('Checkbox');
        _assert2.default.equal(CheckboxElement.length, 1);
    });

    it('should use the input parameter value as the initial input value', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxGroupInput2.default, (0, _extends3.default)({}, defaultProps, { input: { value: [1] } })));
        var CheckboxElement = wrapper.find('Checkbox').first();
        _assert2.default.equal(CheckboxElement.prop('checked'), true);
    });

    it('should render choices as mui Checkbox components', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            choices: [{ id: 'ang', name: 'Angular' }, { id: 'rct', name: 'React' }]
        })));
        var CheckboxElements = wrapper.find('Checkbox');
        _assert2.default.equal(CheckboxElements.length, 2);
        var CheckboxElement1 = CheckboxElements.first();
        _assert2.default.equal(CheckboxElement1.prop('value'), 'ang');
        _assert2.default.equal(CheckboxElement1.prop('label'), 'Angular');
        var CheckboxElement2 = CheckboxElements.at(1);
        _assert2.default.equal(CheckboxElement2.prop('value'), 'rct');
        _assert2.default.equal(CheckboxElement2.prop('label'), 'React');
    });

    it('should use optionValue as value identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionValue: 'foobar',
            choices: [{ foobar: 'foo', name: 'Bar' }]
        })));
        var CheckboxElements = wrapper.find('Checkbox');
        var CheckboxElement1 = CheckboxElements.first();
        _assert2.default.equal(CheckboxElement1.prop('value'), 'foo');
        _assert2.default.equal(CheckboxElement1.prop('label'), 'Bar');
    });

    it('should use optionText with a string value as text identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: 'foobar',
            choices: [{ id: 'foo', foobar: 'Bar' }]
        })));
        var CheckboxElements = wrapper.find('Checkbox');
        var CheckboxElement1 = CheckboxElements.first();
        _assert2.default.equal(CheckboxElement1.prop('value'), 'foo');
        _assert2.default.equal(CheckboxElement1.prop('label'), 'Bar');
    });

    it('should use optionText with a function value as text identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: function optionText(choice) {
                return choice.foobar;
            },
            choices: [{ id: 'foo', foobar: 'Bar' }]
        })));
        var CheckboxElements = wrapper.find('Checkbox');
        var CheckboxElement1 = CheckboxElements.first();
        _assert2.default.equal(CheckboxElement1.prop('value'), 'foo');
        _assert2.default.equal(CheckboxElement1.prop('label'), 'Bar');
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
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_CheckboxGroupInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: _react2.default.createElement(Foobar, null),
            choices: [{ id: 'foo', foobar: 'Bar' }]
        })));
        var CheckboxElements = wrapper.find('Checkbox');
        var CheckboxElement1 = CheckboxElements.first();
        _assert2.default.equal(CheckboxElement1.prop('value'), 'foo');
        _assert2.default.deepEqual(CheckboxElement1.prop('label'), _react2.default.createElement(Foobar, { record: { id: 'foo', foobar: 'Bar' } }));
    });
});