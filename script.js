// Uppgift 4
const checkbox = document.querySelector('#divStyle');
const textFields = document.querySelectorAll('.textfield');
const knapp = document.getElementsByClassName('knapp');
let output = document.getElementById('output');

// Uppgift 5
function uppdate(e){
    console.log('Function: e', e.target);
    const inputName = e.target.name;
    console.log('Name-attribut:', inputName);
    if (inputName === 'content') {
    output.innerHTML = e.target.value;
}}

// Uppgift 6
// Eventlyssnare för textfields
const input = document.querySelectorAll('.textfield');
input.forEach(input => input.addEventListener('input', uppdate));
input.forEach(input => input.addEventListener('input', uppdate));

// Eventlyssnare för checkboxen
checkbox.addEventListener('change', function() {
    // Ändra bakgrundsfärg på div-elementet till den färg som anges i color-input
    output.style.backgroundColor = color.value;
    console.log('Checkbox status:', Checkbox.checked);
});

// Eventlyssnare för ta bort knappen
knapp[0].addEventListener('click', function () {
    if (output) {
        output.remove(); // Ta bort output-div helt
        output = null; // Nollställ variabeln
    }
});

// Eventlyssnare för "Lägg till"-knappen
knapp[1].addEventListener('click', function () {
    if (!output) {
        // Skapa och lägg till output-div om den inte finns
        html = `<div id="output"></div>`;
        place = document.querySelector('fieldset');
        document.querySelector('fieldset').insertAdjacentHTML('beforeend', html);
        output = document.getElementById('output'); // Uppdatera variabeln
    }
});