const kelvin = 293;
// set kelvin temperature input to 293
// value will not change, so use 'const' instead of 'var'

var celsius = kelvin - 273;
// convert kelvin temperature value to celsius (20)

console.log(`The temperature is ${celsius} degrees Celsius`);
// insert celsius variable value into string
// 'The temperature is 20 degrees Celsius'

var fahrenheit = celsius * (9/5) + 32;
// convert celsius temperature value to fahrenheit (68)

var fahrenheit = Math.floor(fahrenheit);
// round fahrenheit value down to nearest integer

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
// insert fahrenheit variable value (68) into string
// 'The temperature is 68 degrees Fahrenheit'

var newton = Math.floor(celsius * (33/100));
// convert celsius variable to newton value (6)

console.log(`The temperature is ${newton} degrees Newton`);
// insert newton variable value (6) into string
// 'The temperature is 6 degrees Newton'
