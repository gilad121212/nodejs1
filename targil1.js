const fs = require('fs')
const func = require('./func1.js')
const func1 = require('./func2.js')
const { join } = require('path');
fs.readFile("file.txt", 'utf-8', function (err, data) {
    if (err) throw err;
    console.log(data)
    func1.func1(data)
    func.func2(data)
    func.func3(data)
    func.func4(data)
    func.func5(data)
    func.func6(data)
    func.func7(data)
})


