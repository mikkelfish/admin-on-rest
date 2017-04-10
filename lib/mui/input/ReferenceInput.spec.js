'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

var _ReferenceInput = require('./ReferenceInput');

var _SelectInput = require('./SelectInput');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ReferenceInput />', function () {
    var defaultProps = {
        crudGetMatching: function crudGetMatching() {
            return true;
        },
        crudGetOne: function crudGetOne() {
            return true;
        },
        input: {},
        reference: 'posts',
        resource: 'comments',
        source: 'post_id'
    };
    var MyComponent = function MyComponent() {
        return _react2.default.createElement('span', { id: 'mycomponent' });
    };

    it('should not render anything if there is no referenceRecord and allowEmpty is false', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceInput.ReferenceInput,
            defaultProps,
            _react2.default.createElement(MyComponent, null)
        ));
        var MyComponentElement = wrapper.find('MyComponent');
        _assert2.default.equal(MyComponentElement.length, 0);
    });

    it('should not render enclosed component if allowEmpty is true', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceInput.ReferenceInput,
            (0, _extends3.default)({}, defaultProps, { allowEmpty: true }),
            _react2.default.createElement(MyComponent, null)
        ));
        var MyComponentElement = wrapper.find('MyComponent');
        _assert2.default.equal(MyComponentElement.length, 1);
    });

    it('should call crudGetMatching on mount with default fetch values', function () {
        var crudGetMatching = _sinon2.default.spy();
        (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceInput.ReferenceInput,
            (0, _extends3.default)({}, defaultProps, { allowEmpty: true, crudGetMatching: crudGetMatching }),
            _react2.default.createElement(MyComponent, null)
        ), { lifecycleExperimental: true });
        _assert2.default.deepEqual(crudGetMatching.args[0], ['posts', 'comments@post_id', {
            page: 1,
            perPage: 25
        }, {
            field: 'id',
            order: 'DESC'
        }, {}]);
    });

    it('should allow to customize crudGetMatching arguments with perPage, sort, and filter props', function () {
        var crudGetMatching = _sinon2.default.spy();
        (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceInput.ReferenceInput,
            (0, _extends3.default)({}, defaultProps, {
                allowEmpty: true,
                crudGetMatching: crudGetMatching,
                sort: { field: 'foo', order: 'ASC' },
                perPage: 5,
                filter: { q: 'foo' }
            }),
            _react2.default.createElement(MyComponent, null)
        ), { lifecycleExperimental: true });
        _assert2.default.deepEqual(crudGetMatching.args[0], ['posts', 'comments@post_id', {
            page: 1,
            perPage: 5
        }, {
            field: 'foo',
            order: 'ASC'
        }, {
            q: 'foo'
        }]);
    });

    it('should call crudGetMatching when setFilter is called', function () {
        var crudGetMatching = _sinon2.default.spy();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceInput.ReferenceInput,
            (0, _extends3.default)({}, defaultProps, {
                allowEmpty: true,
                crudGetMatching: crudGetMatching
            }),
            _react2.default.createElement(MyComponent, null)
        ), { lifecycleExperimental: true });
        wrapper.instance().setFilter('bar');
        _assert2.default.deepEqual(crudGetMatching.args[1], ['posts', 'comments@post_id', {
            page: 1,
            perPage: 25
        }, {
            field: 'id',
            order: 'DESC'
        }, {
            q: 'bar'
        }]);
    });

    it('should use custom filterToQuery function prop', function () {
        var crudGetMatching = _sinon2.default.spy();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceInput.ReferenceInput,
            (0, _extends3.default)({}, defaultProps, {
                allowEmpty: true,
                crudGetMatching: crudGetMatching,
                filterToQuery: function filterToQuery(searchText) {
                    return { foo: searchText };
                }
            }),
            _react2.default.createElement(MyComponent, null)
        ), { lifecycleExperimental: true });
        wrapper.instance().setFilter('bar');
        _assert2.default.deepEqual(crudGetMatching.args[1], ['posts', 'comments@post_id', {
            page: 1,
            perPage: 25
        }, {
            field: 'id',
            order: 'DESC'
        }, {
            foo: 'bar'
        }]);
    });

    it('should call crudGetOne on mount if value is set', function () {
        var crudGetOne = _sinon2.default.spy();
        (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceInput.ReferenceInput,
            (0, _extends3.default)({}, defaultProps, {
                allowEmpty: true,
                crudGetOne: crudGetOne,
                input: { value: 5 }
            }),
            _react2.default.createElement(MyComponent, null)
        ), { lifecycleExperimental: true });
        _assert2.default.deepEqual(crudGetOne.args[0], ['posts', 5, null, false]);
    });

    it('should pass onChange down to child component', function () {
        var onChange = _sinon2.default.spy();
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceInput.ReferenceInput,
            (0, _extends3.default)({}, defaultProps, {
                allowEmpty: true,
                onChange: onChange
            }),
            _react2.default.createElement(MyComponent, null)
        ));
        wrapper.find('MyComponent').simulate('change', 'foo');
        _assert2.default.deepEqual(onChange.args[0], ['foo']);
    });

    it('should pass meta down to child component', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
            _ReferenceInput.ReferenceInput,
            (0, _extends3.default)({}, defaultProps, {
                allowEmpty: true,
                meta: { touched: false }
            }),
            _react2.default.createElement(MyComponent, null)
        ));

        var myComponent = wrapper.find('MyComponent');
        _assert2.default.notEqual(myComponent.prop('meta', undefined));
    });
});