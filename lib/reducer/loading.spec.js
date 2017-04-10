'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _fetchActions = require('../actions/fetchActions');

var _loading = require('./loading');

var _loading2 = _interopRequireDefault(_loading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('loading reducer', function () {
    it('should return 0 by default', function () {
        _assert2.default.equal(0, (0, _loading2.default)(undefined, {}));
    });
    it('should increase with fetch actions', function () {
        _assert2.default.equal(1, (0, _loading2.default)(0, { type: _fetchActions.FETCH_START }));
    });
    it('should decrease with fetch actions success or failure', function () {
        _assert2.default.equal(0, (0, _loading2.default)(1, { type: _fetchActions.FETCH_END }));
        _assert2.default.equal(0, (0, _loading2.default)(1, { type: _fetchActions.FETCH_ERROR }));
        _assert2.default.equal(0, (0, _loading2.default)(1, { type: _fetchActions.FETCH_CANCEL }));
    });
});