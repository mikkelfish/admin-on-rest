'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _Edit = require('./Edit');

var _TextInput = require('../input/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _SimpleForm = require('../form/SimpleForm');

var _SimpleForm2 = _interopRequireDefault(_SimpleForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Edit />', function () {
    var defaultProps = {
        data: {},
        crudGetOne: function crudGetOne() {},
        crudUpdate: function crudUpdate() {},
        hasDelete: false,
        id: 'foo',
        isLoading: false,
        location: { pathname: '' },
        params: {},
        resource: '',
        translate: function translate(x) {
            return x;
        }
    };

    it('should display correctly when called with a child', function () {
        var Foo = function Foo() {
            return _react2.default.createElement('div', null);
        };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Edit.Edit,
            defaultProps,
            _react2.default.createElement(Foo, null)
        ));

        var inner = wrapper.find('Foo');
        _assert2.default.equal(inner.length, 1);
    });

    it('should display children inputs of SimpleForm', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Edit.Edit,
            defaultProps,
            _react2.default.createElement(
                _SimpleForm2.default,
                null,
                _react2.default.createElement(_TextInput2.default, { source: 'foo' }),
                _react2.default.createElement(_TextInput2.default, { source: 'bar' })
            )
        ));
        var inputs = wrapper.find('TextInput');
        _assert2.default.deepEqual(inputs.map(function (i) {
            return i.prop('source');
        }), ['foo', 'bar']);
    });
});