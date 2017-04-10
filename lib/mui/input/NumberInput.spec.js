'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _NumberInput = require('./NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<NumberInput />', function () {
    var defaultProps = {
        source: 'foo',
        meta: {},
        input: {
            onBlur: function onBlur() {},
            onChange: function onChange() {},
            onFocus: function onFocus() {}
        },
        onChange: function onChange() {},
        onBlur: function onBlur() {},
        onFocus: function onFocus() {}
    };

    it('should use a mui TextField', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NumberInput2.default, (0, _extends3.default)({}, defaultProps, { input: { value: 'hello' } })));
        var TextFieldElement = wrapper.find('TextField');
        _assert2.default.equal(TextFieldElement.length, 1);
        _assert2.default.equal(TextFieldElement.prop('value'), 'hello');
        _assert2.default.equal(TextFieldElement.prop('type'), 'number');
    });

    describe('onChange event', function () {
        it('should be customizable via the `onChange` prop', function () {
            var onChange = _sinon2.default.spy();

            var props = (0, _extends3.default)({}, defaultProps);
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NumberInput2.default, (0, _extends3.default)({}, props, { onChange: onChange })));

            wrapper.find('TextField').simulate('change', 3);
            _assert2.default.deepEqual(onChange.args, [[3]]);
        });

        it('should keep calling redux-form original event', function () {
            var onChange = _sinon2.default.spy();

            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NumberInput2.default, (0, _extends3.default)({}, defaultProps, { input: { value: 2, onChange: onChange } })));
            wrapper.find('TextField').simulate('change', 3);
            _assert2.default.deepEqual(onChange.args, [[3]]);
        });
    });

    describe('onFocus event', function () {
        it('should be customizable via the `onFocus` prop', function () {
            var onFocus = _sinon2.default.spy();

            var props = (0, _extends3.default)({}, defaultProps);
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NumberInput2.default, (0, _extends3.default)({}, props, { onFocus: onFocus })));

            wrapper.find('TextField').simulate('focus', 3);
            _assert2.default.deepEqual(onFocus.args, [[3]]);
        });

        it('should keep calling redux-form original event', function () {
            var onFocus = _sinon2.default.spy();

            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NumberInput2.default, (0, _extends3.default)({}, defaultProps, { input: { value: 2, onFocus: onFocus } })));
            wrapper.find('TextField').simulate('focus', 3);
            _assert2.default.deepEqual(onFocus.args, [[3]]);
        });
    });

    describe('onBlur event', function () {
        it('should be customizable via the `onBlur` prop', function () {
            var onBlur = _sinon2.default.spy();

            var props = (0, _extends3.default)({}, defaultProps);
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NumberInput2.default, (0, _extends3.default)({}, props, { onBlur: onBlur })));

            wrapper.find('TextField').simulate('blur', 3);
            _assert2.default.deepEqual(onBlur.args, [[3]]);
        });

        it('should keep calling redux-form original event', function () {
            var onBlur = _sinon2.default.spy();

            var props = (0, _extends3.default)({}, defaultProps, {
                input: (0, _extends3.default)({}, defaultProps.input, {
                    onBlur: onBlur
                })
            });

            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NumberInput2.default, props));
            wrapper.find('TextField').simulate('blur', 3);
            _assert2.default.deepEqual(onBlur.args, [[3]]);
        });

        it('should cast value as a numeric one', function () {
            var onChange = _sinon2.default.spy();
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_NumberInput2.default, (0, _extends3.default)({}, defaultProps, {
                input: {
                    value: '2',
                    onBlur: function onBlur() {},
                    onChange: onChange
                }
            })));

            var TextFieldElement = wrapper.find('TextField').first();
            TextFieldElement.simulate('blur');
            _assert2.default.deepEqual(onChange.args, [[2]]);
        });
    });
});