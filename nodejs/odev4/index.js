const fs = require('fs');

fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}', 'utf8', (err, data) => {
    if (err) console.error(err);
});

fs.readFile('employees.json', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log(data.toString());
});

fs.appendFile('employees.json', ',{ "name": "Employee 2 Name", "salary": 2200 }', 'utf8', (err) => {
    if (err) console.log(err);
});

fs.unlink('employees.json', (err) => {
    if (err) console.log(err);
});