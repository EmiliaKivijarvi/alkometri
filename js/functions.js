document.querySelector("button").addEventListener("click", () => {
    const weight = document.querySelector('input[type=number]').value; // User's weight
    const time = document.querySelector('#time').value; // Drinking duration in hours
    const bottles = document.querySelector('#bottles').value; // Number of beer bottles
    const radioButtonGroup = document.getElementsByName('gender'); // Gender radio buttons

    // Find the checked radio button (gender)
    const checkedRadio = Array.from(radioButtonGroup).find((radio) => radio.checked);
    const gender = checkedRadio ? checkedRadio.value : null;

    // Calculate alcohol consumed in grams
    const beerVolumeLiters = bottles * 0.33; // Each beer is 0.33 liters
    const alcoholGrams = beerVolumeLiters * 8 * 4.5; // Alcohol in grams

    // Calculate burn rate (g/h)
    const burnRate = weight / 10;

    // Remaining grams of alcohol after time has passed
    let remainingGrams = alcoholGrams - (burnRate * time);
    if (remainingGrams < 0) remainingGrams = 0; // No negative alcohol level

    // Calculate BAC based on gender
    let promilles;
    if (gender === "male") {
        promilles = remainingGrams / (weight * 0.7);
    } else {
        promilles = remainingGrams / (weight * 0.6);
    }

    // Display result
    const result = document.querySelector('output');
    result.innerHTML = promilles.toFixed(2); // Display with 2 decimal places
});
