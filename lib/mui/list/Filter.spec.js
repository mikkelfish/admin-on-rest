'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Filter = require('./Filter');

var _Filter2 = _interopRequireDefault(_Filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Filter />', function () {
    describe('With form context', function () {
        var defaultProps = {
            context: 'form',
            resource: 'posts'
        };

        it('should render a redux <FilterForm /> component', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Filter2.default, defaultProps));
            var form = wrapper.find('getContext(ReduxForm)');
            _assert2.default.equal(form.length, 1);
        });

        it('should pass `filterValues` as `initialValues` props', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Filter2.default, (0, _extends3.default)({}, defaultProps, { filterValues: { q: 'Lorem' } })));
            var form = wrapper.find('getContext(ReduxForm)').first();
            _assert2.default.deepEqual(form.prop('initialValues'), { q: 'Lorem' });
        });
    });
});