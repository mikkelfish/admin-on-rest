'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _List = require('./List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<List />', function () {
    var defaultProps = {
        resource: 'post',
        hasCreate: false,
        hasEdit: false,
        location: {},
        params: {},
        query: {},
        filterValues: {},
        total: 100,
        isLoading: false,
        crudGetList: function crudGetList() {},
        push: function push() {},
        translate: function translate() {}
    };

    describe('Filters', function () {
        var clock = void 0;
        beforeEach(function () {
            clock = _sinon2.default.useFakeTimers();
        });

        it('should call `changeListParams` prop function for each filter change', function () {
            var changeListParams = _sinon2.default.spy();
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
                _List.List,
                (0, _extends3.default)({}, defaultProps, {
                    changeListParams: changeListParams,
                    filterValues: {}
                }),
                _react2.default.createElement('div', null)
            ));

            wrapper.setProps({ filterValues: { q: 'hello' } });
            clock.tick(1000); // wait for debounce
            wrapper.setProps({ filterValues: {} });
            clock.tick(1000); // wait for debounce

            _assert2.default.deepEqual(changeListParams.args, [['post', { page: 1, perPage: 10, sort: 'id', order: 'DESC', filter: { q: 'hello' } }], ['post', { page: 1, perPage: 10, sort: 'id', order: 'DESC', filter: {} }]]);
        });

        it('should call `changeFormValue` prop function when a filter is removed (hidden)', function () {
            var changeListParams = _sinon2.default.spy();
            var changeFormValue = _sinon2.default.spy();
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
                _List.List,
                (0, _extends3.default)({}, defaultProps, {
                    changeListParams: changeListParams,
                    changeFormValue: changeFormValue
                }),
                _react2.default.createElement('div', null)
            ));

            wrapper.instance().hideFilter('q');

            _assert2.default.deepEqual(changeFormValue.args, [['filterForm', 'q', '']]);
        });

        afterEach(function () {
            if (clock) {
                clock.restore();
            }
        });
    });
});