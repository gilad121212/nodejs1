const fs = require('fs')
const _ = require('lodash');
const { join } = require('path');
const { stringify } = require('querystring');
const { json } = require('stream/consumers');
function func2(data) {
    const list = _.words(data)
    const revers = _.reverse(list)
    console.log(revers.join(" "))
}


function func3(data) {
    const list = _.words(data)
    console.log(_.uniq(list))
}


function func4(data) {
    const list = _.words(data)
    const uniq1 = _.uniq(list)
    console.log(uniq1.length)
}
function func5(data) {
    const list = _.words(data)
    const uniq1 = _.uniq(list)
    const uniqString = uniq1.join(" ")
    const upper = uniqString.toUpperCase()
    const words = _.words(upper)
    console.log(words)
    fs.appendFile('results.js',JSON.stringify(words) + "\n", (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}
function func6(data) {
    const list = _.words(data)
    const uniq1 = _.uniq(list)
    const arr = []
    for (let i of uniq1) {
        if (i.length > 5) {
            arr.push(i)
        }
    }
    console.log(arr)
    fs.appendFile('results.js',JSON.stringify(arr)+ "\n", (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}
function func7(data) {
    const list = _.words(data)
    const uniq1 = _.uniq(list)
    let aeiou = ["a", "e", "i", "o", "u"]
    const arr1 = []
    for (let i of uniq1) {
        let c = 0
        for (let j of i) {
            if (aeiou.includes(j)) {
                c++
            }
        }
        arr1.push({ words: i, vowelCount: c })
    }
    console.log(arr1)
    fs.appendFile('results.js',JSON.stringify(arr1)+ "\n", (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    })
}
module.exports = {
    func2,
    func3,
    func4,
    func5,
    func6,
    func7
}