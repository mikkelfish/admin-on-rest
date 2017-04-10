'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _BooleanField = require('./BooleanField');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<BooleanField />', function () {
    it('should display tick if value is true', function () {
        return _assert2.default.ok((0, _enzyme.shallow)(_react2.default.createElement(_BooleanField.BooleanField, { record: { published: true }, source: 'published' })).is('ActionDone'));
    });

    it('should display cross if value is false', function () {
        return _assert2.default.ok((0, _enzyme.shallow)(_react2.default.createElement(_BooleanField.BooleanField, { record: { published: false }, source: 'published' })).is('ContentClear'));
    });

    it('should not display anything if value is null', function () {
        return _assert2.default.ok((0, _enzyme.shallow)(_react2.default.createElement(_BooleanField.BooleanField, { record: { published: null }, source: 'published' })).is('span'));
    });

    it('should use custom styles passed as an elStyle prop', function () {
        return _assert2.default.deepEqual((0, _enzyme.shallow)(_react2.default.createElement(_BooleanField.BooleanField, { record: { foo: true }, source: 'foo', elStyle: { margin: 1 } })).prop('style'), { margin: 1 });
    });

    it('should handle deep fields', function () {
        return _assert2.default.ok((0, _enzyme.shallow)(_react2.default.createElement(_BooleanField.BooleanField, { record: { foo: { bar: true } }, source: 'foo.bar' })).is('ActionDone'));
    });
});