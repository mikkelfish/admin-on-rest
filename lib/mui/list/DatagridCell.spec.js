'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _DatagridCell = require('./DatagridCell');

var _DatagridCell2 = _interopRequireDefault(_DatagridCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<DatagridCell />', function () {
    it('should render as a mui <TableRowColumn /> component', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DatagridCell2.default, { field: { type: 'foo', props: {} } }));
        var col = wrapper.find('TableRowColumn');
        _assert2.default.equal(col.length, 1);
    });
    it('should use regular col style by default', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DatagridCell2.default, { field: { type: 'foo', props: {} }, defaultStyle: { color: 'blue' } }));
        var col = wrapper.find('TableRowColumn');
        _assert2.default.deepEqual(col.at(0).prop('style'), { color: 'blue' });
    });
    it('should use field style to override default style', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DatagridCell2.default, { field: { type: 'foo', props: { style: { color: 'red' } } } }));
        var col = wrapper.find('TableRowColumn');
        _assert2.default.deepEqual(col.at(0).prop('style'), { color: 'red' });
    });
});