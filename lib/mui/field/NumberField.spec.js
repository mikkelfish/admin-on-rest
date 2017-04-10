'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _NumberField = require('./NumberField');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<NumberField />', function () {
    it('should return null when the record is not set', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_NumberField.NumberField, { source: 'foo' })).html(), null);
    });

    it('should return null when the record has no value for the source', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_NumberField.NumberField, { record: {}, source: 'foo' })).html(), null);
    });

    it('should render a number', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_NumberField.NumberField, { record: { foo: 1 }, source: 'foo' })).html(), '<span>1</span>');
    });

    it('should pass the options prop to Intl.NumberFormat', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_NumberField.NumberField, { record: { foo: 1 }, source: 'foo', locales: 'en-US', options: { minimumFractionDigits: 2 } })).html(), '<span>1.00</span>');
    });

    it('should use the locales props as an argument to Intl.NumberFormat', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_NumberField.NumberField, { record: { foo: 1 }, source: 'foo', locales: 'fr-FR', options: { minimumFractionDigits: 2 } })).html(), '<span>1,00</span>');
    });

    it('should use custom styles passed as an elStyle prop', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_NumberField.NumberField, { record: { foo: 1 }, source: 'foo', elStyle: { margin: 1 } })).html(), '<span style="margin:1px;">1</span>');
    });

    it('should handle deep fields', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_NumberField.NumberField, { record: { foo: { bar: 2 } }, source: 'foo.bar' })).html(), '<span>2</span>');
    });
});