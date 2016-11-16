var WangYuLong = {
    chunk: function(array, size) {
        var newArr = new Array(Math.ceil(array.length / size))
        for (var i = 0; i < newArr.length; i++) {
            newArr[i] = []
        }
        for (var j = 0; j < array.length; j++) {
            newArr[parseInt(j / size)][j % size] = array[j]
        }
        return newArr
    },
    compact: function(array) {
        var newArr = []
        for (var i = 0; i < array.length; i++) {
            if (!!array[i] == false) {
                continue
            } else {
                newArr.push(array[i])
            }
        }
        return newArr
    },
    concat: function() {
        var newArr = []
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i][0] == undefined) {
                newArr.push(arguments[i])
            } else {
                for (var j = 0; j < arguments[i].length; j++) {
                    newArr.push(arguments[i][j])
                }
            }
        }
        return newArr
    },
}
