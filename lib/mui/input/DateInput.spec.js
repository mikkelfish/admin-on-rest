'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _DateInput = require('./DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('DateInput .datify', function () {
    it('should return null if there is no input', function () {
        _assert2.default.equal((0, _DateInput.datify)(), null);
        _assert2.default.equal((0, _DateInput.datify)(null), null);
        _assert2.default.equal((0, _DateInput.datify)(''), null);
    });

    it('should throw an error if given input is not a recognizable date', function () {
        try {
            (0, _DateInput.datify)('Hello world');
        } catch (e) {
            return;
        }

        _assert2.default.fail();
    });

    it('should return a date Object whichever non-null input is given', function () {
        _assert2.default.deepEqual((0, _DateInput.datify)(new Date('2010-05-01')), new Date('2010-05-01'));
        _assert2.default.deepEqual((0, _DateInput.datify)('2010-05-01'), new Date('2010-05-01'));
    });
});

describe('<DateInput />', function () {
    it('should render a localized <DatePicker />', function () {
        var input = { value: null };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DateInput2.default, { source: 'foo', meta: {}, input: input, options: { locale: 'de-DE' } }));

        var datePicker = wrapper.find('DatePicker');
        _assert2.default.equal(datePicker.length, 1);
        _assert2.default.equal(datePicker.prop('locale'), 'de-DE');
    });

    it('should call props `input.onChange` method when changed', function () {
        var input = { value: null, onChange: _sinon2.default.spy() };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DateInput2.default, { source: 'foo', input: input, meta: {}, locale: 'de-DE' }));

        wrapper.find('DatePicker').simulate('change', null, '2010-01-04');
        _assert2.default.deepEqual(input.onChange.args, [['2010-01-04']]);
    });

    describe('error message', function () {
        it('should not be displayed if field is pristine', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DateInput2.default, { source: 'foo', input: { value: null }, meta: { touched: false } }));
            var DatePicker = wrapper.find('DatePicker');
            _assert2.default.equal(DatePicker.prop('errorText'), false);
        });

        it('should not be displayed if field has been touched but is valid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DateInput2.default, { source: 'foo', input: { value: null }, meta: { touched: true, error: false } }));
            var DatePicker = wrapper.find('DatePicker');
            _assert2.default.equal(DatePicker.prop('errorText'), false);
        });

        it('should be displayed if field has been touched and is invalid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DateInput2.default, { source: 'foo', input: { value: null }, meta: { touched: true, error: 'Required field.' } }));
            var DatePicker = wrapper.find('DatePicker');
            _assert2.default.equal(DatePicker.prop('errorText'), 'Required field.');
        });
    });
});