'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _getMuiTheme = require('material-ui/styles/getMuiTheme');

var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _TranslationProvider = require('../../i18n/TranslationProvider');

var _TranslationProvider2 = _interopRequireDefault(_TranslationProvider);

var _FilterForm = require('./FilterForm');

var _FilterForm2 = _interopRequireDefault(_FilterForm);

var _TextInput = require('../input/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

try {
    require('react-tap-event-plugin')();
} catch (e) {
    // already loaded, probably in watch mode
    // do nothing
}

describe('<FilterForm />', function () {
    var defaultProps = {
        resource: 'post',
        filters: [],
        setFilter: function setFilter() {},
        hideFilter: function hideFilter() {},
        displayedFilters: {},
        filterValues: {},
        translate: function translate(x) {
            return x;
        }
    };

    var store = void 0;
    beforeEach(function () {
        store = (0, _redux.createStore)(function () {
            return { locale: 'en' };
        });
    });

    it('should display correctly passed filters', function () {
        var filters = [_react2.default.createElement(_TextInput2.default, { source: 'title', label: 'Title' })];
        var displayedFilters = { title: true };

        var muiTheme = (0, _getMuiTheme2.default)({ userAgent: false });
        var wrapper = (0, _enzyme.render)(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _TranslationProvider2.default,
                null,
                _react2.default.createElement(
                    _MuiThemeProvider2.default,
                    { muiTheme: muiTheme },
                    _react2.default.createElement(_FilterForm2.default, (0, _extends3.default)({}, defaultProps, {
                        filters: filters,
                        displayedFilters: displayedFilters
                    }))
                )
            )
        ));

        var titleFilter = wrapper.find('input[type="text"]');
        _assert2.default.equal(titleFilter.length, 1);
    });
});