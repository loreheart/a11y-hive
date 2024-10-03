"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var csv = require("csv-parser");
var csvFilePath = path.resolve(__dirname, '../data/site-list.csv');
var jsonFilePath = path.resolve(__dirname, '../data/site-list.json');
var results = [];
fs.createReadStream(csvFilePath)
    .pipe(csv())
    .on('data', function (data) { return results.push(data); })
    .on('end', function () {
    fs.writeFileSync(jsonFilePath, JSON.stringify(results, null, 2));
    console.log('CSV file successfully processed and saved as JSON.');
});
