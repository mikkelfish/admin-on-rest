'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _notificationActions = require('../actions/notificationActions');

var _notification = require('./notification');

var _notification2 = _interopRequireDefault(_notification);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('notification reducer', function () {
    it('should return empty notification by default', function () {
        _assert2.default.deepEqual({ text: '', type: 'info' }, (0, _notification2.default)(undefined, {}));
    });
    it('should set text and type upon SHOW_NOTIFICATION', function () {
        _assert2.default.deepEqual({ text: 'foo', type: 'warning' }, (0, _notification2.default)(undefined, {
            type: _notificationActions.SHOW_NOTIFICATION,
            payload: { text: 'foo', type: 'warning' }
        }));
    });
    it('should set text to empty string upon HIDE_NOTIFICATION', function () {
        _assert2.default.deepEqual({ text: '', type: 'warning' }, (0, _notification2.default)({ text: 'foo', type: 'warning' }, { type: _notificationActions.HIDE_NOTIFICATION }));
    });
});