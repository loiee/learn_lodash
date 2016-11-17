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
    fill: function() {
        var newArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            newArr.push(arguments[0][i])
        }
        if (arguments[2] == undefined) {
            arguments[2] = 0
        }
        if (arguments[3] == undefined) {
            arguments[3] = arguments[0].length
        }
        for (var i = arguments[2]; i < arguments[3]; i++) {
            newArr[i] = arguments[1]
        }
        return newArr
    },
    flatten: function(array) {
        var newArr = []
        for (var i = 0; i < array.length; i++) {
            if (array[i][0] == undefined) {
                newArr.push(array[i])
            } else {
                for (var j = 0; j < array[i].length; j++) {
                    newArr.push(array[i][j])
                }
            }
        }
        return newArr
    },
    flattenDeep: function(array) {
        for (var i = 1;; i++) {
            var tOrF = true
            array = WangYuLong.flatten(array)
            for (var j = 0; j < array.length; j++) {
                if (array[j][0] != undefined) {
                    tOrF = false
                }
            }
            if (tOrF) {
                return array
            }
        }
    },
    fromPairs: function(pairs) {
        var newObj = {}
        for (var i = 0; i < pairs.length; i++) {
            newObj[pairs[i][0]] = pairs[i][1]
        }
        return newObj
    },
    initial: function(array) {
        array.splice((array.length - 1), 1)
        return array
    },
    intersection: function(argument) {
        var newArr = []
        var sameArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            newArr.push(arguments[0][i])
        }
        for (var j = 0; j < newArr.length; j++) {
            for (var k = 1; k < arguments.length; k++) {
                for (var m = 0; m < arguments[k].length; m++) {
                    if (newArr[j] == arguments[k][m]) {
                        sameArr.push(newArr[j])
                    }
                }
            }
        }
        return sameArr
    },
    pull: function() {
        var newArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            var tOrF = true
            for (var j = 1; j < arguments.length; j++) {
                if (arguments[0][i] == arguments[j]) {
                    tOrF = false
                }
            }
            if (tOrF) {
                newArr.push(arguments[0][i])
            }
        }
        return newArr
    },
    pullAll: function() {
        var newArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            var tOrF = true
            for (var j = 1; j < arguments.length; j++) {
                if (arguments[0][i] == arguments[j]) {
                    tOrF = false
                }
                if (arguments[j][0] != undefined) {
                    for (var k = 0; k < arguments[j].length; k++) {
                        if (arguments[0][i] == arguments[j][k]) {
                            tOrF = false
                        }
                    }
                }
            }
            if (tOrF) {
                newArr.push(arguments[0][i])
            }
        }
        return newArr
    },
    pullAt: function(array, indexes) {
        var newArr = []
        var fixdArr = []
        for (var i = 0; i < array.length; i++) {
            fixdArr.push(array[i])
        }
        var counter = 0
        for (var i = 0; i < indexes.length; i++) {
            newArr.push(fixdArr[indexes[i]])
            array.splice(indexes[i] - counter, 1)
            counter++
        }
        return newArr
    },
    reverse: function(array) {
        var newArr = []
        for (var i = 0; i < array.length; i++) {
            newArr.unshift(array[i])
        }
        return newArr
    },
    tail: function(array) {
        array.splice(0, 1)
        return array
    },
    take: function(array, n) {
        if (n == undefined) {
            n = 1
        }
        if (n > array.length) {
            n = array.length
        }
        var takeArr = []
        for (var i = 0; i < n; i++) {
            takeArr.push(array[i])
        }
        return takeArr
    },
    takeRight: function(array, n) {
        if (n == undefined) {
            n = 1
        }
        if (n > array.length) {
            n = array.length
        }
        var takeArr = []
        for (var i = 0; i < n; i++) {
            takeArr.unshift(array[array.length - i - 1])
        }
        return takeArr
    },
    union: function() {
        var newArr = []
        var joinArr = WangYuLong.flatten(arguments)
        for (var i = 0; i < joinArr.length; i++) {
            for (j = i + 1; j < joinArr.length; j++) {
                if (joinArr[i] == joinArr[j]) {
                    joinArr[j] = null
                }
            }
        }
        for (var i = 0; i < joinArr.length; i++) {
            if (joinArr[i] != undefined) {
                newArr.push(joinArr[i])
            }
        }
        return newArr
    },
    uniq: function(array) {
        var newArr = []
        for (var i = 0; i < array.length; i++) {
            for (j = i + 1; j < array.length; j++) {
                if (array[i] == array[j]) {
                    array[j] = null
                }
            }
        }
        for (var i = 0; i < array.length; i++) {
            if (array[i] != undefined) {
                newArr.push(array[i])
            }
        }
        return newArr
    },
    unzip: function() {
        var len = arguments[0][0].length
        var unZipArr = new Array(len)
        for (var i = 0; i < unZipArr.length; i++) {
            unZipArr[i] = []
        }
        for (var j = 0; j < len; j++) {
            unZipArr[j][0] = arguments[0][0][j]
            unZipArr[j][1] = arguments[0][1][j]
        }
        return unZipArr
    },
    without: function() {
        var newArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            var tOrF = true
            for (var j = 1; j < arguments.length; j++) {
                if (arguments[0][i] == arguments[j]) {
                    tOrF = false
                }
            }
            if (tOrF) {
                newArr.push(arguments[0][i])
            }
        }
        return newArr
    },
    xor: function() {
        var newArr = []
        var sameArr = []
        var lastArr = []
        for (var i = 0; i < arguments.length; i++) {
            newArr.push(arguments[i])
        }
        newArr = WangYuLong.flatten(newArr)
        for (var i = 0; i < newArr.length; i++) {
            for (var j = i + 1; j < newArr.length; j++) {
                if (newArr[i] == newArr[j]) {
                    sameArr.push(newArr[i])
                }
            }
        }
        for (var i = 0; i < newArr.length; i++) {
            var tOrF = true
            for (var j = 0; j < sameArr.length; j++) {
                if (newArr[i] == sameArr[j]) {
                    tOrF = false
                }
            }
            if (tOrF) {
                lastArr.push(newArr[i])
            }
        }
        return lastArr
    },
    zip: function() {
        var zipArr = [
            [],
            []
        ]
        for (var i = 0; i < arguments.length; i++) {
            zipArr[0][i] = arguments[i][0]
            zipArr[1][i] = arguments[i][1]
        }
        return zipArr
    },
    head: function(array) {
        return array[0]
    },
    indexOf: function(array, value, from) {
        if (from == undefined) {
            from = 0
        }
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value && i >= from) {
                return i
            }
        }
    },
    join: function(array, string) {
        if (string == undefined) {
            string = ','
        }
        array = array.join(string)
        return array
    },
    last: function(array) {
        return array[array.length - 1]
    },
    split: function(string, separator, limit) {
        var array = string.split(separator)
        array.splice(limit, array.length - limit)
        return array
    },
    lastIndexOf: function(array, value, from) {
        array = WangYuLong.reverse(array)
        var index = WangYuLong.indexOf(array, value, from)
        return array.length - index - 1
    },
    nth: function(array, n) {
        if (n == undefined) {
            n = 0
        }
        if (n < 0) {
            n = array.length + n
        }
        return array[n]
    },
    camelCase: function(string) {
        var array = string.split('-')
        array = WangYuLong.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = WangYuLong.compact(array)
        var remove2 = array.join(' ')
        remove2 = remove2.toLowerCase()
        var lastArr = remove2.split(' ') //['foo','bar']
        for (i = 1; i < lastArr.length; i++) {
            var singleWordArr = lastArr[i].split('') //['b','a','r']
            singleWordArr[0] = singleWordArr[0].toUpperCase() //['B','a','r']
            lastArr[i] = singleWordArr.join('') //'Bar'
        }
        var camel = lastArr.join('')
        return camel
    },
    repeat: function(string, n) {
        if (n == undefined) {
            n = 1
        }
        var newStr = ''
        for (var i = 0; i < n; i++) {
            newStr = newStr + string
        }
        return newStr
    },
    capitalize: function(string) {
        string = string.toLowerCase()
        var wordArr = string.split('')
        wordArr[0] = wordArr[0].toUpperCase() //['B','a','r']
        var cap = wordArr.join('') //'Bar'
        return cap
    },
}
