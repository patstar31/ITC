function convert() {
    const conversionType = document.getElementById("conversionType").value;
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    let result;

    if (isNaN(inputValue)) {
        document.getElementById("result").textContent = "Please enter a valid number.";
        return;
    }

    switch (conversionType) {
        case "computeconvCelciusToFahrenheit":
            result = (inputValue * 9 / 5) + 32;
            document.getElementById("result").textContent = `${inputValue}°C = ${result.toFixed(2)}°F`;
            break;
        case "computeconvFahrenheitToCelcius":
            result = (inputValue - 32) * 5 / 9;
            document.getElementById("result").textContent = `${inputValue}°F = ${result.toFixed(2)}°C`;
            break;
        case "computeMeterstoFeet":
            result = inputValue * 3.28084;
            document.getElementById("result").textContent = `${inputValue} meters = ${result.toFixed(2)} feet`;
            break;
        case "computeFeetToMeters":
            result = inputValue / 3.28084;
            document.getElementById("result").textContent = `${inputValue} feet = ${result.toFixed(2)} meters`;
            break;
        default:
            document.getElementById("result").textContent = "Invalid conversion type.";
    }
}