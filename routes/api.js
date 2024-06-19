'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  let convertHandler = new ConvertHandler();
  app.route('/api/convert').get((req, res) => {
    let input = req.query.input;
    let initNum = convertHandler.getNum(input);
    let initUnit = convertHandler.getUnit(input);
    let returnNum;
    let returnUnit;
    if (initNum === 'invalid number' || initUnit === 'invalid unit') {
      returnNum = 'invalid number';
      returnUnit = 'invalid unit';
    } else {
      returnNum = convertHandler.convert(initNum, initUnit);
      returnUnit = convertHandler.getReturnUnit(initUnit);
    }
    let string = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
    res.json({ initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: string });

  });
};
