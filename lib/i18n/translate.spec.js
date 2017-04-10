'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _translate = require('./translate');

var _translate2 = _interopRequireDefault(_translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('translate HOC', function () {
    it('should conserve base component default props', function () {
        var Component = function Component() {
            return _react2.default.createElement('div', null);
        };
        Component.defaultProps = { foo: 'bar' };

        var TranslatedComponent = (0, _translate2.default)(Component);
        _assert2.default.deepEqual(TranslatedComponent.defaultProps, { foo: 'bar' });
    });
});