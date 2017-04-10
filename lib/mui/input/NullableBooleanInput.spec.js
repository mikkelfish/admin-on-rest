'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NullableBooleanInput = require('./NullableBooleanInput');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<NullableBooleanInput />', function () {
    var defaultProps = {
        input: {},
        meta: {},
        translate: function translate(x) {
            return x;
        }
    };

    it('should give three different choices for true, false or unknown', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NullableBooleanInput.NullableBooleanInput, (0, _extends3.default)({ source: 'foo' }, defaultProps)));
        var choices = wrapper.find('SelectInput').prop('choices');
        _assert2.default.deepEqual(choices, [{ id: null, name: '' }, { id: false, name: 'aor.boolean.false' }, { id: true, name: 'aor.boolean.true' }]);
    });

    describe('error message', function () {
        it('should not be displayed if field is pristine', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NullableBooleanInput.NullableBooleanInput, (0, _extends3.default)({ source: 'foo' }, defaultProps, { meta: { touched: false } })));
            var SelectInputElement = wrapper.find('SelectInput');
            _assert2.default.equal(SelectInputElement.prop('errorText'), undefined);
        });

        it('should not be displayed if field has been touched but is valid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NullableBooleanInput.NullableBooleanInput, (0, _extends3.default)({ source: 'foo' }, defaultProps, { meta: { touched: true, error: false } })));
            var SelectInputElement = wrapper.find('SelectInput');
            _assert2.default.equal(SelectInputElement.prop('errorText'), undefined);
        });

        it('should be displayed if field has been touched and is invalid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NullableBooleanInput.NullableBooleanInput, (0, _extends3.default)({ source: 'foo' }, defaultProps, { meta: { touched: true, error: 'Required field.' } })));
            var SelectInputElement = wrapper.find('SelectInput');
            _assert2.default.deepEqual(SelectInputElement.prop('meta'), { touched: true, error: 'Required field.' });
        });
    });
});