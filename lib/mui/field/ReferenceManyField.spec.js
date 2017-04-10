'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _ReferenceManyField = require('./ReferenceManyField');

var _TextField = require('./TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _SingleFieldList = require('../list/SingleFieldList');

var _SingleFieldList2 = _interopRequireDefault(_SingleFieldList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ReferenceManyField />', function () {
    it('should render a loading indicator when related records are not yet fetched', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceManyField.ReferenceManyField,
            {
                resource: 'foo',
                reference: 'bar',
                target: 'foo_id',
                basePath: '',
                crudGetManyReference: function crudGetManyReference() {}
            },
            _react2.default.createElement(
                _SingleFieldList2.default,
                null,
                _react2.default.createElement(_TextField2.default, { source: 'title' })
            )
        ));
        var ProgressElements = wrapper.find('LinearProgress');
        _assert2.default.equal(ProgressElements.length, 1);
        var SingleFieldListElement = wrapper.find('SingleFieldList');
        _assert2.default.equal(SingleFieldListElement.length, 0);
    });

    it('should render a list of the child component', function () {
        var data = {
            1: { id: 1, title: 'hello' },
            2: { id: 2, title: 'world' }
        };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceManyField.ReferenceManyField,
            {
                resource: 'foo',
                reference: 'bar',
                target: 'foo_id',
                basePath: '',
                data: data,
                ids: [1, 2],
                crudGetManyReference: function crudGetManyReference() {}
            },
            _react2.default.createElement(
                _SingleFieldList2.default,
                null,
                _react2.default.createElement(_TextField2.default, { source: 'title' })
            )
        ));
        var ProgressElements = wrapper.find('LinearProgress');
        _assert2.default.equal(ProgressElements.length, 0);
        var SingleFieldListElement = wrapper.find('SingleFieldList');
        _assert2.default.equal(SingleFieldListElement.length, 1);
        _assert2.default.equal(SingleFieldListElement.at(0).prop('resource'), 'bar');
        _assert2.default.deepEqual(SingleFieldListElement.at(0).prop('data'), data);
        _assert2.default.deepEqual(SingleFieldListElement.at(0).prop('ids'), [1, 2]);
    });

    it('should render nothing when there are no related records', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceManyField.ReferenceManyField,
            {
                resource: 'foo',
                reference: 'bar',
                target: 'foo_id',
                basePath: '',
                data: {},
                ids: [],
                crudGetManyReference: function crudGetManyReference() {}
            },
            _react2.default.createElement(
                _SingleFieldList2.default,
                null,
                _react2.default.createElement(_TextField2.default, { source: 'title' })
            )
        ));
        var ProgressElements = wrapper.find('LinearProgress');
        _assert2.default.equal(ProgressElements.length, 0);
        var SingleFieldListElement = wrapper.find('SingleFieldList');
        _assert2.default.equal(SingleFieldListElement.length, 1);
        _assert2.default.equal(SingleFieldListElement.at(0).prop('resource'), 'bar');
        _assert2.default.deepEqual(SingleFieldListElement.at(0).prop('data'), {});
        _assert2.default.deepEqual(SingleFieldListElement.at(0).prop('ids'), []);
    });

    it('should support record with string identifier', function () {
        var data = {
            "abc-1": { id: "abc-1", title: 'hello' },
            "abc-2": { id: "abc-2", title: 'world' }
        };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceManyField.ReferenceManyField,
            {
                resource: 'foo',
                reference: 'bar',
                target: 'foo_id',
                basePath: '',
                data: data,
                ids: ['abc-1', 'abc-2'],
                crudGetManyReference: function crudGetManyReference() {}
            },
            _react2.default.createElement(
                _SingleFieldList2.default,
                null,
                _react2.default.createElement(_TextField2.default, { source: 'title' })
            )
        ));
        var ProgressElements = wrapper.find('LinearProgress');
        _assert2.default.equal(ProgressElements.length, 0);
        var SingleFieldListElement = wrapper.find('SingleFieldList');
        _assert2.default.equal(SingleFieldListElement.length, 1);
        _assert2.default.equal(SingleFieldListElement.at(0).prop('resource'), 'bar');
        _assert2.default.deepEqual(SingleFieldListElement.at(0).prop('data'), data);
        _assert2.default.deepEqual(SingleFieldListElement.at(0).prop('ids'), ["abc-1", "abc-2"]);
    });

    it('should support record with number identifier', function () {
        var data = {
            1: { id: 1, title: 'hello' },
            2: { id: 2, title: 'world' }
        };
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceManyField.ReferenceManyField,
            {
                resource: 'foo',
                reference: 'bar',
                target: 'foo_id',
                basePath: '',
                data: data,
                ids: [1, 2],
                crudGetManyReference: function crudGetManyReference() {}
            },
            _react2.default.createElement(
                _SingleFieldList2.default,
                null,
                _react2.default.createElement(_TextField2.default, { source: 'title' })
            )
        ));
        var ProgressElements = wrapper.find('LinearProgress');
        _assert2.default.equal(ProgressElements.length, 0);
        var SingleFieldListElement = wrapper.find('SingleFieldList');
        _assert2.default.equal(SingleFieldListElement.length, 1);
        _assert2.default.equal(SingleFieldListElement.at(0).prop('resource'), 'bar');
        _assert2.default.deepEqual(SingleFieldListElement.at(0).prop('data'), data);
        _assert2.default.deepEqual(SingleFieldListElement.at(0).prop('ids'), [1, 2]);
    });
});