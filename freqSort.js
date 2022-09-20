var array = [3, 3, 1, 1, 1, 8, 3, 6, 8, 7, 8];


const occurrences = array.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
}, {});

myArray = [];

sortedArray = Object.entries(occurrences).sort((a, b) => b[1] - a[1]);
console.log(sortedArray);

var output = [];

for (k in sortedArray) {
    console.log(sortedArray[k][1])
    for (var a = 0; a < sortedArray[k][1]; a++) {
        output.push(sortedArray[k][0])
    }

}
console.log(output)







