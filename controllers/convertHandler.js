/**
 * This function takes a string as an input and returns the converted input.
 * It first splits the string by numbers and units, then checks if the string
 * contains a fraction. If it does, it splits the fraction, and if it doesn't
 * it assigns 1 to the second number. It then divides the two numbers and
 * returns the result. If the input is invalid, it returns undefined.
 * @param {string} input
 * @return {number|undefined}
 */
function numberStringSplitter(input) {
  let number = input.match(/[.\d\/]+/g) || ["1"];
  let string = input.match(/[a-zA-Z]+/g)[0];

  return [number[0], string];
}

/**
 * This function takes a string as an argument and checks if the string
 * represents a division (i.e., contains a "/"). If it does, it splits the
 * string into two numbers and returns them as an array. If the string contains
 * two or more "/" characters, or if the string is empty, the function returns
 * undefined.
 * @param {string} possibleFraction
 * @return {array|undefined}
 */
function checkDiv(possibleFraction) {
  let nums = possibleFraction.split("/");
  if (nums.length > 2) {
    return false;
  }
  return nums;
}

/**
 * A class that takes in a string as an input and returns the converted input,
 * the unit of the input, the converted unit, and the string to print out.
 */
function ConvertHandler() {
  /**
   * This function takes a string as an input and returns the converted input.
   * It first splits the string by numbers and units, then checks if the string
   * contains a fraction. If it does, it splits the fraction, and if it doesn't
   * it assigns 1 to the second number. It then divides the two numbers and
   * returns the result. If the input is invalid, it returns undefined.
   * @param {string} input
   * @return {number|undefined}
   */
  this.getNum = function (input) {
    let result = numberStringSplitter(input)[0];
    let nums = checkDiv(result);
    if (!nums) {
      return undefined;
    }

    let num1 = nums[0];
    let num2 = nums[1] || 1;

    result = parseFloat(num1) / parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      return undefined;
    }

    return result;
  };

  /**
   * This function takes a string as an input and returns the converted input.
   * It first splits the string by numbers and units, then checks if the string
   * contains a fraction. If it does, it splits the fraction, and if it doesn't
   * it assigns 1 to the second number. It then divides the two numbers and
   * returns the result. If the input is invalid, it returns undefined.
   * @param {string} input
   * @return {number|undefined}
   */
  this.getUnit = function (input) {
    let result = numberStringSplitter(input)[1].toLowerCase();
    switch (result) {
      case "km":
        return "km";
      case "gal":
        return "gal";
      case "lbs":
        return "lbs";
      case "mi":
        return "mi";
      case "l":
        return "L";
      case "kg":
        return "kg";
      default:
        return undefined;
    }
  };

  /**
   * This function takes a unit as an input and returns the converted unit.
   * If the input is invalid, it returns undefined.
   * @param {string} initUnit
   * @return {string|undefined}
   */
  this.getReturnUnit = function (initUnit) {
    let unit = initUnit.toLowerCase();

    switch (unit) {
      case "km":
        return "mi";
      case "gal":
        return "L";
      case "lbs":
        return "kg";
      case "mi":
        return "km";
      case "l":
        return "gal";
      case "kg":
        return "lbs";
      default:
        return undefined;
    }
  };

  /**
   * This function takes a unit as an input and returns its full name.
   * If the input is invalid, it returns 'don't know'.
   * @param {string} initUnit
   * @return {string}
   */
  this.spellOutUnit = function (initUnit) {
    let unit = initUnit.toLowerCase();

    switch (unit) {
      case "km":
        return "kilometers";
      case "gal":
        return "gallons";
      case "lbs":
        return "pounds";
      case "mi":
        return "miles";
      case "l":
        return "liters";
      case "kg":
        return "kilograms";
      default:
        return "don't know";
    }
  };

  /**
   * This function takes a number and a unit as an input and returns the converted number.
   * If the input is invalid, it returns undefined.
   * @param {number} initNum
   * @param {string} initUnit
   * @return {number|undefined}
   */
  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase();
    let result;

    switch (unit) {
      case "km":
        result = initNum / miToKm;
        break;
      case "gal":
        result = initNum * galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "l":
        result = initNum / galToL;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      default:
        result = undefined;
    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(
      initUnit
    )} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };

}

module.exports = ConvertHandler;
