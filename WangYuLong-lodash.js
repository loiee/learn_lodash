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
    difference: function() {
        var newArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            newArr.push(arguments[0][i])
        }
        for (var j = 0; j < newArr.length; j++) {
            for (var k = 1; k < arguments.length; k++) {
                for (var m = 0; m < arguments[k].length; m++) {
                    if (newArr[j] == arguments[k][m]) {
                        newArr.splice(j, 1)
                    }
                }
            }
        }
        return newArr
    },
    drop: function() {
        var newArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            newArr.push(arguments[0][i])
        }
        if (arguments[1] == undefined) {
            arguments[1] = 1
        }
        newArr.splice(0, arguments[1])
        return newArr
    },
    dropRight: function() {
        var newArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            newArr.push(arguments[0][i])
        }
        if (arguments[1] == undefined) {
            arguments[1] = 1
        } else if (arguments[1] > newArr.length) {
            arguments[1] = newArr.length
        }
        newArr.splice(newArr.length - arguments[1], arguments[1])
        return newArr
    },

}
