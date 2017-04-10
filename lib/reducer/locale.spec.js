'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _locale = require('./locale');

var _locale2 = _interopRequireDefault(_locale);

var _index = require('../i18n/index');

var _localeActions = require('../actions/localeActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('locale reducer', function () {
    it('should return DEFAULT_LOCALE by default', function () {
        _assert2.default.equal(_index.DEFAULT_LOCALE, (0, _locale2.default)()(undefined, {}));
    });
    it('should change with CHANGE_LOCALE actions', function () {
        _assert2.default.equal('fr', (0, _locale2.default)()('en', { type: _localeActions.CHANGE_LOCALE, payload: 'fr' }));
    });
});