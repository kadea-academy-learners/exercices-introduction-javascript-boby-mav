function celsiusToFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

console.log(`25°C = ${celsiusToFahrenheit(25).toFixed(2)}°F`);
module.exports = {
  celsiusToFahrenheit,
};
