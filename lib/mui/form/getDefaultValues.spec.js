'use strict';

var _react = require('react');

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _getDefaultValues = require('./getDefaultValues');

var _getDefaultValues2 = _interopRequireDefault(_getDefaultValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('getDefaultValues', function () {
    it('should get defaults values from form correctly', function () {
        var someTitle = 'some value';
        var formElements = {
            children: [(0, _react.createElement)('input', { defaultValue: someTitle, source: 'title' }), (0, _react.createElement)('input', { defaultValue: someTitle, source: 'nested.title' })]
        };
        var expectedResult = {
            title: someTitle,
            nested: {
                title: someTitle
            }
        };
        var defaultValuesResult = (0, _getDefaultValues2.default)({}, formElements);
        _assert2.default.deepEqual(defaultValuesResult, expectedResult);
    });
});