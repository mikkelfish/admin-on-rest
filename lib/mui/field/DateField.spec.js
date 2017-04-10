'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _DateField = require('./DateField');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<DateField />', function () {
    it('should return null when the record is not set', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_DateField.DateField, { source: 'foo' })).html(), null);
    });

    it('should return null when the record has no value for the source', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_DateField.DateField, { record: {}, source: 'foo' })).html(), null);
    });

    it('should render a date', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_DateField.DateField, { record: { foo: new Date('2017-04-23') }, source: 'foo', locales: 'en-US' })).html(), '<span>4/23/2017</span>');
    });

    it('should render a date and time when the showtime prop is passed', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_DateField.DateField, { record: { foo: new Date('2017-04-23 23:05') }, showTime: true, source: 'foo', locales: 'en-US' })).html(), '<span>4/23/2017, 11:05:00 PM</span>');
    });

    it('should pass the options prop to Intl.DateTimeFormat', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_DateField.DateField, { record: { foo: new Date('2017-04-23') }, source: 'foo', locales: 'en-US', options: {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            } })).html(), '<span>Sunday, April 23, 2017</span>');
    });

    it('should use the locales props as an argument to Intl.DateTimeFormat', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_DateField.DateField, { record: { foo: new Date('2017-04-23') }, source: 'foo', locales: 'fr-FR' })).html(), '<span>23/04/2017</span>');
    });

    it('should use custom styles passed as an elStyle prop', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_DateField.DateField, { record: { foo: new Date('01/01/2016') }, source: 'foo', locales: 'en-US', elStyle: { margin: 1 } })).html(), '<span style="margin:1px;">1/1/2016</span>');
    });

    it('should handle deep fields', function () {
        return _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_DateField.DateField, { record: { foo: { bar: new Date('01/01/2016') } }, source: 'foo.bar', locales: 'en-US' })).html(), '<span>1/1/2016</span>');
    });
});