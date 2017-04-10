'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _AutocompleteInput = require('./AutocompleteInput');

var _AutocompleteInput2 = _interopRequireDefault(_AutocompleteInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<AutocompleteInput />', function () {
    var defaultProps = {
        source: 'foo',
        meta: {},
        input: {}
    };

    it('should use a mui AutoComplete', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AutocompleteInput2.default, (0, _extends3.default)({}, defaultProps, { input: { value: 1 }, choices: [{ id: 1, name: 'hello' }] })));
        var AutoCompleteElement = wrapper.find('AutoComplete');
        _assert2.default.equal(AutoCompleteElement.length, 1);
        _assert2.default.equal(AutoCompleteElement.prop('searchText'), 'hello');
    });

    it('should use the input parameter value as the initial input searchText', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AutocompleteInput2.default, (0, _extends3.default)({}, defaultProps, {
            input: { value: 2 },
            choices: [{ id: 2, name: 'foo' }]
        })));
        var AutoCompleteElement = wrapper.find('AutoComplete').first();
        _assert2.default.equal(AutoCompleteElement.prop('searchText'), 'foo');
    });

    it('should pass choices as dataSource', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AutocompleteInput2.default, (0, _extends3.default)({}, defaultProps, {
            choices: [{ id: 'M', name: 'Male' }, { id: 'F', name: 'Female' }],
            options: { open: true }
        })));
        var AutoCompleteElement = wrapper.find('AutoComplete').first();
        _assert2.default.deepEqual(AutoCompleteElement.prop('dataSource'), [{ value: 'M', text: 'Male' }, { value: 'F', text: 'Female' }]);
    });

    it('should use optionValue as value identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AutocompleteInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionValue: 'foobar',
            choices: [{ foobar: 'M', name: 'Male' }]
        })));
        var AutoCompleteElement = wrapper.find('AutoComplete').first();
        _assert2.default.deepEqual(AutoCompleteElement.prop('dataSource'), [{ value: 'M', text: 'Male' }]);
    });

    it('should use optionText with a string value as text identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AutocompleteInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: 'foobar',
            choices: [{ id: 'M', foobar: 'Male' }]
        })));
        var AutoCompleteElement = wrapper.find('AutoComplete').first();
        _assert2.default.deepEqual(AutoCompleteElement.prop('dataSource'), [{ value: 'M', text: 'Male' }]);
    });

    it('should use optionText with a function value as text identifier', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AutocompleteInput2.default, (0, _extends3.default)({}, defaultProps, {
            optionText: function optionText(choice) {
                return choice.foobar;
            },
            choices: [{ id: 'M', foobar: 'Male' }]
        })));
        var AutoCompleteElement = wrapper.find('AutoComplete').first();
        _assert2.default.deepEqual(AutoCompleteElement.prop('dataSource'), [{ value: 'M', text: 'Male' }]);
    });

    describe('error message', function () {
        it('should not be displayed if field is pristine', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AutocompleteInput2.default, (0, _extends3.default)({}, defaultProps, { meta: { touched: false } })));
            var AutoCompleteElement = wrapper.find('AutoComplete');
            _assert2.default.equal(AutoCompleteElement.prop('errorText'), false);
        });

        it('should not be displayed if field has been touched but is valid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AutocompleteInput2.default, (0, _extends3.default)({}, defaultProps, { meta: { touched: true, error: false } })));
            var AutoCompleteElement = wrapper.find('AutoComplete');
            _assert2.default.equal(AutoCompleteElement.prop('errorText'), false);
        });

        it('should be displayed if field has been touched and is invalid', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_AutocompleteInput2.default, (0, _extends3.default)({}, defaultProps, { meta: { touched: true, error: 'Required field.' } })));
            var AutoCompleteElement = wrapper.find('AutoComplete');
            _assert2.default.equal(AutoCompleteElement.prop('errorText'), 'Required field.');
        });
    });
});