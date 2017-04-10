'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _DatagridHeaderCell = require('./DatagridHeaderCell');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<DatagridHeaderCell />', function () {
    describe('sorting on a column', function () {
        var defaultField = {
            type: 'foo',
            props: {},
            updateSort: function updateSort() {}
        };

        it('should be enabled when field has a source', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DatagridHeaderCell.DatagridHeaderCell, {
                currentSort: {},
                field: (0, _extends3.default)({}, defaultField, {
                    props: {
                        source: 'title'
                    }
                })
            }));

            _assert2.default.equal(wrapper.find('FlatButton').length, 1);
        });

        it('should be disabled when field has no source', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DatagridHeaderCell.DatagridHeaderCell, {
                currentSort: {},
                field: (0, _extends3.default)({}, defaultField)
            }));

            _assert2.default.equal(wrapper.find('FlatButton').length, 0);
        });

        it('should be disabled when sortable prop is explicitly set to false', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_DatagridHeaderCell.DatagridHeaderCell, {
                currentSort: {},
                field: (0, _extends3.default)({}, defaultField, {
                    props: {
                        source: 'title',
                        sortable: false
                    }
                })
            }));

            _assert2.default.equal(wrapper.find('FlatButton').length, 0);
        });
    });
});