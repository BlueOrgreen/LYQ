var fs = require('fs');
var ttf2woff2 = require('ttf2woff2');
var path = require("path");
// console.log("__dirname", __dirname);

// var srcPath = 'font/HanziPenSCW3.ttf'; // 字体源文件路径
var destPath = path.join(__dirname, '../public/font/HanziPenSCW3.ttf'); // 字体源文件路径
var toPath = path.join(__dirname, '../public/font/minHanziPenSCW3.woff2')


// var fs = require('fs');
// var ttf2woff2 = require('ttf2woff2');


try {
    var input = fs.readFileSync(destPath);
    fs.writeFileSync(toPath, ttf2woff2(input));
} catch(err) {
    console.log('error', err);
}


