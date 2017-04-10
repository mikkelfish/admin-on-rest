'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _SelectInput = require('./SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<SelectInput />', function () {
    var defaultProps = {
        source: 'foo',
        meta: {},
        input: {}
    };

    it('should use a mui SelectField', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, { input: { value: 'hello' } })));
        var SelectFieldElement = wrapper.find('SelectField');
        _assert2.default.equal(SelectFieldElement.length, 1);
        _assert2.default.equal(SelectFieldElement.prop('value'), 'hello');
    });

    it('should use the input parameter value as the initial input value', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, { input: { value: 2 } })));
        var SelectFieldElement = wrapper.find('SelectField').first();
        _assert2.default.equal(SelectFieldElement.prop('value'), '2');
    });

    it('should render choices as mui MenuItem components', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, {
            choices: [{ id: 'M', name: 'Male' }, { id: 'F', name: 'Female' }]
        })));
        var MenuItemElements = wrapper.find('MenuItem');
        _assert2.default.equal(MenuItemElements.length, 2);
        var MenuItemElement1 = MenuItemElements.first();
        _assert2.default.equal(MenuItemElement1.prop('value'), 'M');
        _assert2.default.equal(MenuItemElement1.prop('primaryText'), 'Male');
        var MenuItemElement2 = MenuItemElements.at(1);
        _assert2.default.equal(MenuItemElement2.prop('value'), 'F');
        _assert2.default.equal(MenuItemElement2.prop('primaryText'), 'Female');
    });

    it('should add an empty menu when allowEmpty is true', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({
            allowEmpty: true
        }, defaultProps, {
            choices: [{ id: 'M', name: 'Male' }, { id: 'F', name: 'Female' }]
        })));
        var MenuItemElements = wrapper.find('MenuItem');
        _assert2.default.equal(MenuItemElements.length, 3);
        var MenuItemElement1 = MenuItemElements.first();
        _assert2.default.equal(MenuItemElement1.prop('value'), null);
        _assert2.default.equal(MenuItemElement1.prop('primaryText'), '');
    });

    it('should use optionValue as value identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionValue: 'foobar',
            choices: [{ foobar: 'M', name: 'Male' }]
        })));
        var MenuItemElements = wrapper.find('MenuItem');
        var MenuItemElement1 = MenuItemElements.first();
        _assert2.default.equal(MenuItemElement1.prop('value'), 'M');
        _assert2.default.equal(MenuItemElement1.prop('primaryText'), 'Male');
    });

    it('should use optionText with a string value as text identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: 'foobar',
            choices: [{ id: 'M', foobar: 'Male' }]
        })));
        var MenuItemElements = wrapper.find('MenuItem');
        var MenuItemElement1 = MenuItemElements.first();
        _assert2.default.equal(MenuItemElement1.prop('value'), 'M');
        _assert2.default.equal(MenuItemElement1.prop('primaryText'), 'Male');
    });

    it('should use optionText with a function value as text identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: function optionText(choice) {
                return choice.foobar;
            },
            choices: [{ id: 'M', foobar: 'Male' }]
        })));
        var MenuItemElements = wrapper.find('MenuItem');
        var MenuItemElement1 = MenuItemElements.first();
        _assert2.default.equal(MenuItemElement1.prop('value'), 'M');
        _assert2.default.equal(MenuItemElement1.prop('primaryText'), 'Male');
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
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: _react2.default.createElement(Foobar, null),
            choices: [{ id: 'M', foobar: 'Male' }]
        })));
        var MenuItemElements = wrapper.find('MenuItem');
        var MenuItemElement1 = MenuItemElements.first();
        _assert2.default.equal(MenuItemElement1.prop('value'), 'M');
        _assert2.default.deepEqual(MenuItemElement1.prop('primaryText'), _react2.default.createElement(Foobar, { record: { id: 'M', foobar: 'Male' } }));
    });

    describe('error message', function () {
        it('should not be displayed if field is pristine', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, { meta: { touched: false } })));
            var SelectFieldElement = wrapper.find('SelectField');
            _assert2.default.equal(SelectFieldElement.prop('errorText'), false);
        });

        it('should not be displayed if field has been touched but is valid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, { meta: { touched: true, error: false } })));
            var SelectFieldElement = wrapper.find('SelectField');
            _assert2.default.equal(SelectFieldElement.prop('errorText'), false);
        });

        it('should be displayed if field has been touched and is invalid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_SelectInput2.default, (0, _extends3.default)({}, defaultProps, { meta: { touched: true, error: 'Required field.' } })));
            var SelectFieldElement = wrapper.find('SelectField');
            _assert2.default.equal(SelectFieldElement.prop('errorText'), 'Required field.');
        });
    });
});