const path = require('path')
const fs = require('fs')

const functionsFolder = path.resolve('functions')
const functionFiles = fs.readdirSync(functionsFolder)
const jsFiles = functionFiles.filter((ff) => ff.match(/\.js$/))
const jsFilePaths = jsFiles.map((ff) => path.resolve(functionsFolder, ff))
const functions = jsFilePaths.map((ffp) => require(ffp))

module.exports = functions
