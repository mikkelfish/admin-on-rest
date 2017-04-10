'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Pagination = require('./Pagination');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<Pagination />', function () {
    describe('mobile', function () {
        it('should render a condensed <Toolbar>', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pagination.Pagination, { page: 2, perPage: 5, total: 15, translate: function translate(x) {
                    return x;
                }, width: 1 }));
            var iconButtons = wrapper.find('IconButton');
            _assert2.default.equal(iconButtons.length, 2);
            var flatButtons = wrapper.find('FlatButton');
            _assert2.default.equal(flatButtons.length, 0);
        });
        it('should render only the text when no pagination is necessary', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pagination.Pagination, { page: 1, perPage: 20, total: 15, translate: function translate(x) {
                    return x;
                }, width: 1 }));
            var iconButtons = wrapper.find('IconButton');
            _assert2.default.equal(iconButtons.length, 0);
            var span = wrapper.find('span');
            _assert2.default.equal(span.text(), 'aor.navigation.page_range_info');
        });
    });
    describe('desktop', function () {
        it('should render a normal <Toolbar>', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pagination.Pagination, { page: 2, perPage: 5, total: 15, translate: function translate(x) {
                    return x;
                }, width: 2 }));
            var iconButtons = wrapper.find('IconButton');
            _assert2.default.equal(iconButtons.length, 0);
            var flatButtons = wrapper.find('FlatButton');
            _assert2.default.equal(flatButtons.length, 5);
        });
        it('should render only the text when no pagination is necessary', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_Pagination.Pagination, { page: 1, perPage: 20, total: 15, translate: function translate(x) {
                    return x;
                }, width: 2 }));
            var flatButtons = wrapper.find('FlatButton');
            _assert2.default.equal(flatButtons.length, 0);
            var span = wrapper.find('span');
            _assert2.default.equal(span.text(), 'aor.navigation.page_range_info');
        });
    });
});