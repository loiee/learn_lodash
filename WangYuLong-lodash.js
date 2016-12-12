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
            if (!Array.isArray(array[i])) {
                newArr.push(array[i])
            } else {
                for (var j = 0; j < array[i].length; j++) {
                    newArr.push(array[i][j])
                }
            }
        }
        return newArr
    },
    flattenDeep: function(coll, func) {
        var result = []
        flatten(coll)

        function flatten(arr, depth) {
            for (var i = 0; i < arr.length; i++) {
                if (!Array.isArray(arr[i])) {
                    result.push(arr[i])
                } else {
                    flatten(arr[i])
                }
            }
        }
        return result
    },
    flattenDepth: function(array, depth) {
        if (depth == undefined) {
            depth = 1
        }
        for (var i = 1; i <= depth; i++) {
            array = WangYuLong.flatten(array)
        }
        return array
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
        for (var i = 0; i < arguments.length; i++) {
            newArr = newArr.concat(arguments[i])
        }
        for (var i = 0; i < newArr.length; i++) {
            if (newArr.indexOf(newArr[i]) < i) {
                newArr.splice(i, 1)
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
            newArr = newArr.concat(arguments[i])
        }
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
    deburr: function(string) {
        var strArr = string.split('')
        for (var i = 0; i < strArr.length; i++) {
            if (strArr[i].charCodeAt() >= 232 && strArr[i].charCodeAt() <= 235) {
                strArr[i] = String.fromCharCode(101)
            }
            if (strArr[i].charCodeAt() >= 224 && strArr[i].charCodeAt() <= 229) {
                strArr[i] = String.fromCharCode(97)
            } //未完全实现...

        }
        var deb = strArr.join('')
        return deb
    },
    endsWith: function(string, target, position) {
        if (position == undefined) {
            position = string.length - 1
            if (string.charAt(position) == target) {
                return true
            } else {
                return false
            }
        } else
        if (string.charAt(position - 1) == target) {
            return true
        } else {
            return false
        }
    },
    escape: function(string) {
        var strArr = string.split('')
        for (var i = 0; i < strArr.length; i++) {
            if (strArr[i] == '&') {
                strArr[i] = '&amp;'
            }
            if (strArr[i] == '<') {
                strArr[i] = '&lt;'
            }
            if (strArr[i] == '>') {
                strArr[i] = '&gt;'
            }
            if (strArr[i] == '"') {
                strArr[i] = '&quot;'
            }
            if (strArr[i] == '\'') {
                strArr[i] = '&apos;'
            }
        }
        var esc = strArr.join('')
        return esc
    },
    escapeRegExp: function(string) {
        var strArr = string.split('')
        for (var i = 0; i < strArr.length; i++) {
            if (strArr[i] == "^" || strArr[i] == "$" || strArr[i] == "" || strArr[i] == "." || strArr[i] == "*" || strArr[i] == "+" || strArr[i] == "?" || strArr[i] == "(" || strArr[i] == ")" || strArr[i] == "[" || strArr[i] == "]" || strArr[i] == "{" || strArr[i] == "}" || strArr[i] == "|") {
                strArr[i] = '\\' + strArr[i]
            }
        }
        var escR = strArr.join('')
        return escR
    },
    kebabCase: function(string) {
        var array = string.split('-')
        array = WangYuLong.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = WangYuLong.compact(array)
        var remove2 = array.join('-')
            //remove2 = remove2.toLowerCase()
        var lastArr = remove2.split(' ') //['foo','Bar']
        var kebab = lastArr.join('-')
        var testArr = kebab.split('')
        for (var i = 0; i < testArr.length; i++) {
            if (testArr[i] == '-') {
                kebab = kebab.toLowerCase()
                return kebab
            }
        }
        for (var j = 1; j < testArr.length; j++) {
            if (testArr[j].charCodeAt() >= 65 && testArr[j].charCodeAt() <= 90) {
                testArr[j] = ['-' + testArr[j]]
            }
        }
        kebab = testArr.join('').toLowerCase()
        return kebab
    },
    map: function(collection, iteratee) {
        var newArr = []
        if (typeof iteratee == 'string') {
            iteratee = iteratee.split('.')
            var f = function(x) {
                for (var i = 0; i < iteratee.length; i++) {
                    x = x[iteratee[i]]
                }
                return x
            }
        } else {
            var f = iteratee
        }
        for (var key in collection) {
            newArr.push(f(collection[key], key, collection))
        }
        return newArr
    },
    sortedIndex: function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] >= value) {
                return i
            }
        }
    },
    filter: function(collection, func) {
        var newArr = []
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = 0; i < collection.length; i++) {
            if (functer(collection[i], i, collection) == true) {
                newArr.push(collection[i])
            }
        }
        return newArr
    },
    partition: function(collection, func) {
        var newArr = [
            [],
            []
        ]
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = 0; i < collection.length; i++) {
            if (functer(collection[i], i, collection)) {
                newArr[0].push(collection[i])
            } else {
                newArr[1].push(collection[i])
            }
        }
        return newArr
    },
    /**
     *检查给定参数的所有元素是否满足断定条件，若都满足，返回true，否则返回false
     *参数 collection，参与迭代的数组/对象
     *返回值 true/false
     *例：_.every([true, 1, null, 'yes'], Boolean); 返回=> false
     */
    every: function(collection, predicate) {
        if (typeof(predicate) == 'function') {
            for (var key in collection) {
                if (!predicate(collection[key], key, collection)) {
                    return false
                }
            }
            return true
        } else {
            if (Array.isArray(predicate)) { //如果是数组，转化为对象
                var predicateToObj = {}
                for (var i = 0; i < predicate.length; i = i + 2) {
                    predicateToObj[predicate[i]] = predicate[i + 1]
                }
                predicate = predicateToObj
            }
            if (typeof(predicate) == 'string') {
                for (var j = 0; j < collection.length; j++) {
                    if (collection[j][predicate] == false) {
                        return false
                    }
                }
                return true
            }
            for (var key in predicate) {
                for (var j = 0; j < collection.length; j++) {
                    if (predicate[key] != collection[j][key]) {
                        return false
                    }
                }
            }
            return true
        }
    },
    reduce: function(collection, func, initial) {
        if (Array.isArray(collection)) {
            if (initial == undefined) {
                var result = collection[0]
            } else {
                result = func(initial, collection[0], 0, collection)
            }
            for (var i = 1; i < collection.length; i++) {
                result = func(result, collection[i], i, collection)
            }
        } else if (typeof collection == 'object') {
            var flag = true
            for (var key in collection) {
                if (initial == undefined) {
                    initial = {}
                }
                if (flag) {
                    var result = func(initial, collection[key], key, collection)
                } else {
                    var result = func(result, collection[key], key, collection)
                }
                flag = false
            }
        }
        return result
    },
    reduceRight: function(collection, func, initial) {
        if (Array.isArray(collection)) {
            if (initial == undefined) {
                var result = collection[collection.length - 1]
            } else {
                result = func(initial, collection[collection.length - 1], collection.length - 1, collection)
            }
            for (var i = collection.length - 2; i >= 0; i--) {
                result = func(result, collection[i], i, collection)
            }
        } //colletion为对象没考虑
        return result
    },
    some: function(collection, func) {
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = 0; i < collection.length; i++) {
            if (functer(collection[i], i, collection)) {
                return true
            }
        }
        return false
    },
    reject: function(collection, func) {
        var newArr = []
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = 0; i < collection.length; i++) {
            if (functer(collection[i], i, collection) == false) {
                newArr.push(collection[i])
            }
        }
        return newArr
    },
    at: function(object, paths) {
        var result = []
        var lastResult = []
        for (var i = 0; i < paths.length; i++) {
            var point = paths[i].split('')
            var pure = []
            for (var j = 0; j < point.length; j++) { //去[]和.
                if (point[j] != '[' && point[j] != ']' && point[j] != '.') {
                    pure.push([point[j]]) //[[a],[0],[b],[c]]
                }
            }
            var result = object
            for (var k = 0; k < pure.length; k++) {
                result = result[pure[k]]
            }
            lastResult.push(result)
        }
        return lastResult
    },
    lowerCase: function(string) {
        var array = string.split('-')
        array = WangYuLong.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = WangYuLong.compact(array)
        var remove2 = array.join('-')
        var lastArr = remove2.split(' ') //['foo','Bar']
        var lower = lastArr.join('-')
        var testArr = lower.split('')
        for (var i = 0; i < testArr.length; i++) {
            if (testArr[i] == '-') {
                lower = lower.split('-').join(' ').toLowerCase()
                return lower
            }
        }
        for (var j = 1; j < testArr.length; j++) {
            if (testArr[j].charCodeAt() >= 65 && testArr[j].charCodeAt() <= 90) {
                testArr[j] = [' ' + testArr[j]]
            }
        }
        lower = testArr.join('').toLowerCase()
        return lower
    },
    lowerFirst: function(string) {
        var strArr = string.split('')
        strArr[0] = strArr[0].toLowerCase()
        var result = strArr.join('')
        return result
    },
    /*
     *用指定字符串拼接达到指定长度
     *_.pad('abc', 8);
     * => '  abc   '
     *_.pad('abc', 8, '_-');
     * => '_-abc_-_'
     *_.pad('abc', 3);
     * => 'abc'
     */
    pad: function(string, length, chars) {
        if (chars == undefined) {
            chars = ' '
        }
        var before = parseInt((length - string.length) / 2)
        var after = length - string.length - before
        var stringBefore = ''
        var stringAfter = ''
        for (var i = 0; i < before; i++) {
            stringBefore = stringBefore + chars.charAt(i % chars.length)
        }
        for (var i = 0; i < after; i++) {
            stringAfter = stringAfter + chars.charAt(i % chars.length)
        }
        return stringBefore + string + stringAfter
    },
    padEnd: function(string, length, chars) {
        if (chars == undefined) {
            chars = ' '
        }
        var after = length - string.length
        var stringAfter = ''
        for (var i = 0; i < after; i++) {
            stringAfter = stringAfter + chars.charAt(i % chars.length)
        }
        return string + stringAfter
    },
    padStart: function(string, length, chars) {
        if (chars == undefined) {
            chars = ' '
        }
        var before = length - string.length
        var stringBefore = ''
        for (var i = 0; i < before; i++) {
            stringBefore = stringBefore + chars.charAt(i % chars.length)
        }
        return stringBefore + string
    },
    /**
     *字符串取整数部分
     *以radix参数为基数，若为0或undefined，默认为10进制
     */
    parseInt: function(string, radix) { //radix为进制，默认10进制
        string = String(string)
        if (radix == 0 || radix == undefined) {
            radix = 10 //若未输入进制或输入0，默认10进制
        }
        var result = 0
        for (var i = string.length - 1; i >= 0; i--) {
            result = result + Number(string.charAt(i)) * Math.pow(radix, string.length - i - 1)
        }
        return result
    },
    replace: function(string, pattern, replacement) {
        var len = pattern.length
        var counter = 0
        for (var i = 0; i < string.length; i++) {
            var counterPattern = 0
            var match = true //匹配对应的字符
            for (var j = counter; len--; j++) {
                if (string.charAt(j) != pattern.charAt(counterPattern)) {
                    match = false
                    break
                }
                counterPattern++
            }
            if (match) {
                break
            }
            counter++
        }
        var stringBefore = ''
        var stringAfter = ''
        for (var k = 0; k < i; k++) {
            stringBefore += string.charAt(k) //pattern前面部分
        }
        for (var m = i + pattern.length; m < string.length; m++) {
            stringAfter += string.charAt(m) //pattern后面部分
        }
        return stringBefore + replacement + stringAfter
    },
    normalCase: function(string) {
        var array = string.split('-')
        array = WangYuLong.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = WangYuLong.compact(array)
        var remove2 = array.join('-')
        var lastArr = remove2.split(' ') //['foo','Bar']
        var normal = lastArr.join('-')
        var testArr = normal.split('')
        for (var i = 0; i < testArr.length; i++) {
            if (testArr[i] == '-') {
                normal = normal.split('-').join(' ')
                return normal
            }
        }
        for (var j = 1; j < testArr.length; j++) {
            if (testArr[j].charCodeAt() >= 65 && testArr[j].charCodeAt() <= 90) {
                testArr[j] = [' ' + testArr[j]]
            }
        }
        normal = testArr.join('')
        return normal
    },
    startCase: function(string) {
        string = WangYuLong.normalCase(string) //foo Bar
        var strArr = string.split(' ') //[foo,Bar]
        for (var i = 0; i < strArr.length; i++) {
            strArr[i] = strArr[i].split('') //[f,o,o]
            strArr[i][0] = strArr[i][0].toUpperCase() //[F,o,o]
            strArr[i] = strArr[i].join('') //[Foo]
        }
        string = strArr.join(' ')
        return string
    },
    snakeCase: function(string) {
        var array = string.split('-')
        array = WangYuLong.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = WangYuLong.compact(array)
        var remove2 = array.join('-')
        var lastArr = remove2.split(' ') //['foo','Bar']
        var kebab = lastArr.join('_')
        var testArr = kebab.split('')
        for (var i = 0; i < testArr.length; i++) {
            if (testArr[i] == '_') {
                kebab = kebab.toLowerCase()
                return kebab
            }
        }
        for (var j = 1; j < testArr.length; j++) {
            if (testArr[j].charCodeAt() >= 65 && testArr[j].charCodeAt() <= 90) {
                testArr[j] = ['_' + testArr[j]]
            }
        }
        kebab = testArr.join('').toLowerCase()
        return kebab
    },
    includes: function(collection, value, fromIndex) {
        if (fromIndex == undefined) {
            fromIndex = 0
        }
        var string = ''
        value = String(value)
        for (var key in collection) {
            string += collection[key]
        }
        for (var i = fromIndex; i < string.length; i++) {
            var reset = 0
            var match = true
            var k = i
            for (var j = reset; j < value.length; j++) {
                if (string[k] != value[j]) {
                    match = false
                }
                reset++
                k++
            }
            if (match) {
                return true
            }
        }
        return false
    },
    differenceBy: function() {
        var func = arguments[arguments.length - 1]
        var newArr = []
        if (typeof(func) == 'string') { //后面为字符串
            function objFunc(x) {
                return x[func]
            }
            for (var key in arguments[0]) {
                newArr[key] = (arguments[0][key])
            }

            for (var key in arguments[0]) {
                for (var i = 1; i < arguments.length - 1; i++) {
                    for (var j = 0; j < arguments[i].length; j++) {
                        if (objFunc(arguments[0][key]) == objFunc(arguments[i][j])) {
                            newArr.splice(key, 1)
                        }
                    }
                }
            }
            return newArr

        } else { //后面为函数


            for (var i = 0; i < arguments[0].length; i++) {
                newArr.push(arguments[0][i])
            }
            for (var j = 0; j < arguments[0].length; j++) {
                for (var k = 1; k < arguments.length - 1; k++) {
                    for (var m = 0; m < arguments[k].length; m++) {
                        if (func(arguments[0][j]) == func(arguments[k][m])) {
                            newArr.splice(j, 1)
                        }
                    }
                }
            }
            return newArr
        }
    },
    differenceWith: function() {
        var newArr = []
        var func = arguments[arguments.length - 1]
        for (var key in arguments[0]) {
            newArr.push(arguments[0][key])
            for (var i = 1; i < arguments.length - 1; i++) {
                for (var j = 0; j < arguments[i].length; j++) {
                    if (func(arguments[0][key], arguments[i][j])) {
                        newArr.pop(arguments[0][key])
                    }
                }
            }
        }
        return newArr
    },
    keys: function(object) {
        var newArr = []
        if (typeof(object) == 'string') {
            object = object.split('')
        }

        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                newArr.push(key)
            }
        }
        return newArr
    },
    dropWhile: function(array, func) {
        var newArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            newArr.push(arguments[0][i])
        }
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = 0; i < array.length; i++) {
            if (functer(newArr[0]) == false || functer(newArr[0]) == undefined) {
                return newArr
            } else {
                newArr.splice(0, 1)
            }
        }
        return newArr
    },
    dropRightWhile: function(array, func) {
        var newArr = []
        for (var i = 0; i < arguments[0].length; i++) {
            newArr.push(arguments[0][i])
        }
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = array.length; i >= 0; i--) {
            if (functer(newArr[newArr.length - 1]) == false || functer(newArr[newArr.length - 1]) == undefined) {
                return newArr
            } else {
                newArr.pop()
            }
        }
        return newArr
    },
    findIndex: function(array, func, index) {
        if (index == undefined) {
            index = 0
        }
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = index; i < array.length; i++) {
            if (functer(array[i])) {
                return i
            }
        }
    },
    findLastIndex: function(array, func, index) {
        if (index == undefined) {
            index = array.length - 1
        }
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = index; i >= 0; i--) {
            if (functer(array[i])) {
                return i
            }
        }
    },
    intersectionBy: function() {
        var func = arguments[arguments.length - 1]
        var newArr = []
        if (typeof(func) == 'string') { //后面为字符串
            function functer(x) {
                return x[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }

        for (var key in arguments[0]) {
            for (var key2 in arguments[1]) {
                if (functer(arguments[0][key]) == functer(arguments[1][key2])) {
                    newArr.push(arguments[0][key])
                }
            }
        }
        return newArr
    },
    intersectionWith: function() {
        var func = arguments[arguments.length - 1]
        var newArr = []
        for (var key in arguments[0]) {
            for (var key2 in arguments[1]) {
                if (func(arguments[0][key], arguments[1][key2])) {
                    newArr.push(arguments[0][key])
                }
            }
        }
        return newArr
    },
    pullAllBy: function(array1, array2, iteratee) {
        if (typeof(iteratee) == 'string') {
            var functer = function(o) {
                return o[iteratee]
            }
        }
        var newArr = []
        for (var key in array1) {
            var pull = false
            for (var key2 in array2) {
                if (functer(array1[key]) == functer(array2[key2])) {
                    pull = true
                }
            }
            if (!pull) {
                newArr.push(array1[key])
            }
        }
        return newArr
    },
    pullAllWith: function(array1, array2, functer) {
        var newArr = []
        for (var key in array1) {
            var pull = false
            for (var key2 in array2) {
                if (!functer(array1[key], array2[key2])) {
                    newArr.push(array1[key])
                }
            }
        }
        return newArr
    },
    sortedIndexBy: function(array, value, func) {
        if (typeof(func) == 'string') {
            var functer = function(o) {
                return o[func]
            }
        } else {
            functer = func
        }
        for (var i = 0; i < array.length; i++) {
            if (functer(array[i]) == functer(value)) {
                return i
            }
        }
    },
    sortedIndexOf: function(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) {
                return i
            }
        }
    },
    sortedLastIndex: function(array, value) {
        for (var i = array.length; i >= 0; i--) {
            if (array[i] == value) {
                return i + 1
            }
        }
    },
    sortedLastIndexBy: function(array, value, func) {
        if (typeof(func) == 'string') {
            var functer = function(o) {
                return o[func]
            }
        } else {
            functer = func
        }
        for (var i = array.length - 1; i >= 0; i--) {
            if (functer(array[i]) == functer(value)) {
                return i + 1
            }
        }
    },
    sortedLastIndexOf: function(array, value) {
        for (var i = array.length - 1; i >= 0; i--) {
            if (array[i] == value) {
                return i
            }
        }
    },
    sortedUniq: function(array) {
        var newArr = []
        for (var i = 0; i < array.length; i++) {
            if (array[i] != array[i - 1]) {
                newArr.push(array[i])
            }
        }
        return newArr
    },
    sortedUniqBy: function(array, func) {
        var newArr = []
        for (var i = 0; i < array.length; i++) {
            if (func(array[i]) != func(array[i - 1])) {
                newArr.push(array[i])
            }
        }
        return newArr
    },
    takeRightWhile: function(array, func) {
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        var newArr = []
        for (i = array.length - 1; i >= 0; i--) {
            if (!functer(array[i])) {
                return newArr
            }
            if (functer(array[i])) {
                newArr.unshift(array[i])
            }
        }
        return newArr
    },
    unionBy: function(arr1, arr2, func) {
        if (typeof(func) == 'string') {
            var functer = function(o) {
                return o[func]
            }
        } else {
            functer = func
        }
        var sumArr = WangYuLong.union(arr1, arr2)
        var testArr = sumArr.map(functer)
        for (var i = 0; i < testArr.length; i++) {
            if (testArr.indexOf(testArr[i]) < i) {
                sumArr.splice(i, 1)
            }
        }
        return sumArr
    },
    unionWith: function(arr1, arr2, func) {
        var newArr = [arr1[0]]
        var sumArr = WangYuLong.union(arr1, arr2)
        for (var i = 0; i < sumArr.length; i++) {
            var add = true
            for (var j = 0; j < newArr.length; j++) {
                if (func(sumArr[i], newArr[j])) {
                    add = false
                }
            }
            if (add) {
                newArr.push(sumArr[i])
            }
        }
        return newArr
    },
    unzipWith: function(arr, func) {
        var newArr = []
        for (var i = 0; i < arr[0].length; i++) {
            newArr.push(func(arr[0][i], arr[1][i]))
        }
        return newArr
    },
    takeWhile: function(array, func) {
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        var newArr = []
        for (i = 0; i < array.length; i++) {
            if (!functer(array[i])) {
                return newArr
            }
            if (functer(array[i])) {
                newArr.push(array[i])
            }
        }
        return newArr
    },
    xorBy: function(arr1, arr2, func) {
        if (typeof(func) == 'string') {
            var functer = function(o) {
                return o[func]
            }
        } else {
            functer = func
        }
        var newArr = []
        var sumArr = WangYuLong.union(arr1, arr2)
        for (var i = 0; i < sumArr.length; i++) {
            var add = true
            for (var j = 0; j < sumArr.length; j++) {
                if (i != j && functer(sumArr[i]) == functer(sumArr[j])) {
                    add = false
                }
            }
            if (add) {
                newArr.push(sumArr[i])
            }
        }
        return newArr
    },
    xorWith: function(arr1, arr2, func) {
        var newArr = []
        var sumArr = WangYuLong.union(arr1, arr2)
        for (var i = 0; i < sumArr.length; i++) {
            var add = true
            for (var j = 0; j < sumArr.length; j++) {
                if (i != j && func(sumArr[i], sumArr[j])) {
                    add = false
                }
            }
            if (add) {
                newArr.push(sumArr[i])
            }
        }
        return newArr
    },
    after: function(num, func) {
        var runingTimes = 0
        return function() {
            runingTimes++
            if (runingTimes > num) {
                return func.apply(null, arguments)
            }
        }
    },
    before: function(num, func) {
        var runingTimes = 0
        return function() {
            runingTimes++
            if (runingTimes < num) {
                var lastResult = func(arg)
                return lastResult
            } else {
                return lastResult
            }
        }
    },
    matches: function(source) {
        return function(obj) {
            for (var key in source) {
                if (!WangYuLong.isEqual(source[key], obj[key])) {
                    return false
                }
            }
            return true
        }
    },
    isEqual: function(a, b) {
        if (a != a && b != b) {
            return true
        }
        if (typeof a != typeof b) {
            return false
        }
        if (a !== b && typeof a != 'object') {
            return false
        }
        for (var key in a) {
            if (!WangYuLong.isEqual(a[key], b[key])) {
                return false
            }
        }
        for (var key in b) {
            if (!WangYuLong.isEqual(a[key], b[key])) {
                return false
            }
        }
        return true
    },
    uniqBy: function(arr, func) {
        if (typeof(func) == 'string') {
            var functer = function(o) {
                return o[func]
            }
        } else {
            functer = func
        }
        var obj = {},
            newArr = []
        for (var i = 0; i < arr.length; i++) {
            if (!obj[functer(arr[i])]) {
                newArr.push(arr[i])
                obj[functer(arr[i])] = true
            }
        }
        return newArr
    },
    uniqWith: function(arr, func) {

        var newArr = [arr[0]],
            flag = true
        for (var i = 1; i < arr.length; i++) {
            for (var j = 0; j < newArr.length; j++) {
                if (func(arr[i], newArr[j])) {
                    flag = false
                }
            }
            if (flag) {
                newArr.push(arr[i])
            }
        }
        return newArr
    },
    zipObject: function(arr1, arr2) {
        var obj = {}
        for (var i = 0; i < arr1.length; i++) {
            obj[arr1[i]] = arr2[i]
        }
        return obj
    },
    zipObjectDeep: function(arr1, arr2) {
        var a = []
        for (var i = 0; i < arr1.length; i++) {
            arr1[i] = arr1[i].split('.').reverse().join(' ').split(']').join('').split(' ')
        }
        //得到arr1=[ [c,b[0,a] , [d,b[1,a] ]
        for (var i = 0; i < arr1.length; i++) {
            var o = {}
            o[arr1[i][0]] = arr2[i]
            for (var j = 1; j < arr1[i].length; j++) {
                arr1[i][j] = arr1[i][j].split('[') //得到arr1=[ [c,[b,0],a] , [d,[b,1],a] ]
                if (arr1[i][j].length > 1 && i == 0) {
                    var temp = [o]
                }
                if (arr1[i][j].length > 1 && i > 0) {
                    o = temp.concat(o)
                }
                var temp2 = o
                o = {}
                o[arr1[i][j][0]] = temp2
            }
        }
        return o
    },
    zipWith: function() {
        var resultArr = []
        var result = []
        for (var i = 0; i < arguments[0].length; i++) {
            resultArr[i] = []
        }
        for (var i = 0; i < arguments.length - 1; i++) {
            for (var j = 0; j < arguments[0].length; j++) {
                resultArr[j][i] = arguments[i][j]
            }
        }
        for (var i = 0; i < resultArr.length; i++) {
            result[i] = arguments[arguments.length - 1].apply(null, resultArr[i])
        }
        return result
    },
    countBy: function(arr, func) {
        if (typeof func == 'string') {
            var functer = function(x) {
                return x[func]
            }
        } else {
            var functer = func
        }
        var obj = {}
        for (var i = 0; i < arr.length; i++) {
            arr[i] = functer(arr[i])
        }

        for (var i = 0; i < arr.length; i++) {
            var counter = 1
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[j] == arr[i]) {
                    counter++
                }
            }
            if (arr.indexOf(arr[i]) == i) {
                obj[arr[i]] = counter
            }
        }
        return obj
    },
    find: function(collection, func, index) {
        if (index == undefined) {
            index = 0
        }
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = index; i < collection.length; i++) {
            if (functer(collection[i], i, collection) == true) {
                return collection[i]
            }
        }
    },
    findLast: function(collection, func, index) {
        if (index == undefined) {
            index = collection.length - 1
        }
        if (Array.isArray(func)) {
            functer = function(o) {
                return o[func[0]] == func[1]
            }
        } else if (typeof(func) == 'object') {
            functer = function(o) {
                for (var key in func) {
                    if (func[key] != o[key]) {
                        return false
                    }
                }
                return true
            }
        }
        if (typeof(func) == 'string') {
            functer = function(o) {
                return o[func]
            }
        }
        if (typeof(func) == 'function') {
            functer = func
        }
        for (var i = index; i >= 0; i--) {
            if (functer(collection[i], i, collection) == true) {
                return collection[i]
            }
        }
    },
    flatMap: function(arr, func) {
        var result = func(arr[0])
        for (var i = 1; i < arr.length; i++) {
            result = result.concat(func(arr[i]))
        }
        return result
    },
    flatMapDeep: function(coll, func) {
        var result = []
        var arr = coll.map(func)
        flatten(arr)

        function flatten(arr) {
            for (var i = 0; i < arr.length; i++) {
                if (!Array.isArray(arr[i])) {
                    result.push(arr[i])
                } else {
                    flatten(arr[i])
                }
            }
        }
        return result
    },
    flatMapDepth: function(coll, func, depth) {
        var arr = coll.map(func)

        function flatten(arr) {
            var result = []
            for (var i = 0; i < arr.length; i++) {
                if (!Array.isArray(arr[i])) {
                    result.push(arr[i])
                } else {
                    for (var j = 0; j < arr[i].length; j++) {
                        result.push(arr[i][j])
                    }
                }
            }
            return result
        }
        while (depth--) {
            arr = flatten(arr)
        }
        return arr
    },
    forEach: function(collection, func) {
        var newArr = []
        for (var key in collection) {
            func(collection[key], key, collection)
        }
        return collection
    },
    forEachRight: function(collection, func) {
        var newArr = []
        for (var key in collection) {
            func(collection[collection.length - 1 - key], key, collection)
        }
        return collection
    },
    /*
    _.groupBy([6.1, 4.2, 6.3], Math.floor);
     => { '4': [4.2], '6': [6.1, 6.3] }
     
     The `_.property` iteratee shorthand.
    _.groupBy(['one', 'two', 'three'], 'length');
     => { '3': ['one', 'two'], '5': ['three'] }

    */
    groupBy: function(collection, func) {
        if (typeof func == 'string') {
            functer = function(x) {
                return x[func]
            }
        } else {
            functer = func
        }
        var result = {}
        var testArr = [] //存放func(collection[key]),得到[6,4,6],用来去重
        for (var key in collection) {
            if (testArr.indexOf(functer(collection[key])) < 0) { //如果没有重复
                result[functer(collection[key])] = [collection[key]]
            } else { //如果是重复的就push进数组
                result[functer(collection[key])].push(collection[key])
            }
            testArr.push(functer(collection[key]))
        }
        return result
    },
    arrayToLinkedList: function(a) {
        if (a.length < 1) {
            return {
                next: null
            }
        }
        var result = {
            value: a[a.length - 1],
            next: null
        }
        for (var i = a.length - 2; i >= 0; i--) {
            var temp = result
            result = {}
            result.value = a[i]
            result.next = temp
        }
        return {
            next: result
        }
    },
    keyBy: function(collection, func) {
        if (typeof func == 'string') {
            var f = function(x) {
                return x[func]
            }
        } else {
            var f = func
        }
        var result = {}
        for (var key in collection) {
            result[f(collection[key])] = collection[key]
        }
        return result
    },
    orderBy: function(collection, func, orders) {
        function keySort(collection, key) { //定义按key排序对象
            for (var i = 0; i < collection.length - 1; i++) {
                for (var j = 0; j < collection.length - 1 - i; j++) {
                    if (collection[j][key] > collection[j + 1][key]) {
                        var t = collection[j]
                        collection[j] = collection[j + 1]
                        collection[j + 1] = t
                    }
                }
            }
        }
        for (var i = orders.length - 1; i >= 0; i--) {
            if (orders[i] == 'desc') {
                keySort(collection, func[i])
                collection = collection.reverse()
            } else {
                keySort(collection, func[i])
            }
        }
        return collection
    },
    parseJson: function(str) {
        var json = str
        var i = 0
        return parse()

        function parse() {
            if (!isNaN(json[i])) {
                return parseNumber()
            }
            if (json[i] === '"') {
                return parseString()
            }
            if (json[i] === 't') {
                return parseTrue()
            }
            if (json[i] === 'f') {
                return parseFalse()
            }
            if (json[i] === 'n') {
                return parseNull()
            }
            if (json[i] === '[') {
                return parseArray()
            }
            if (json[i] === '{') {
                return parseObject()
            }
        }

        function parseNumber() {
            var start = i
            while (true) {
                i++
                if (isNaN(json[i])) {
                    return Number(json.slice(start, i))
                }
            }
        }

        function parseString() {
            var start = i + 1
            var index = json.indexOf('"', start)
            var string = json.slice(start, index)
            i = index + 1
            return string
        }

        function parseTrue() {
            i = i + 4
            return true
        }

        function parseFalse() {
            i = i + 5
            return false
        }

        function parseNull() {
            i = i + 4
            return null
        }

        function parseArray() {
            var result = []
            i++
            while (true) {
                if (json[i] === ']') {
                    i++
                    break
                }
                result.push(parse())
                if (json[i] == ',') {
                    i++
                }
            }
            return result
        }

        function parseObject() {
            var result = {}
            i++
            var key
            var value
            while (true) {
                if (json[i] == '}') {
                    break
                }
                key = parseString()
                i++
                value = parse()
                result[key] = value
                if (json[i] == ',') {
                    i++
                    continue
                }
            }
            i++
            return result
        }
    },
    forOwn: function(obj, func) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (func(obj[key], key, obj) === false) {
                    return obj
                }
            }
        }
        return obj
    },
    invokeMap: function(coll, path, ...args) {
        if (typeof path == 'string') {
            if (Array.isArray(coll)) {
                return coll.map(it => Array.prototype['sort'].apply(it, args))
            } else {
                return coll.map(it => Object.prototype['sort'].apply(it, args))
            }
        }
        if (typeof path == 'function') {
            return coll.map(it => path.apply(it, args))
        }
    },
    sample: function(arr) {
        return arr[parseInt(Math.random() * arr.length)]
    },
    sampleSize: function(arr, num) {
        var result = []
        if (num > arr.length) {
            num = arr.length
        }
        for (var i = 0; i < num; i++) {
            var rand = parseInt(Math.random() * arr.length)
            result.push(arr[rand])
            arr.splice(rand, 1)
        }
        return result
    },
    shuffle: function(arr) {
        for (var i = 0; i < arr.length; i++) {
            var rand = parseInt(Math.random() * arr.length)
            var temp = arr[i]
            arr[i] = arr[rand]
            arr[rand] = temp
        }
        return arr
    },
    size: function(a) {
        var count = 0
        if (typeof a == 'string') {
            return a.length
        }
        for (var key in a) {
            if (Object.prototype.hasOwnProperty.call(a, key)) {
                count++
            }
        }
        return count
    },
    sortBy: function(collection, iteratee) {
        function funcSort(collection, f) { //按函数排序对象
            for (var i = 0; i < collection.length - 1; i++) {
                for (var j = 0; j < collection.length - 1 - i; j++) {
                    if (f(collection[j]) > f(collection[j + 1])) {
                        var t = collection[j]
                        collection[j] = collection[j + 1]
                        collection[j + 1] = t
                    }
                }
            }
        }

        for (var i = 0; i < iteratee.length; i++) {
            if (typeof iteratee[i] == 'string') {
                var temp = iteratee[i]
                iteratee[i] = function(o) {
                    return o[temp]
                }
            }
        }

        for (var j = 0; j < iteratee.length; j++) {
            funcSort(collection, iteratee[j])
        }
        return collection
    },
    defer: function(func, ...args) {
        function _func(...args) {
            return function() {
                func(...args)
            }
        }
        return setTimeout(_func(...args), 0)
    },
    delay: function(func, wait, ...args) {
        function _func(...args) {
            return function() {
                func(...args)
            }
        }
        return setTimeout(_func(...args), wait)
    },
    castArray: function(value) {
        return Array.of(value)
    },
    conformsTo: function(object, source) {
        for (var key in source) {
            return source[key](object[key])
        }
    },
    eq: function(value, other) {
        if (value != value && other != other) {
            return true
        }
        return value === other
    },
    gt: function(value, other) {
        return value > other
    },
    gt: function(value, other) {
        return value >= other
    },
    isArguments: function(value) {
        return !Array.isArray(value) &&
            typeof value === 'object' &&
            Array.prototype.length.call(value) != undefined
    },
    isArray: function(value) {
        if (value === undefined || value === null) {
            return false
        }
        return !!Array.prototype.length.call(value)
    },
    isArrayBuffer: function(value) {
        if (value === undefined || value === null) {
            return false
        }
        return !!ArrayBuffer.prototype.byteLength.call(value)
    },
    isArrayLike: function(value) {
        if (value === undefined || value === null) {
            return false
        }
        return !!Array.prototype.length.call(value) && typeof value != 'function'
    },
    isElement: function(value) {
        if (value === undefined || value === null) {
            return false
        }
        return !!Node.prototype.ELEMENT_NODE.call(value)
    },
    isBoolean: function(value) {
        return typeof value === 'boolean'
    },
    isDate: function(value) {
        return value instanceof Date
    },
    isEmpty: function(value) {
        if (typeof value === 'object') {
            for (var key in value) {
                return false
            }
        }
        if (value === undefined || value === null) {
            return true
        }
        if (value.length > 0) {
            return false
        }
        return true
    },
    isError: function(value) {
        return value instanceof Error
    },
    isFinite: function(value) {
        return !value === Infinity || !value === -Infinity
    },
    isFunction: function(value) {
        return value instanceof Function
    },
    isInteger: function(value) {
        return parseInt(value) === value
    },
    isLength: function(value) {
        return Number.isInteger(value) && value >= 0
    },
    isMap: function(value) {
        return value instanceof Map
    },
    isMatch: function(object, source) {
        for (var key in source) {
            if (!this.isEqual(object[key], source[key])) {
                return false
            }
        }
        return true
    },
    isMatchWith: function(object, source, func) {
        for (var key in source) {
            return func(object[key], source[key])
        }
    },
    isNaN: function(value) {
        if (value === undefined) {
            return false
        }
        return isNaN(value)
    },
}