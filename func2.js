const _ = require('lodash');
function func1(data) {
    let count = 0
    for (let i = 0; i < data.length; i++) {
        if (data[i] === " " && data[i - 1] !== " ") {
            count++
        }
    }
    console.log(count)
}

module.exports = {
    func1
}