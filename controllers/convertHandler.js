function ConvertHandler() {

  this.getNum = function (input) {
    // let result;
    const numberRegex = /-?\d+(\.\d+)?/g;
    const matches = input.match(numberRegex);
    const number = matches ? Number(matches[0]) : NaN;
    // return result;
    return number;
  };

  this.getUnit = function (input) {
    // let result;
    const unitRegex = /[a-zA-Z]+/g;
    const matches = input.match(unitRegex);
    const unit = matches ? matches[0] : NaN;
    // return result;
    return unit;
  };

  this.getReturnUnit = function (initUnit) {
    let result;
    const units = {
      gal: 'l',
      l: 'gal',
      lbs: 'kg',
      kg: 'lbs',
      mi: 'km',
      km: 'mi'
    };
    if (units[initUnit]) {
      result = units[initUnit];
    }
    return result;
  };

  this.spellOutUnit = function (unit) {
    let result;
    const units = {
      gal: 'gallons',
      l: 'liters',
      lbs: 'pounds',
      kg: 'kilograms',
      mi: 'miles',
      km: 'kilometers'
    };
    if (units[unit]) {
      result = units[unit];
    }
    return result;
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (initUnit === 'gal') {
      result = initNum * galToL;
    } else if (initUnit === 'l') {
      result = initNum / galToL;
    } else if (initUnit === 'lbs') {
      result = initNum * lbsToKg;
    } else if (initUnit === 'kg') {
      result = initNum / lbsToKg;
    } else if (initUnit === 'mi') {
      result = initNum * miToKm;
    } else if (initUnit === 'km') {
      result = initNum / miToKm;
    }

    return result;
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    let result;
    const returnString = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    result = returnString;

    return result;
  };

}

module.exports = ConvertHandler;
