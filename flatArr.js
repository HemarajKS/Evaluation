
function flat() {
    var arr = [1, 5, [2,3], 4];
    var flatArr = [];

    for (var i = 0; i < arr.length; i++) {
        var current = arr[i];

        if (!Array.isArray(current)) {
            flatArr.push(current)
        }
        console.log(current);

        for (var j = 0; j < current.length; j++) {
            flatArr.push(current[j])

        }
    }
    return(flatArr)
}

console.log(flat());