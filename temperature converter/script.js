function convert() {
  let fahrenheit = document.getElementById("fahrenheit").value;
  let celsius = document.getElementById("celsius").value;
  let kelvin = document.getElementById("kelvin").value;

  if (fahrenheit !== "") {
    celsius = (fahrenheit - 32) * 5 / 9;
    kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
  } else if (celsius !== "") {
    fahrenheit = celsius * 9 / 5 + 32;
    kelvin = parseFloat(celsius) + 273.15;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("kelvin").value = kelvin.toFixed(2);
  } else if (kelvin !== "") {
    celsius = kelvin - 273.15;
    fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
}

