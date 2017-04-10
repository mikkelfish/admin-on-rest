'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SimpleForm = require('./SimpleForm');

var _TextInput = require('../input/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<SimpleForm />', function () {
    it('should embed a form with given component children', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _SimpleForm.SimpleForm,
            null,
            _react2.default.createElement(_TextInput2.default, { source: 'name' }),
            _react2.default.createElement(_TextInput2.default, { source: 'city' })
        ));
        var inputs = wrapper.find('FormField');
        _assert2.default.deepEqual(inputs.map(function (i) {
            return i.prop('input').props.source;
        }), ['name', 'city']);
    });

    it('should display <Toolbar />', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _SimpleForm.SimpleForm,
            null,
            _react2.default.createElement(_TextInput2.default, { source: 'name' })
        ));
        var button = wrapper.find('Toolbar');
        _assert2.default.equal(button.length, 1);
    });
});