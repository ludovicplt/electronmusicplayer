const fs = require("fs")
const util = require('util')
const asyncReaddir = util.promisify(fs.readdir)

const loading = async function () {
    const files = await asyncReaddir(__dirname + "/media");
    return (files.map(f => "./media/" + f));
}

module.exports = loading;