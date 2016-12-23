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
            array = this.flatten(array)
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
        array = this.reverse(array)
        var index = this.indexOf(array, value, from)
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
        var reg = /[a-zA-Z0-9]/
        string = string.toLowerCase()
        var arr = string.split('')
        var result = []
        for (var i = 0; i < arr.length; i++) {
            if (!reg.test(arr[i]) && arr[i + 1] != undefined) {
                arr[i + 1] = arr[i + 1].toUpperCase()
            } else if (reg.test(arr[i])) {
                result.push(arr[i])
            }
        }
        result[0] = result[0].toLowerCase()
        result = result.join('')
        return result
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
        array = this.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = this.compact(array)
        var remove2 = array.join('-')
            //remove2 = remove2.toLowerCase()
        var lastArr = remove2.split(' ') //['foo','Bar']
        var kebab = lastArr.join('-')
        var testArr = kebab.split('')
        for (var i = 0; i < testArr.length; i++) {
            if (testArr[i] == '-') {
                kebab = kebab.toLowerCase()
                kebab.replace(/\s+/g, '')
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
        array = this.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = this.compact(array)
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
        array = this.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = this.compact(array)
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
        string = this.normalCase(string) //foo Bar
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
        array = this.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = this.compact(array)
        var remove2 = array.join('-')
        var lastArr = remove2.split(' ') //['foo','Bar']
        var kebab = lastArr.join('_')
        var testArr = kebab.split('')
        for (var i = 0; i < testArr.length; i++) {
            if (testArr[i] == '_') {
                kebab = kebab.toLowerCase()
                kebab.replace(/\s+/g, '')
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
        var sumArr = this.union(arr1, arr2)
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
        var sumArr = this.union(arr1, arr2)
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
        var sumArr = this.union(arr1, arr2)
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
        var sumArr = this.union(arr1, arr2)
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
                if (!this.isEqual(source[key], obj[key])) {
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
            if (!this.isEqual(a[key], b[key])) {
                return false
            }
        }
        for (var key in b) {
            if (!this.isEqual(a[key], b[key])) {
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
        if (arguments.length == 0) {
            return Array.of()
        }
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
    gte: function(value, other) {
        return value >= other
    },
    isArguments: function(value) {
        return !Array.isArray(value) &&
            typeof value === 'object' &&
            value instanceof Function
    },
    isArray: function(value) {
        return value instanceof Array
    },
    isArrayBuffer: function(value) {
        return value instanceof ArrayBuffer
    },
    isArrayLike: function(value) {
        return value != undefined && value != null && Number.isInteger(value.length) && typeof value != 'function'
    },
    isArrayLikeObject: function(value) {
        return value instanceof Object && value != undefined && value != null && Number.isInteger(value.length) && typeof value != 'function'
    },
    isElement: function(value) {
        return value instanceof HTMLElement

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
        return typeof value === 'number' && value != Infinity && value != -Infinity
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
    invokeMap: function(collection, path, ...args) {
        if (typeof path === 'string') {
            return collection.map(it => it[path](...args))
        }
        return collection.map(it => path.call(it, ...args))
    },
    isEqualWith: function(value, other, func) {
        for (var key in value) {
            return func(value[key], other[key], key, value, other)
        } //stack参数是啥？
    },
    isNative: function(func) {
        var reg = /\(\) \{ \[native code\] \}/
        return reg.test(func.toString())
    },
    isNil: function(value) {
        return value === null || value === undefined
    },
    isNull: function(value) {
        return value === null
    },
    isNumber: function(value) {
        return typeof value === 'number'
    },
    isObject: function(value) {
        if (value === null) {
            return false
        }
        return typeof value === 'object' || typeof value === 'function'
    },
    isObjectLike: function(value) {
        if (value === null) {
            return false
        }
        return typeof value === 'object'
    },
    isPlainObject: function(value) {
        return value.constructor === Object || Object.getPrototypeOf(value) === null
    },
    isRegExp: function(value) {
        return value instanceof RegExp
    },
    isSafeInteger: function(value) {
        return Number.isSafeInteger(value)
    },
    isSet: function(value) {
        return value instanceof Set
    },
    isString: function(value) {
        return value instanceof String || typeof value === 'string'
    },
    isSymbol: function(value) {
        return typeof value === 'symbol'
    },
    isTypedArray: function(value) {
        return value instanceof Int8Array || value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Int16Array || value instanceof Uint16Array || value instanceof Int32Array || value instanceof Uint32Array || value instanceof Float32Array
    },
    isUndefined: function(value) {
        return value === undefined
    },
    isWeakMap: function(value) {
        return value instanceof WeakMap
    },
    isWeakSet: function(value) {
        return value instanceof WeakSet
    },
    lt: function(value, other) {
        return value < other
    },
    lte: function(value, other) {
        return value <= other
    },
    toArray: function(value) {
        var arr = []
        for (var key in value) {
            arr.push(value[key])
        }
        return arr
    },
    toFinite: function(value) {
        if (value === Infinity) {
            return Number.MAX_VALUE
        }
        if (value === -Infinity) {
            return -Number.MAX_VALUE
        }
        if (Number(value) != Number(value)) {
            return 0
        }
        return Number(value)
    },
    toInteger: function(value) {
        if (value === Infinity) {
            return Number.MAX_VALUE
        }
        if (value === -Infinity) {
            return -Number.MAX_VALUE
        }
        if (Number(value) != Number(value)) {
            return 0
        }
        return Math.floor(value)
    },
    toLength: function(value) {
        if (value === Infinity) {
            return 4294967295
        }
        if (value === -Infinity) {
            return 0
        }
        if (Number(value) != Number(value)) {
            return 0
        }
        return Math.floor(value)
    },
    toNumber: function(value) {
        return Number(value)
    },
    toPlainObject: function(value) {
        var o = {}
        for (var key in value) {
            o[key] = value[key]
        }
    },
    toSafeInteger: function(value) {
        if (value === Infinity) {
            return 9007199254740991
        }
        if (value === -Infinity) {
            return -9007199254740991
        }
        if (Number(value) != Number(value)) {
            return 0
        }
        return Math.floor(value)
    },
    toString: function(value) {
        if (value === null || value === undefined) {
            return ''
        }
        if (value == 0 && 1 / value < 0) {
            return '-0'
        }
        return value.toString()
    },
    assign: function(obj, ...args) {
        for (var i = 0; i < args.length; i++) {
            for (var key in args[i]) {
                if (Object.prototype.hasOwnProperty.call(args[i], key)) {
                    obj[key] = args[i][key]
                }
            }
        }
        return obj
    },
    assignIn: function(obj, ...args) {
        for (var i = 0; i < args.length; i++) {
            for (var key in args[i]) {
                obj[key] = args[i][key]
            }
        }
        return obj
    },
    add: function(a, b) {
        return a + b
    },
    ceil: function(num, precision) {
        if (precision == undefined) {
            precision = 0
        }
        return Math.ceil(num * Math.pow(10, precision)) / Math.pow(10, precision)
    },
    divide: function(a, b) {
        return a / b
    },
    floor: function(num, precision) {
        if (precision == undefined) {
            precision = 0
        }
        return Math.floor(num * Math.pow(10, precision)) / Math.pow(10, precision)
    },
    max: function(arr) {
        if (arr.length == 0) {
            return undefined
        }
        return Math.max.apply(null, arr)
    },
    maxBy: function(arr, f) {
        if (typeof f === 'string') {
            func = function(o) {
                return o[f]
            }
        } else {
            func = f
        }
        var max = arr[0]
        for (var i = 1; i < arr.length; i++) {
            if (func(max) < func(arr[i])) {
                max = arr[i]
            }
        }
        return max
    },
    min: function(arr) {
        if (arr.length == 0) {
            return undefined
        }
        return Math.min.apply(null, arr)
    },
    minBy: function(arr, f) {
        if (typeof f === 'string') {
            func = function(o) {
                return o[f]
            }
        } else {
            func = f
        }
        var min = arr[0]
        for (var i = 1; i < arr.length; i++) {
            if (func(min) > func(arr[i])) {
                min = arr[i]
            }
        }
        return min
    },
    mean: function(arr) {
        return arr.reduce((a, b) => a + b) / arr.length
    },
    meanBy: function(arr, f) {
        if (typeof f === 'string') {
            func = function(o) {
                return o[f]
            }
        } else {
            func = f
        }
        return arr.reduce((a, b) => (a + func(b)), 0) / arr.length
    },
    multiply: function(a, b) {
        return a * b
    },
    round: function(num, precision) {
        if (precision == undefined) {
            precision = 0
        }
        return Math.round(num * Math.pow(10, precision)) / Math.pow(10, precision)
    },
    subtract: function(a, b) {
        return a - b
    },
    sum: function(arr) {
        return arr.reduce((a, b) => a + b)
    },
    sumBy: function(arr, f) {
        if (typeof f === 'string') {
            func = function(o) {
                return o[f]
            }
        } else {
            func = f
        }
        return arr.reduce((a, b) => (a + func(b)), 0)
    },
    clamp: function(a, b, c) {
        if (a <= b) {
            return b
        } else if (a >= c) {
            return c
        }
        return a
    },
    inRange: function(a, b, c) {
        if (c == undefined) {
            c = b
            b = 0
        }
        if (a >= b && a < c) {
            return true
        }
        if (a >= c && a < b) {
            return true
        }
        return false
    },
    random: function(lower, upper, floating) {
        if (typeof upper != 'number' && upper != true) {
            if (Number.isInteger(lower)) {
                return Math.floor(Math.random() * (lower + 1))
            }
            return Math.random() * lower
        }
        if (upper === true) {
            return Math.random() * lower
        }
        if (Number.isInteger(lower) && Number.isInteger(upper) && floating != true) {
            return Math.floor(Math.random() * (upper - lower + 1) + lower)
        }
        return Math.random() * (upper - lower) + lower
    },
    defaults: function(obj, ...args) {
        for (var i = 0; i < args.length; i++) {
            for (var key in args[i]) {
                if (obj[key] == undefined) {
                    obj[key] = args[i][key]
                }
            }
        }
        return obj
    },
    defaultsDeep: function(obj, ...args) {
        for (var i = 0; i < args.length; i++) {
            for (var key in args[i]) {
                if (obj[key] instanceof Object) {
                    this.defaultsDeep(obj[key], args[i][key])
                } else {
                    if (obj[key] == undefined) {
                        obj[key] = args[i][key]
                    }
                }
            }
        }
        return obj
    },
    findKey: function(obj, f) {
        if (Array.isArray(f)) {
            var func = function(o) {
                return o[f[0]] == f[1]
            }
        } else if (typeof f === 'object') {
            var func = function(o) {
                for (var key in f) {
                    if (o[key] != f[key]) {
                        return false
                    }
                }
                return true
            }
        } else if (typeof f === 'string') {
            var func = function(o) {
                return o[f]
            }
        } else {
            var func = f
        }

        for (var key in obj) {
            if (func(obj[key])) {
                return key
            }
        }

    },
    findLastKey: function(obj, f) {
        if (Array.isArray(f)) {
            var func = function(o) {
                return o[f[0]] == f[1]
            }
        } else if (typeof f === 'object') {
            var func = function(o) {
                for (var key in f) {
                    if (o[key] != f[key]) {
                        return false
                    }
                }
                return true
            }
        } else if (typeof f === 'string') {
            var func = function(o) {
                return o[f]
            }
        } else {
            var func = f
        }
        var result
        for (var key in obj) {
            if (func(obj[key])) {
                result = key
            }
        }
        return result
    },
    forIn: function(obj, func) {
        for (var key in obj) {
            if (func(obj[key], key, obj) === false) {
                return obj
            }
        }
        return obj
    },
    forInRight: function(obj, func) {
        var keys = []
        for (var key in obj) {
            keys.unshift(key)
        }
        for (var index in keys) {
            if (func(obj[keys[index]], keys[index], obj) === false) {
                return obj
            }
        }
        return obj
    },
    forOwn: function(obj, func) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && func(obj[key], key, obj) === false) {
                return obj
            }
        }
        return obj
    },
    forOwnRight: function(obj, func) {
        var keys = []
        for (var key in obj && Object.prototype.hasOwnProperty.call(obj, key)) {
            keys.unshift(key)
        }
        for (var index in keys) {
            if (func(obj[keys[index]], keys[index], obj) === false) {
                return obj
            }
        }
        return obj
    },
    functions: function(obj) {
        var result = []
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key) && obj[key] instanceof Function) {
                result.push(key)
            }
        }
        return result
    },
    functionsIn: function(obj) {
        var result = []
        for (var key in obj) {
            if (obj[key] instanceof Function) {
                result.push(key)
            }
        }
        return result
    },
    get: function(obj, path, defaultValue) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        var result = obj
        for (var key in path) {
            if (result[path[key]] === undefined) {
                return defaultValue
            }
            result = result[path[key]]
        }
        return result
    },
    has: function(obj, path) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        if (!Object.prototype.hasOwnProperty.call(obj, path[0])) {
            return false
        }
        var result = obj
        for (var key in path) {
            if (result[path[key]] === undefined) {
                return false
            }
            result = result[path[key]]
        }
        return true
    },
    hasIn: function(obj, path) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        var result = obj
        for (var key in path) {
            if (result[path[key]] === undefined) {
                return false
            }
            result = result[path[key]]
        }
        return true
    },
    invert: function(obj) {
        var o = {}
        for (var key in obj) {
            o[obj[key]] = key
        }
        return o
    },
    invertBy: function(obj, func) {
        if (func === undefined) {
            func = function(a) {
                return a
            }
        }
        var o = {}
        for (var key in obj) {
            if (func(obj[key]) in o) {
                o[func(obj[key])].push(key)
            } else {
                o[func(obj[key])] = [key]
            }
        }
        return o
    },
    invoke: function(obj, path, ...args) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        var result = obj
        for (var i = 0; i < path.length - 1; i++) {
            result = result[path[i]]
        }
        return result[path[i]].apply(result, args)
    },
    keysIn: function(obj) {
        var arr = []
        for (var key in obj) {
            arr.push(key)
        }
        return arr
    },
    mapKeys: function(obj, func) {
        var o = {}
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                o[func(obj[key], key, obj)] = obj[key]
            }
        }
        return o
    },
    mapValues: function(obj, f) {
        if (typeof f === 'string') {
            var func = function(o) {
                return o[f]
            }
        } else {
            var func = f
        }
        var o = {}
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                o[key] = func(obj[key])
            }
        }
        return o
    },
    merge: function(obj, src) {
        for (var key in src) {
            if (key in obj) {
                this.merge(obj[key], src[key])
            } else {
                obj[key] = src[key]
            }
        }
        return obj
    },
    mergeWith: function(obj, src, func) {
        for (var key in obj) {
            obj[key] = func(obj[key], src[key], key, obj, src)
            if (func(obj[key], src[key], key, obj, src) === undefined) {
                return this.merge(obj, src)
            }
        }
        return obj
    },
    omit: function(obj, props) {
        var o = {}
        for (var key in obj) {
            if (props.indexOf(key) < 0) {
                o[key] = obj[key]
            }
        }
        return o
    },
    omitBy: function(obj, func) {
        var o = {}
        for (var key in obj) {
            if (func(obj[key]) === false) {
                o[key] = obj[key]
            }
        }
        return o
    },
    pick: function(obj, props) {
        var o = {}
        for (var key in obj) {
            if (props.indexOf(key) >= 0) {
                o[key] = obj[key]
            }
        }
        return o
    },
    pickBy: function(obj, func) {
        var o = {}
        for (var key in obj) {
            if (func(obj[key])) {
                o[key] = obj[key]
            }
        }
        return o
    },
    constant: function(a) {
        return function() {
            return a
        }
    },
    result: function(obj, path, defaultValue) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        var result = obj
        for (var key in path) {
            if (result[path[key]] === undefined) {
                result = defaultValue
                break
            }
            result = result[path[key]]
        }
        if (typeof result === 'function') {
            return result.call(this)
        }
        return result
    },
    set: function(obj, path, value) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        if (path.includes('')) {
            path.splice(path.indexOf(''), 1)
        }
        var pointer = obj
        for (var i = 0; i < path.length - 1; i++) {
            if (pointer[path[i]] === undefined) { //路径找不到的情况
                if (isNaN(path[i]) && !isNaN(path[i + 1])) {
                    pointer[path[i]] = []
                    pointer = pointer[path[i]]
                } else {
                    pointer[path[i]] = {}
                    pointer = pointer[path[i]]
                }
            } else { //路径明确
                pointer = pointer[path[i]]
            }
        }
        pointer[path[i]] = value
        return obj
    },
    setWith: function(obj, path, value, Func) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        if (path.includes('')) {
            path.splice(path.indexOf(''), 1)
        }
        var pointer = obj
        for (var i = 0; i < path.length - 1; i++) {
            if (pointer[path[i]] === undefined) {
                pointer[path[i]] = new Func
                pointer = pointer[path[i]]
            } else {
                pointer = pointer[path[i]]
            }
        }
        pointer[path[i]] = value
        return obj
    },
    toPairs: function(obj) {
        var arr = []
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                arr.push([key, obj[key]])
            }
        }
        return arr
    },
    toPairsIn: function(obj) {
        var arr = []
        for (var key in obj) {
            arr.push([key, obj[key]])
        }
        return arr
    },
    transform: function(obj, func, accumulator = Object.getPrototypeOf(obj)) {
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (func(accumulator, obj[key], key, obj) === false) {
                    return accumulator
                }
            }
        }
        return accumulator
    },
    unset: function(obj, path) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        if (path.includes('')) {
            path.splice(path.indexOf(''), 1)
        }
        var pointer = obj
        for (var i = 0; i < path.length - 1; i++) {
            pointer = pointer[path[i]]
        }
        return delete pointer[path[i]]
    },
    update: function(obj, path, updater) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        if (path.includes('')) {
            path.splice(path.indexOf(''), 1)
        }
        var pointer = obj
        for (var i = 0; i < path.length - 1; i++) {
            if (pointer[path[i]] === undefined) { //路径找不到的情况
                if (isNaN(path[i]) && !isNaN(path[i + 1])) {
                    pointer[path[i]] = []
                    pointer = pointer[path[i]]
                } else {
                    pointer[path[i]] = {}
                    pointer = pointer[path[i]]
                }
            } else { //路径明确
                pointer = pointer[path[i]]
            }
        }
        var temp = pointer[path[i]]
        pointer[path[i]] = updater(temp)
        return obj
    },
    updateWith: function(obj, path, updater, Func) {
        if (typeof path === 'string') {
            path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
        }
        if (path.includes('')) {
            path.splice(path.indexOf(''), 1)
        }
        var pointer = obj
        for (var i = 0; i < path.length - 1; i++) {
            if (pointer[path[i]] === undefined) {
                pointer[path[i]] = new Func
                pointer = pointer[path[i]]
            } else {
                pointer = pointer[path[i]]
            }
        }
        var temp = pointer[path[i]]
        pointer[path[i]] = updater(temp)
        return obj
    },
    values: function(obj) {
        var arr = []
        for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                arr.push(obj[key])
            }
        }
        return arr
    },
    valuesIn: function(obj) {
        var arr = []
        for (var key in obj) {
            arr.push(obj[key])
        }
        return arr
    },
    startsWith: function(str, target, position = 0) {
        return String.prototype.startsWith.call(str, target, position)
    },
    toLower: function(str) {
        return str.toLowerCase()
    },
    toUpper: function(str) {
        return str.toUpperCase()
    },
    trimStart: function(str, chars = '  ') {
        var strArr = str.split('')
        for (var i = 0; i < strArr.length; i++) {
            if (!chars.includes(strArr[i])) {
                break
            } else {
                strArr[i] = ''
            }
        }
        return strArr.join('')
    },
    trimEnd: function(str, chars = '  ') {
        var strArr = str.split('')
        for (var i = strArr.length - 1; i >= 0; i--) {
            if (!chars.includes(strArr[i])) {
                break
            } else {
                strArr[i] = ''
            }
        }
        return strArr.join('')
    },
    trim: function(str, chars = '  ') {
        var result = this.trimStart(str, chars)
        result = this.trimEnd(result, chars)
        return result
    },
    truncate: function(str, obj = {}) {
        var length = obj.length || 30
        var omission = obj.omission || '...'
        var separator = obj.separator || ''
        var olength = omission.length
        if (separator != '') {
            arr = str.split(separator)
            arr.splice(arr.length - 1)
            var last = arr[arr.length - 1]
            var index = str.indexOf(last) + last.length
            str = str.substring(0, length - olength)
            return str.substring(0, index) + omission
        }
        return str.substring(0, length - olength) + omission
    },
    unescape: function(string) {
        return string.replace(/&amp;|&lt;|&gt;|&quot;|&#39;|&#96;/, function(match, index) {
            switch (match) {
                case '&amp;':
                    return '&'
                    break
                case '&lt;':
                    return '<'
                    break
                case '&gt;':
                    return '>'
                    break
                case '&quot;':
                    return '"'
                    break
                case '&#39;':
                    return '\''
                    break
                case '&#96;':
                    return '`'
                    break
            }
        })
    },
    upperCase: function(string) {
        var array = string.split('-')
        array = this.compact(array)
        var remove1 = array.join(' ')
        array = remove1.split('_')
        array = this.compact(array)
        var remove2 = array.join('-')
        var lastArr = remove2.split(' ') //['foo','Bar']
        var lower = lastArr.join('-')
        var testArr = lower.split('')
        for (var i = 0; i < testArr.length; i++) {
            if (testArr[i] == '-') {
                lower = lower.split('-').join(' ').toUpperCase()
                return lower
            }
        }
        for (var j = 1; j < testArr.length; j++) {
            if (testArr[j].charCodeAt() >= 65 && testArr[j].charCodeAt() <= 90) {
                testArr[j] = [' ' + testArr[j]]
            }
        }
        lower = testArr.join('').toUpperCase()
        return lower
    },
    upperFirst: function(string) {
        var strArr = string.split('')
        strArr[0] = strArr[0].toUpperCase()
        var result = strArr.join('')
        return result
    },
    words: function(str, pattern = /\w+/g) {
        return str.match(pattern)
    },
    bindAll: function(obj, method) {
        var f = obj[method[0]]
        obj[method[0]] = function(...args) {
            return f.apply(obj, args)
        }
        return obj
    },
    defaultTo: function(value, defaultValue) {
        if (value != value || value === null || value === undefined) {
            return defaultValue
        }
        return value
    },
    range: function(start = 0, end, step = 1) {
        var result
        if (end === undefined && start > 0) {
            result = new Array(start).fill(0).map((it, index) => index)
        } else if (end === undefined && start < 0) {
            result = new Array(-start).fill(0).map((it, index) => -index + 0)
        } else if (end === undefined && start == 0) {
            result = []
        } else if (step == undefined && start > end) {
            result = []
        } else {
            result = new Array(Math.abs((start - end) / (step || 1))).fill(0).map((it, index) => start + step * index)
        }
        return result
    },
    rangeRight: function(start = 0, end, step = 1) {
        var result
        if (end === undefined && start > 0) {
            result = new Array(start).fill(0).map((it, index) => index)
        } else if (end === undefined && start < 0) {
            result = new Array(-start).fill(0).map((it, index) => -index + 0)
        } else if (end === undefined && start == 0) {
            result = []
        } else if (step == undefined && start > end) {
            result = []
        } else {
            result = new Array(Math.abs((start - end) / (step || 1))).fill(0).map((it, index) => start + step * index)
        }
        return result.reverse()
    },
    mixin: function(obj, src, option) {
        if (arguments.length < 3) {
            op = {
                'chain': true
            }
            result = _.runInContext()
            for (var key in obj) {
                if (typeof obj[key] === 'function') {
                    Function.prototype[key] = obj[key]
                }
            }
        } else {
            for (var key in src) {
                if (typeof obj === 'function' && typeof src[key] === 'function') {
                    Function.prototype[key] = src[key]
                } else {
                    obj[key] = src[key]
                }
            }
        }
        return result
    },
    times: function(n, func) {
        return arr = new Array(n).fill(0).map((it, index) => func(index))
    },
    toPath: function(path) {
        return path = path.split('.').join(' ').split('[').join(' ').split(']').join('').split(' ')
    },
    uniqueId: function(prefix = '') {
        this.count = this.count || 0
        this.count++
            return prefix + this.count
    },
    dellTo3355: function(word) {
        var numArr = []
        for (i = 0; i < word.length; i++) {
            var x = word.charAt(i)
            if (x == "a" || x == "b" || x == "c") {
                numArr[i] = 2
            }
            if (x == "d" || x == "e" || x == "f") {
                numArr[i] = 3
            }
            if (x == "g" || x == "h" || x == "i") {
                numArr[i] = 4
            }
            if (x == "j" || x == "k" || x == "l") {
                numArr[i] = 5
            }
            if (x == "m" || x == "n" || x == "o") {
                numArr[i] = 6
            }
            if (x == "p" || x == "q" || x == "r" || x == "s") {
                numArr[i] = 7
            }
            if (x == "t" || x == "u" || x == "v") {
                numArr[i] = 8
            }
            if (x == "w" || x == "x" || x == "y" || x == "z") {
                numArr[i] = 9
            }
        }
        return Number(numArr.join(''))
    },
    isPrime: function(x) {
        if (x < 2) {
            return false
        }
        var m = Math.sqrt(x)
        for (i = 2; i <= m; i++) {
            if (x % i == 0) {
                return false
            }
        }
        return true
    },
    最大公约数: function(x, y) {
        var lesser = x > y ? y : x
        while (x % lesser != 0 || y % lesser != 0) {
            lesser--
        }
        return lesser
    },
    大整数相加: function(x, y) {
        var m = x.length - 1
        var n = y.length - 1
        var l = (m >= n ? m : n) + 2
        var sum = []
        while (l--) {
            sum.push(0)
        }
        l = (m >= n ? m : n) + 2
        for (var i = l - 1; i > 0; i--) {
            sum[i] = (x[m] == undefined ? 0 : x[m]) + (y[n] == undefined ? 0 : y[n]) + sum[i]
            sum[i - 1] = parseInt(sum[i] / 10)
            sum[i] %= 10
            m--
            n--
        }
        if (sum[0] == 0) {
            sum.shift()
        }
        return sum
    },
    'n-m之间的素数': function(a, b) {
        var arr = []
        for (var i = a; i <= b; i++) {
            if (this.isPrime(i)) {
                arr.push(i)
            }
        }
        return arr
    },
    求数组最大项: function(a) {
        return Math.max.apply(null, a)
    },
    '1-n的和': function(n) {
        return (n * n + n) / 2
    },
    '1-n以内的完全数': function(n) {
        function wanQuan(n) {
            var sum = 1
            for (var i = 2; i < n; i++) {
                if (n % i == 0) {
                    sum += i
                }
            }
            return sum === n && n != 1
        }
        var result = []
        for (var i = 1; i <= n; i++) {
            if (wanQuan(i)) {
                result.push(i)
            }
        }
        return result
    },
    abc排序: function(...args) {
        return args.sort()
    },
    fibb: function(n, cache = []) {
        if (n < 3) {
            return 1
        }
        if (n in cache) {
            return cache[n]
        } else {
            cache[n] = this.fibb(n - 1, cache) + this.fibb(n - 2, cache)
            return cache[n]
        }
    },
    m的n次方: function(m, n) {
        var result = 1
        var counter = Math.abs(n)

        if (m == 0 && n == 0) {
            return NaN
        }

        while (counter--) {
            result *= m
        }

        if (n < 0) {
            return 1 / result
        } else {
            return result
        }
    },
    jc: function(n) {
        if (n == 1) {
            return 1
        } else {
            return n * this.jc(n - 1)
        }
    },
    'Sin-Taylor': function sin(x) {
        var result = 0
        for (var n = 0; n < 5; n++) {
            result += (((Math.pow(-1, n)) / this.jc(2 * n + 1)) * (Math.pow(x, 2 * n + 1)))
        }
        return result
    },
    第一次只出现一次的字符: function(str) {
        var obj = {}
        for (var i = 0; i < str.length; i++) {
            var char = str.charAt(i)
            obj[char] = obj[char] + 1 || 1
        }

        for (var i = 0; i < str.length; i++) {
            if (obj[str.charAt(i)] == 1) {
                return str.charAt(i)
            }
        }
        return null
    },
    反向输出一个三位数: function(a) {
        return String(a).split('').reverse().join('')
    },
    分解质因数: function(a) {
        var arr = new Array(a).fill(0).map((it, index) => index)
        arr = arr.map(it => {
            if (!this.isPrime(it)) {
                return false
            } else {
                return it
            }
        })
        var result = [],
            temp = a
        for (var j = 1; j < Math.log2(temp); j++) {
            for (var i = 1; i < arr.length; i++) {
                if (Number.isInteger(a / arr[i])) {
                    if (arr[i] != 1) {
                        result.push(arr[i])
                    }
                    a = a / arr[i]
                }
            }
        }
        if (a != 1) {
            result.push(a)
        }
        return result

    },
    猴子选王: function(n, m) { //n为猴子个数，m为报的数
        var firstNum = 1 //每轮报数开始第一个猴子报的数
        function remain(x) { //x为报数之前的数组，remain(x)表示每轮报数完毕剩下的猴子组成的数组
            var newArray = []
            var n = x.length
            var k = 0 //每轮报数用k记录数组下标
            for (j = firstNum; j < firstNum + n; j++) {
                if (j % m != 0) {
                    newArray.push(x[k])
                }
                k += 1
            }
            firstNum += n
            return newArray
        }

        var monkey = []
        for (var i = 1; i <= n; i++) {
            monkey.push(i)
        }
        var m1 = remain(monkey)

        //报数直到最后的数组只有一项
        for (var i = 1;; i++) {
            m1 = remain(m1)
            if (m1.length == 1) {
                return m1[0]
            }
        }
    },
    评委打分: function(arr) {
        var maximum = -Infinity
        var minimum = Infinity
        var sum = 0
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i]

            if (arr[i] >= maximum) {
                maximum = arr[i]
            }

            if (arr[i] < minimum) {
                minimum = arr[i]
            }
        }
        return (sum - maximum - minimum) / (arr.length - 2)
    },
    敲7: function(n) {
        var result = []
        for (var i = 6; i <= n; i++) {
            if (i % 7 == 0 || i % 10 == 7 || parseInt(i % 10) == 7) {
                result.push(i)
            }
        }
        return result
    },
    求平方根: function(n) {
        var left = 0
        var right = n
        var middle = (left + right) / 2 //匹配浮点数平方根
        var i = 0 //匹配整数平方根
        while (Math.abs(middle * middle - n) > 0.000000000001) {
            i++
            if (i * i == n) {
                return i
            }
            if (middle * middle > n) { //middle 大于 根号n
                right = middle
            }
            if (middle * middle < n) { //middle 小于 根号n
                left = middle
            }

            middle = (left + right) / 2
        }
        return middle
    },
    日历: function firstWeekdayOfMonthYear(year, month) {
        var daysOfYear = (year * 365 + parseInt(year / 4) - parseInt(year / 100) + parseInt(year / 400))

        var allDays = daysOfYear + daysUntillMonth(year, month)

        var weekDay = (allDays + 6) % 7

        return weekDay

        /**
         * 计算某一年1月到（month-1）月的天数之和
         */
        function daysUntillMonth(year, month) {
            var daySum = 0
            for (var i = 1; i < month; i++) {
                daySum += daysOfMonth(year, i)
            }
            return daySum
        }

        /**
         * 计算某年某月有多少天
         * 例：daysOfMonth(2000,2) -> 29
         */
        function daysOfMonth(year, month) {
            if (month == 2) {
                if (isLeapYear(year)) {
                    return 29
                } else {
                    return 28
                }
            }
            switch (month) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    return 31
                default:
                    return 30
            }
        }

        function isLeapYear(y) {
            return (y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)
        }

    },
    四舍五入: function(n) {
        if (parseInt(n) == parseInt(n + 0.5)) {
            return parseInt(n)
        }
        return parseInt(n) + 1

    },
    向量点积: function(v1, v2) {
        var result = 0

        for (var i = 0; i < v1.length; i++) {
            result += v1[i] * v2[i]
        }
        return result
    },
    字符串展开: function expandStr(str) {
        var result = ''
        var dashStart, dashEnd
        for (var i = 0; i < str.length; i++) {
            if (str[i] == '-') {

                dashStart = str.charCodeAt(i - 1) + 1
                dashEnd = str.charCodeAt(i + 1) - 1
                for (var j = dashStart; j <= dashEnd; j++) {
                    result += String.fromCharCode(j)
                }

            } else {

                result += str[i]

            }
        }
        return result
    },
    最小公倍数: function(a, b) {
        return a * b / this['最大公约数'](a, b)
    },
    '最小的能被1-n整除的数': function(n) {
        if (n <= 10) {

            for (k = 2;; k = k + 2) {

                if (zhengChu(k)) {

                    return k
                }
            }

        }
        if (n > 10 && n <= 20) {

            for (k = 2520;; k = k + 2520) {

                if (zhengChu(k)) {

                    return k
                }
            }

        }
        if (n > 20 && n <= 30) {

            for (k = 232792560;; k = k + 232792560) {

                if (zhengChu(k)) {

                    return k
                }
            }

        }
        if (n > 30) {

            for (k = 2329089562800;; k = k + 2329089562800) {

                if (zhengChu(k)) {

                    return k
                }
            }

        }

        function zhengChu(x) {

            for (i = 2; i <= n; i++) {

                if (x % i != 0) {
                    return false
                }
            }
            return true
        }

    }
}