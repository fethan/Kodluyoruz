const fs = require('fs');

fs.readFile('input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});

fs.writeFile('output.json', '{"name": "erol",   "age":27}', 'utf8', (err, data) => {
    if (err) console.error(err);
});

fs.appendFile('output.json', '\n New Text', 'utf8', (err, data) => {
    if (err) console.error(err);
})

fs.unlink('output.json', function (err) {
    if (err) console.log(err);
});