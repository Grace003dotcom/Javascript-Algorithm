function convertFahrToCelsius(fahrenheit) {
    var celsius;
  
    celsius = (fahrenheit - 32) * 5 / 9
  
    return celsius;
  }
  convertFahrToCelsius(null);
  convertFahrToCelsius(0);
  convertFahrToCelsius("0");
  convertFahrToCelsius([1,2,3]);
  convertFahrToCelsius({temp: 0})

console.log(celsius);