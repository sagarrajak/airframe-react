const { generate } = require('react-dts-generator');
const path = require('path');
const fs = require('fs');

const { spawnSync } = require('child_process');

const root = path.join(__dirname, '../');
console.log(path.join(root, 'app'));

// generate({
//     input: path.join(root, 'app/components/Accordion/Accordion.js'),
//     isBaseClass: true,
// });

function generateTypes(dir) {
    var results = [];
    var list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        var stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            generateTypes(file);
        } else {
            console.log(file);
            if (file.split('.')[file.split('.').length - 1] === 'js') {
                try {
                    generate({
                        input: file,
                        isBaseClass: false,
                    });
                } catch (err) {
                    const tsc = spawnSync('tsc', [
                        '--allowjs',
                        '--declaration',
                        file,
                    ]);
                    console.log(tsc.output.toString('utf8'));
                }
                // console.log(file);
            }
        }
    });
    return results;
}

console.log(generateTypes(path.join(__dirname)));
// console.log(path.join(__dirname, 'template'));
