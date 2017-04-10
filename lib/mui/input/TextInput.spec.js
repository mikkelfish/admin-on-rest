'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _enzyme = require('enzyme');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<TextInput />', function () {
    var defaultProps = {
        source: 'foo',
        meta: {},
        input: {}
    };

    it('should use a mui TextField', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextInput2.default, (0, _extends3.default)({}, defaultProps, { input: { value: 'hello' } })));
        var TextFieldElement = wrapper.find('TextField');
        _assert2.default.equal(TextFieldElement.length, 1);
        _assert2.default.equal(TextFieldElement.prop('value'), 'hello');
        _assert2.default.equal(TextFieldElement.prop('type'), 'text');
    });

    it('should use a mui TextField', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextInput2.default, (0, _extends3.default)({}, defaultProps, { type: 'password' })));
        var TextFieldElement = wrapper.find('TextField');
        _assert2.default.equal(TextFieldElement.length, 1);
        _assert2.default.equal(TextFieldElement.prop('type'), 'password');
    });

    it('should call redux-form onBlur handler when blurred', function () {
        var onBlur = _sinon2.default.spy();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextInput2.default, (0, _extends3.default)({}, defaultProps, {
            input: { onBlur: onBlur }
        })));

        var TextFieldElement = wrapper.find('TextField').first();
        TextFieldElement.simulate('blur', 'event');
        _assert2.default.deepEqual(onBlur.args[0], ['event']);
    });

    describe('error message', function () {
        it('should not be displayed if field is pristine', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextInput2.default, (0, _extends3.default)({}, defaultProps, { meta: { touched: false } })));
            var TextFieldElement = wrapper.find('TextField');
            _assert2.default.equal(TextFieldElement.prop('errorText'), false);
        });

        it('should not be displayed if field has been touched but is valid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextInput2.default, (0, _extends3.default)({}, defaultProps, { meta: { touched: true, error: false } })));
            var TextFieldElement = wrapper.find('TextField');
            _assert2.default.equal(TextFieldElement.prop('errorText'), false);
        });

        it('should be displayed if field has been touched and is invalid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_TextInput2.default, (0, _extends3.default)({}, defaultProps, { meta: { touched: true, error: 'Required field.' } })));
            var TextFieldElement = wrapper.find('TextField');
            _assert2.default.equal(TextFieldElement.prop('errorText'), 'Required field.');
        });
    });
});