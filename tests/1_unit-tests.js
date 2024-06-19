const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function () {

    test('1 unit gal to l', function (done) {
        assert.equal(convertHandler.convert(5, 'gal'), 18.92705);
        done();
    });

    test('1 unit l to gal', function (done) {
        assert.equal(convertHandler.convert(5, 'l'), 1.32086);
        done();
    });

    test('1 unit mi to km', function (done) {
        assert.equal(convertHandler.convert(5, 'mi'), 8.0467);
        done();
    });

    test('1 unit km to mi', function (done) {
        assert.equal(convertHandler.convert(5, 'km'), 3.10686);
        done();
    });

    test('1 unit lbs to kg', function (done) {
        assert.equal(convertHandler.convert(5, 'lbs'), 2.26796);
        done();
    });

    test('1 unit kg to lbs', function (done) {
        assert.equal(convertHandler.convert(5, 'kg'), 11.02312);
        done();
    });

    test('invalid unit', function (done) {
        assert.equal(convertHandler.convert(5, 'invalid'), 'invalid unit');
        done();
    });

    test('invalid number and unit', function (done) {
        assert.equal(convertHandler.convert('invalid', 'invalid'), 'invalid number and unit');
        done();
    });

    test('no number and unit', function (done) {
        assert.equal(convertHandler.convert(), 'invalid number and unit');
        done();
    });

    test('no number', function (done) {
        assert.equal(convertHandler.convert(''), 'invalid number');
        done();
    });

    test('no number and no unit', function (done) {
        assert.equal(convertHandler.convert(), 'invalid number and unit');
        done();
    });

    test('no number and unit', function (done) {
        assert.equal(convertHandler.convert('gal'), 'invalid number and unit');
        done();
    });

});