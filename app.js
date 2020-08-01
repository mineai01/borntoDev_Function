function toCelsius(fahrenheit) {
  let value = (fahrenheit - 32) * 5 / 9;
  return value.toFixed(2) + "°C";
  // document.getElementById("toCelsius").innerHTML = value.toFixed(2) + "°C"
}
function toFahrenheit(celsius) {
  let value = (celsius * 9) / 5 + 32;
  return value.toFixed(2) + "°F";
}
function display(elementId,value){
document.getElementById(elementId).innerHTML = value
}
function toCelsiusProgram(value){
  alert(toCelsius(value))
}
function toFahrenheitProgram(value){
  alert(toFahrenheit(value))
}
// alert(toCelsius(150));
// display("toCelsius",toCelsius(150))

// alert(toFahrenheit(32));
// display("toFahrenheit",toFahrenheit(32))