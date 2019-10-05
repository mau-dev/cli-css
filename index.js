// console.log('test');
console.log(process.argv);

let arg1 = process.argv[2];
let arg2 = process.argv[3];
let arg3 = process.argv[4];
let arg4 = process.argv[5];


const convertRGB = require('./convertFromRgb');
const convertHEX = require('./convertFromHex');

if (arg1 === "rgb") {

    console.log ( convertRGB.rgbToHex( parseInt(process.argv[3]), parseInt(process.argv[4]), parseInt(process.argv[5]) ) );

} else if (arg1 === "hex") {

     console.log ( "rgb \( " + convertHEX.hexToRgb(process.argv[3]).r + ", " + convertHEX.hexToRgb(process.argv[3]).g + ", "  + convertHEX.hexToRgb(process.argv[3]).b + " \)");

};