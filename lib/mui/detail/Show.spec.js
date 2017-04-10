'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _Show = require('./Show');

var _SimpleShowLayout = require('./SimpleShowLayout');

var _SimpleShowLayout2 = _interopRequireDefault(_SimpleShowLayout);

var _TextField = require('../field/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Show />', function () {
    var defaultProps = {
        data: {},
        crudGetOne: function crudGetOne() {},
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
            _Show.Show,
            defaultProps,
            _react2.default.createElement(Foo, null)
        ));

        var inner = wrapper.find('Foo');
        _assert2.default.equal(inner.length, 1);
    });

    it('should display children inputs of SimpleShowLayout', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _Show.Show,
            defaultProps,
            _react2.default.createElement(
                _SimpleShowLayout2.default,
                null,
                _react2.default.createElement(_TextField2.default, { source: 'foo' }),
                _react2.default.createElement(_TextField2.default, { source: 'bar' })
            )
        ));
        var inputs = wrapper.find('pure(TextField)');
        _assert2.default.deepEqual(inputs.map(function (i) {
            return i.prop('source');
        }), ['foo', 'bar']);
    });
});