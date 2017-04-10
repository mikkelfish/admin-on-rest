'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _LongTextInput = require('./LongTextInput');

var _LongTextInput2 = _interopRequireDefault(_LongTextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<LongTextInput />', function () {
    describe('error message', function () {
        it('should not be displayed if field is pristine', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_LongTextInput2.default, { source: 'foo', meta: { touched: false } }));
            var TextFieldElement = wrapper.find('TextField');
            _assert2.default.equal(TextFieldElement.prop('errorText'), false);
        });

        it('should not be displayed if field has been touched but is valid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_LongTextInput2.default, { source: 'foo', meta: { touched: true, error: false } }));
            var TextFieldElement = wrapper.find('TextField');
            _assert2.default.equal(TextFieldElement.prop('errorText'), false);
        });

        it('should be displayed if field has been touched and is invalid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_LongTextInput2.default, { source: 'foo', meta: { touched: true, error: 'Required field.' } }));
            var TextFieldElement = wrapper.find('TextField');
            _assert2.default.equal(TextFieldElement.prop('errorText'), 'Required field.');
        });
    });
});