function circleArea(radius) {

    console.log("Area: ", Math.round((Math.PI * radius * radius) * 100) / 100);
}

function circleCircumference(radius) {
    console.log("Circumference: ", Math.round((2 * Math.PI * radius) * 100) / 100);
}

module.exports = {
    circleArea,
    circleCircumference
}