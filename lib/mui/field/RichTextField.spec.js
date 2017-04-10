'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _RichTextField = require('./RichTextField');

var _RichTextField2 = _interopRequireDefault(_RichTextField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('stripTags', function () {
    it('should strip HTML tags from input', function () {
        _assert2.default.equal((0, _RichTextField.removeTags)('<h1>Hello world!</h1>'), 'Hello world!');
        _assert2.default.equal((0, _RichTextField.removeTags)('<p>Cake is a lie</p>'), 'Cake is a lie');
    });

    it('should strip HTML tags even with attributes', function () {
        _assert2.default.equal((0, _RichTextField.removeTags)('<a href="http://www.zombo.com">Zombo</a>'), 'Zombo');
        _assert2.default.equal((0, _RichTextField.removeTags)('<a target="_blank" href="http://www.zombo.com">Zombo</a>'), 'Zombo');
    });

    it('should strip HTML tags splitted on several lines', function () {
        _assert2.default.equal((0, _RichTextField.removeTags)('<a\n            href="http://www.zombo.com"\n        >Zombo</a>'), 'Zombo');
    });

    it('should strip HTML embedded tags', function () {
        _assert2.default.equal((0, _RichTextField.removeTags)('<marquee><a href="http://www.zombo.com">Zombo</a></marquee>'), 'Zombo');
    });

    it('should strip HTML tags even if they are malformed', function () {
        _assert2.default.equal((0, _RichTextField.removeTags)('<p>All our base is belong to us.<p>'), 'All our base is belong to us.');
    });
});

describe('<RichTextField />', function () {
    it('should render as HTML', function () {
        var record = { body: '<h1>Hello world!</h1>' };
        var wrapper = (0, _enzyme.render)(_react2.default.createElement(_RichTextField2.default, { record: record, source: 'body' }));
        _assert2.default.equal(wrapper.html(), '<div><h1>Hello world!</h1></div>');
    });

    it('should handle deep fields', function () {
        var record = { foo: { body: '<h1>Hello world!</h1>' } };
        var wrapper = (0, _enzyme.render)(_react2.default.createElement(_RichTextField2.default, { record: record, source: 'foo.body' }));
        _assert2.default.equal(wrapper.html(), '<div><h1>Hello world!</h1></div>');
    });

    it('should strip HTML tags if stripTags is set to true', function () {
        var record = { body: '<h1>Hello world!</h1>' };
        var wrapper = (0, _enzyme.render)(_react2.default.createElement(_RichTextField2.default, { stripTags: true, record: record, source: 'body' }));

        _assert2.default.equal(wrapper.html(), '<div>Hello world!</div>');
    });

    it('should not strip HTML tags if stripTags is set to false', function () {
        var record = { body: '<h1>Hello world!</h1>' };
        var wrapper = (0, _enzyme.render)(_react2.default.createElement(_RichTextField2.default, { stripTags: false, record: record, source: 'body' }));

        _assert2.default.equal(wrapper.html(), '<div><h1>Hello world!</h1></div>');
    });
});