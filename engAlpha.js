const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var n = 6;
var alphaLen = n * n;
var matrixElements = [];
var matrix = [];
let matRows = [];
let arr1=["x"];

for(var p=0;p<n;p++){var newAlpha= alphabet.concat(alphabet)}



console.log(newAlpha)

function arrayMatrix() {

    for (var i = 0; i < alphaLen; i++) {
        matrixElements.push(newAlpha[i]);
    }

    for (var j = 0; j < n; j++) {
        matRows.push(matrixElements.splice(0, n));
    }

    output = matRows[0].map((_, colIndex) => matRows.map(row => row[colIndex]));
    return (output.reverse())
}

console.log(arrayMatrix())


