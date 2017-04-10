'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _queryReducer = require('./queryReducer');

var _queryReducer2 = _interopRequireDefault(_queryReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Query Reducer', function () {
    describe('SET_PAGE action', function () {
        it('should update the page', function () {
            var updatedState = (0, _queryReducer2.default)({
                page: 1
            }, {
                type: 'SET_PAGE',
                payload: 2
            });
            _assert2.default.equal(updatedState.page, 2);
        });
        it('should not update the filter', function () {
            var initialFilter = {};
            var updatedState = (0, _queryReducer2.default)({
                filter: initialFilter,
                page: 1
            }, {
                type: 'SET_PAGE',
                payload: 2
            });
            _assert2.default.equal(updatedState.filter, initialFilter);
        });
    });
    describe('SET_FILTER action', function () {
        it('should add new filter with given value when set', function () {
            var updatedState = (0, _queryReducer2.default)({}, {
                type: 'SET_FILTER',
                payload: { title: 'foo' }
            });
            _assert2.default.deepEqual(updatedState.filter, { title: 'foo' });
        });

        it('should replace existing filter with given value', function () {
            var updatedState = (0, _queryReducer2.default)({
                filter: {
                    title: 'foo'
                }
            }, {
                type: 'SET_FILTER',
                payload: { title: 'bar' }
            });

            _assert2.default.deepEqual(updatedState.filter, { title: 'bar' });
        });

        it('should reset page to 1', function () {
            var updatedState = (0, _queryReducer2.default)({ page: 3 }, { type: 'SET_FILTER', payload: {} });
            _assert2.default.equal(updatedState.page, 1);
        });
    });
});