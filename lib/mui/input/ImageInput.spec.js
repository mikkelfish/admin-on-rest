'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _enzyme = require('enzyme');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ImageField = require('../field/ImageField');

var _ImageInput = require('./ImageInput');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('<ImageInput />', function () {
    it('should display a dropzone', function () {
        var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ImageInput.ImageInput, {
            input: {
                value: {
                    picture: null
                }
            },
            translate: function translate(x) {
                return x;
            },
            source: 'picture'
        }));

        _assert2.default.equal(wrapper.find('Dropzone').length, 1);
    });

    it('should display correct label depending multiple property', function () {
        var test = function test(multiple, expectedLabel) {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ImageInput.ImageInput, {
                multiple: multiple,
                input: {
                    value: {
                        picture: null
                    }
                },
                translate: function translate(x) {
                    return x;
                },
                source: 'picture'
            }));

            _assert2.default.equal(wrapper.find('Dropzone p').text(), expectedLabel);
        };

        test(false, 'aor.input.image.upload_single');
        test(true, 'aor.input.image.upload_several');
    });

    it('should display correct custom label', function () {
        var test = function test(expectedLabel) {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_ImageInput.ImageInput, {
                placeholder: expectedLabel,
                input: {
                    value: {
                        picture: null
                    }
                },
                translate: function translate(x) {
                    return x;
                },
                source: 'picture'
            }));

            _assert2.default.ok(wrapper.find('Dropzone').contains(expectedLabel));
        };
        var CustomLabel = function CustomLabel() {
            return _react2.default.createElement(
                'div',
                null,
                'Custom label'
            );
        };

        test('custom label');
        test(_react2.default.createElement(
            'h1',
            null,
            'Custom label'
        ));
        test(_react2.default.createElement(CustomLabel, null));
    });

    describe('Image Preview', function () {
        it('should display file preview using child as preview component', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
                _ImageInput.ImageInput,
                {
                    input: {
                        value: {
                            url: 'http://foo.com/bar.jpg',
                            title: 'Hello world!'
                        }
                    },
                    translate: function translate(x) {
                        return x;
                    }
                },
                _react2.default.createElement(_ImageField.ImageField, { source: 'url', title: 'title' })
            ));

            var previewImage = wrapper.find('ImageField');

            _assert2.default.equal(previewImage.length, 1);
            _assert2.default.equal(previewImage.prop('source'), 'url');
            _assert2.default.equal(previewImage.prop('title'), 'title');
            _assert2.default.deepEqual(previewImage.prop('record'), {
                title: 'Hello world!',
                url: 'http://foo.com/bar.jpg'
            });
        });

        it('should display all files (when several) previews using child as preview component', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
                _ImageInput.ImageInput,
                {
                    input: {
                        value: [{ url: 'http://foo.com/bar.jpg', title: 'Hello world!' }, { url: 'http://foo.com/qux.bmp', title: 'A good old Bitmap!' }]
                    },
                    translate: function translate(x) {
                        return x;
                    }
                },
                _react2.default.createElement(_ImageField.ImageField, { source: 'url', title: 'title' })
            ));

            var previewImages = wrapper.find('ImageField');

            _assert2.default.equal(previewImages.length, 2);
            _assert2.default.equal(previewImages.at(0).prop('source'), 'url');
            _assert2.default.equal(previewImages.at(0).prop('title'), 'title');
            _assert2.default.deepEqual(previewImages.at(0).prop('record').title, 'Hello world!');
            _assert2.default.deepEqual(previewImages.at(0).prop('record').url, 'http://foo.com/bar.jpg');

            _assert2.default.equal(previewImages.at(1).prop('source'), 'url');
            _assert2.default.equal(previewImages.at(1).prop('title'), 'title');
            _assert2.default.deepEqual(previewImages.at(1).prop('record').title, 'A good old Bitmap!');
            _assert2.default.deepEqual(previewImages.at(1).prop('record').url, 'http://foo.com/qux.bmp');
        });

        it('should update previews when updating input value', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
                _ImageInput.ImageInput,
                {
                    source: 'picture',
                    translate: function translate(x) {
                        return x;
                    },
                    input: {
                        value: {
                            url: 'http://static.acme.com/foo.jpg'
                        }
                    }
                },
                _react2.default.createElement(_ImageField.ImageField, { source: 'url' })
            ));

            var previewImage = wrapper.find('ImageField');
            var previewUrl = previewImage.prop('record').url;
            _assert2.default.equal(previewUrl, 'http://static.acme.com/foo.jpg');

            wrapper.setProps({
                input: {
                    value: {
                        url: 'http://static.acme.com/bar.jpg'
                    }
                }
            });

            wrapper.update();

            var updatedPreviewImage = wrapper.find('ImageField');
            var updatedPreviewUrl = updatedPreviewImage.prop('record').url;
            _assert2.default.equal(updatedPreviewUrl, 'http://static.acme.com/bar.jpg');
        });

        it('should update previews when dropping a file', function () {
            var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
                _ImageInput.ImageInput,
                {
                    source: 'picture',
                    translate: function translate(x) {
                        return x;
                    },
                    input: {}
                },
                _react2.default.createElement(_ImageField.ImageField, { source: 'url' })
            ));

            wrapper.setProps({
                input: {
                    value: {
                        preview: 'blob:http://localhost:8080/1234-5678'
                    }
                }
            });

            wrapper.update();

            var imagePreview = wrapper.find('ImageField');
            var previewUrl = imagePreview.prop('record').url;
            _assert2.default.equal(previewUrl, 'blob:http://localhost:8080/1234-5678');
        });
    });
});