const arguments = process.argv.slice(2);

function calculateArea(radius) {
    var area = Math.PI * radius * radius;
    console.log((Math.round(area * 100) / 100).toFixed(2));
}

calculateArea(arguments[0] * 1)