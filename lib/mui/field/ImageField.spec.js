'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _ImageField = require('./ImageField');

var _ImageField2 = _interopRequireDefault(_ImageField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ImageField />', function () {
    it('should return an empty div when record is not set', function () {
        _assert2.default.equal((0, _enzyme.shallow)(_react2.default.createElement(_ImageField2.default, { source: 'url' })).html(), '<div></div>');
    });

    it('should render an image with correct attributes based on `source` and `title`', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ImageField2.default, {
            record: {
                url: 'http://foo.com/bar.jpg',
                title: 'Hello world!'
            },
            source: 'url',
            title: 'title'
        }));

        var img = wrapper.find('img');
        _assert2.default.equal(img.prop('src'), 'http://foo.com/bar.jpg');
        _assert2.default.equal(img.prop('alt'), 'Hello world!');
        _assert2.default.equal(img.prop('title'), 'Hello world!');
    });

    it('should support deep linking', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ImageField2.default, {
            record: {
                picture: {
                    url: 'http://foo.com/bar.jpg',
                    title: 'Hello world!'
                }
            },
            source: 'picture.url',
            title: 'picture.title'
        }));

        var img = wrapper.find('img');
        _assert2.default.equal(img.prop('src'), 'http://foo.com/bar.jpg');
        _assert2.default.equal(img.prop('alt'), 'Hello world!');
        _assert2.default.equal(img.prop('title'), 'Hello world!');
    });

    it('should allow setting static string as title', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ImageField2.default, {
            record: {
                url: 'http://foo.com/bar.jpg'
            },
            source: 'url',
            title: 'Hello world!'
        }));

        var img = wrapper.find('img');
        _assert2.default.equal(img.prop('alt'), 'Hello world!');
        _assert2.default.equal(img.prop('title'), 'Hello world!');
    });
});