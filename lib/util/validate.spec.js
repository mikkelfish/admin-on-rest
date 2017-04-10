'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _validate = require('./validate');

var _TextInput = require('../mui/input/TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Validator', function () {
    describe('Core Constraints', function () {
        it('.required should return error message if field is empty', function () {
            _assert2.default.equal(_validate.coreConstraints.required(), 'Required field');
            _assert2.default.equal(_validate.coreConstraints.required(''), 'Required field');
            _assert2.default.equal(_validate.coreConstraints.required(null), 'Required field');

            _assert2.default.equal(_validate.coreConstraints.required('foo'), null);
            _assert2.default.equal(_validate.coreConstraints.required(12), null);
        });

        // coreConstraints.min(value, _, minimumValue)
        it('.min should return an error message including min value if value is lower than given minimum', function () {
            _assert2.default.equal(_validate.coreConstraints.min(undefined, {}, 1), null);
            _assert2.default.equal(_validate.coreConstraints.min(null, {}, 1), null);
            _assert2.default.equal(_validate.coreConstraints.min('', {}, 1), null);
            _assert2.default.equal(_validate.coreConstraints.min(1, {}, 1), null);
            _assert2.default.equal(_validate.coreConstraints.min(2, {}, 1), null);
            _assert2.default.equal(_validate.coreConstraints.min(1.2, {}, 1), null);
            _assert2.default.equal(_validate.coreConstraints.min('12', {}, 1), null);
            _assert2.default.equal(_validate.coreConstraints.min('12aqd', {}, 1), null);

            _assert2.default.equal(_validate.coreConstraints.min('foobar', {}, 1), 'Minimum value: 1');
            _assert2.default.equal(_validate.coreConstraints.min(0, {}, 1), 'Minimum value: 1');
        });

        // coreConstraints.max(value, _, minimumValue)
        it('.min should return an error message including max value if value is greater than given maximum', function () {
            _assert2.default.equal(_validate.coreConstraints.max(undefined, {}, 10), null);
            _assert2.default.equal(_validate.coreConstraints.max(null, {}, 10), null);
            _assert2.default.equal(_validate.coreConstraints.max('', {}, 10), null);
            _assert2.default.equal(_validate.coreConstraints.max(0, {}, 10), null);
            _assert2.default.equal(_validate.coreConstraints.max(1, {}, 10), null);
            _assert2.default.equal(_validate.coreConstraints.max(1.2, {}, 10), null);
            _assert2.default.equal(_validate.coreConstraints.max('2', {}, 10), null);
            _assert2.default.equal(_validate.coreConstraints.max('2aqd', {}, 10), null);

            _assert2.default.equal(_validate.coreConstraints.max('foobar', {}, 10), 'Maximum value: 10');
            _assert2.default.equal(_validate.coreConstraints.max(12, {}, 10), 'Maximum value: 10');
        });

        it('.minLength should return an error message including length if string is too short', function () {
            _assert2.default.equal(_validate.coreConstraints.minLength(undefined, {}, 5), 'Minimum length: 5');
            _assert2.default.equal(_validate.coreConstraints.minLength(null, {}, 5), 'Minimum length: 5');
            _assert2.default.equal(_validate.coreConstraints.minLength(10, {}, 5), 'Minimum length: 5');
            _assert2.default.equal(_validate.coreConstraints.minLength('', {}, 5), 'Minimum length: 5');
            _assert2.default.equal(_validate.coreConstraints.minLength('tiny', {}, 5), 'Minimum length: 5');
            _assert2.default.equal(_validate.coreConstraints.minLength('small', {}, 5), null);
            _assert2.default.equal(_validate.coreConstraints.minLength('quite long', {}, 5), null);
        });

        it('.maxLength should return an error message including length if string is too long', function () {
            _assert2.default.equal(_validate.coreConstraints.maxLength(undefined, {}, 5), null);
            _assert2.default.equal(_validate.coreConstraints.maxLength(null, {}, 5), null);
            _assert2.default.equal(_validate.coreConstraints.maxLength(10, {}, 5), null);
            _assert2.default.equal(_validate.coreConstraints.maxLength('', {}, 5), null);
            _assert2.default.equal(_validate.coreConstraints.maxLength('tiny', {}, 5), null);
            _assert2.default.equal(_validate.coreConstraints.maxLength('small', {}, 5), null);
            _assert2.default.equal(_validate.coreConstraints.maxLength('quite long', {}, 5), 'Maximum length: 5');
        });

        it('.email should test entered email address is a valid one', function () {
            _assert2.default.equal(_validate.coreConstraints.email(undefined), null);
            _assert2.default.equal(_validate.coreConstraints.email(null), null);
            _assert2.default.equal(_validate.coreConstraints.email(10), 'Must be a valid email');
            _assert2.default.equal(_validate.coreConstraints.email(''), null);
            _assert2.default.equal(_validate.coreConstraints.email('foobar'), 'Must be a valid email');
            _assert2.default.equal(_validate.coreConstraints.email('john.doe@mycompany.com'), null);
        });

        it('.regex should return given error message if given value does not match the passed regex', function () {
            var regex = { pattern: /a{2,}$/, message: 'Must finish by (at least) two a' };

            _assert2.default.equal(_validate.coreConstraints.regex(undefined, {}, regex), null);
            _assert2.default.equal(_validate.coreConstraints.regex(null, {}, regex), null);
            _assert2.default.equal(_validate.coreConstraints.regex(10, {}, regex), 'Must finish by (at least) two a');
            _assert2.default.equal(_validate.coreConstraints.regex('hello', {}, regex), 'Must finish by (at least) two a');
            _assert2.default.equal(_validate.coreConstraints.regex('Time for teaaa', {}, regex), null);
            _assert2.default.equal(_validate.coreConstraints.regex('Time for tea!', {}, (0, _extends3.default)({}, regex, {
                message: 'Another error message'
            })), 'Another error message');
        });

        it('.choices should return given error message if given value is not in given list', function () {
            var params = {
                list: ['Koa', 'Express'],
                message: 'Should be a Node.js framework'
            };

            _assert2.default.equal(_validate.coreConstraints.choices(undefined, {}, params), null);
            _assert2.default.equal(_validate.coreConstraints.choices(null, {}, params), null);
            _assert2.default.equal(_validate.coreConstraints.choices(10, {}, params), 'Should be a Node.js framework');
            _assert2.default.equal(_validate.coreConstraints.choices('Symfony', {}, params), 'Should be a Node.js framework');
            _assert2.default.equal(_validate.coreConstraints.choices('Express', {}, params), null);
            _assert2.default.equal(_validate.coreConstraints.choices('Spip', {}, (0, _extends3.default)({}, params, {
                message: 'Should be either Koa or Express'
            })), 'Should be either Koa or Express');
        });

        describe('.custom', function () {
            it('should return result of given function', function () {
                _assert2.default.equal(_validate.coreConstraints.custom(1, {}, function () {
                    return 'Error';
                }), 'Error');
                _assert2.default.equal(_validate.coreConstraints.custom(1, {}, function () {
                    return '';
                }), '');
            });

            it('should pass edited value and whole record values as arguments', function () {
                var passedArguments = void 0;
                var record = { react: 15, angular: 2 };

                _validate.coreConstraints.custom('foo', record, function () {
                    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                        args[_key] = arguments[_key];
                    }

                    passedArguments = args;
                });
                _assert2.default.deepEqual(passedArguments, ['foo', record]);
            });
        });
    });

    describe('getConstraintsFunctionFromFunctionOrObject', function () {
        it('should return passed function if given constraint is already a function', function () {
            var barFactory = function barFactory() {
                return 'bar';
            };
            var constraintsFunction = (0, _validate.getConstraintsFunctionFromFunctionOrObject)(barFactory);
            _assert2.default.equal(constraintsFunction, barFactory);
        });

        it('should return a function checking all given constraints as single function', function () {
            var constraints = {
                required: true,
                min: 100
            };

            var constraintsFunction = (0, _validate.getConstraintsFunctionFromFunctionOrObject)(constraints);
            _assert2.default.equal(constraintsFunction(''), 'Required field');
            _assert2.default.equal(constraintsFunction(10), 'Minimum value: 100');
        });

        it('should throw an error if validation is neither a function nor an object', function () {
            [false, true, '', 'foobar', 12, [1, 2]].forEach(function (constraints) {
                try {
                    (0, _validate.getConstraintsFunctionFromFunctionOrObject)(constraints);
                } catch (e) {
                    _assert2.default.equal(e.message, 'Unsupported validation type');
                    return;
                }

                throw new Error('Passing ' + constraints + ' to getConstraintsFunction should throw an error');
            });
        });
    });

    describe('validateForm', function () {
        it('should return empty object if no validator return error message', function () {
            var props = {
                validation: {
                    title: {
                        custom: function custom() {
                            return '';
                        }
                    }
                }
            };

            var errors = (0, _validate.validateForm)({ title: 'We <3 React!' }, props);
            _assert2.default.deepEqual(errors, []);
        });

        it('should return validation function result if validation function is passed to the form', function () {
            var props = {
                validation: function validation(values) {
                    var errors = {};
                    if (!values.title) {
                        errors.title = 'Required field';
                    }

                    if (values.rate < 0 || values.rate > 5) {
                        errors.rate = 'Rate should be between 0 and 5.';
                    }

                    return errors;
                }
            };

            var errors = (0, _validate.validateForm)({ title: '', rate: 12 }, props);
            _assert2.default.deepEqual(errors, {
                title: 'Required field',
                rate: 'Rate should be between 0 and 5.'
            });
        });

        it('should allow to specify validators on inputs directly', function () {
            var props = {
                children: _react2.default.createElement(_TextInput2.default, { source: 'title', validation: { required: true } })
            };

            var errors = (0, _validate.validateForm)({ title: '' }, props);
            _assert2.default.deepEqual(errors, {
                title: ['Required field']
            });
        });

        it('should apply both input and form validators', function () {
            var props = {
                children: _react2.default.createElement(_TextInput2.default, { source: 'rate', validation: { required: true } }),
                validation: function validation(values) {
                    return values.rate > 5 ? { rate: 'Maximum value: 5' } : {};
                }
            };

            var nullError = (0, _validate.validateForm)({ rate: '' }, props);
            _assert2.default.deepEqual(nullError, { rate: ['Required field'] });

            var valueError = (0, _validate.validateForm)({ rate: 6 }, props);
            _assert2.default.deepEqual(valueError, { rate: 'Maximum value: 5' });
        });
    });

    describe('getErrorsForForm', function () {
        var values = { foo: 1, bar: 2, hello: 'world' };

        it('should return an empty object when no validation function is passed', function () {
            _assert2.default.deepEqual({}, (0, _validate.getErrorsForForm)(null, values));
        });

        it('should return an empty object when all values are correct', function () {
            var validate = function validate(v) {
                return v.foo !== 1 ? { foo: ['error'] } : {};
            }; // eslint-disable-line no-confusing-arrow
            _assert2.default.deepEqual({}, (0, _validate.getErrorsForForm)(validate, values));
        });

        it('should return an error object for incorrect values', function () {
            var validate = function validate(v) {
                return v.foo !== 2 ? { foo: ['error'] } : {};
            }; // eslint-disable-line no-confusing-arrow
            _assert2.default.deepEqual({ foo: ['error'] }, (0, _validate.getErrorsForForm)(validate, values));
        });
    });

    describe('getErrorsForFieldConstraints', function () {
        var values = { foo: 1, bar: 2, hello: 'world' };

        it('should return an empty object when all values are correct', function () {
            var constraints = {
                foo: function foo(_) {
                    return [];
                }
            };
            _assert2.default.deepEqual({}, (0, _validate.getErrorsForFieldConstraints)(constraints, values));
        });

        it('should return an error object for incorrect values', function () {
            var constraints = {
                foo: function foo(_) {
                    return [];
                },
                bar: function bar(_) {
                    return ['error'];
                }
            };
            _assert2.default.deepEqual({ bar: ['error'] }, (0, _validate.getErrorsForFieldConstraints)(constraints, values));
        });

        it('should work for nested fields', function () {
            var values = { foo: { bar: 1 } };
            var constraints = {
                'foo.bar': function fooBar(v) {
                    return v === 1 ? ['error'] : [];
                }
            };
            _assert2.default.deepEqual({ foo: { bar: ['error'] } }, (0, _validate.getErrorsForFieldConstraints)(constraints, values));
        });
    });
});