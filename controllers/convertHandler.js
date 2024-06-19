let inputRegex = /[^a-z]+|[a-z]+/gi;
function ConvertHandler() {

  this.getNum = function (input) {
    // let result;
    // const numberRegex = /-?\d+(\.\d+)?/g;
    const matches = input.match(inputRegex);
    const number = matches ? Number(matches[0]) : NaN;
    // return result;
    return number;
  };

  this.getUnit = function (input) {
    // let result;
    // const unitRegex = /[a-zA-Z]+/g;
    const matches = input.match(inputRegex);
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
    const lToGal = 1 / galToL;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    if (initUnit === 'gal' || initUnit === 'GAL') {
      result = (initNum * galToL).toFixed(5);
    } else if (initUnit === 'l' || initUnit === 'L') {
      result = (initNum * lToGal).toFixed(5);
    } else if (initUnit === 'lbs' || initUnit === 'LBS') {
      result = (initNum * lbsToKg).toFixed(5);
    } else if (initUnit === 'kg' || initUnit === 'KG') {
      result = (initNum / lbsToKg).toFixed(5);
    } else if (initUnit === 'mi' || initUnit === 'MI') {
      result = (initNum * miToKm).toFixed(5);
    } else if (initUnit === 'km' || initUnit === 'KM') {
      result = (initNum / miToKm).toFixed(5);
    } else {
      result = 'invalid unit';
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
