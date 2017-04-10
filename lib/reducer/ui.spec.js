'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _uiActions = require('../actions/uiActions');

var _ui = require('./ui');

var _ui2 = _interopRequireDefault(_ui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ui reducer', function () {
    it('should return hidden sidebar by default', function () {
        _assert2.default.deepEqual({ sidebarOpen: false }, (0, _ui2.default)(undefined, {}));
    });
    it('should toggle sidebar visibility upon TOGGLE_SIDEBAR', function () {
        _assert2.default.deepEqual({ sidebarOpen: false }, (0, _ui2.default)({ sidebarOpen: true }, (0, _uiActions.toggleSidebar)()));
        _assert2.default.deepEqual({ sidebarOpen: true }, (0, _ui2.default)({ sidebarOpen: false }, (0, _uiActions.toggleSidebar)()));
    });
    it('should set sidebar visibility upon SET_SIDEBAR_VISIBILITY', function () {
        _assert2.default.deepEqual({ sidebarOpen: false }, (0, _ui2.default)({ sidebarOpen: true }, (0, _uiActions.setSidebarVisibility)(false)));
        _assert2.default.deepEqual({ sidebarOpen: true }, (0, _ui2.default)({ sidebarOpen: true }, (0, _uiActions.setSidebarVisibility)(true)));
        _assert2.default.deepEqual({ sidebarOpen: false }, (0, _ui2.default)({ sidebarOpen: false }, (0, _uiActions.setSidebarVisibility)(false)));
        _assert2.default.deepEqual({ sidebarOpen: true }, (0, _ui2.default)({ sidebarOpen: false }, (0, _uiActions.setSidebarVisibility)(true)));
    });
});