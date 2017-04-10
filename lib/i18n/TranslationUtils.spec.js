'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('TranslationUtils', function () {
    describe('resolveBrowserLocale', function () {
        beforeEach(function () {
            global.window = {};
        });

        it('should return default locale if there\'s no available locale in browser', function () {
            window.navigator = {};
            (0, _assert2.default)((0, _index.resolveBrowserLocale)(), _index.DEFAULT_LOCALE);
        });

        it('should splice browser language to take first two locale letters', function () {
            window.navigator = { language: 'en-US' };
            (0, _assert2.default)((0, _index.resolveBrowserLocale)(), 'en');
        });
    });
});