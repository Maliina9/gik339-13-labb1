const checkbox = document.querySelector('#divStyle');
const textFields = document.querySelectorAll('.textfield');
const knapp = document.getElementsByClassName('knapp');
const output = document.getElementById('output');

function uppdate(e){
    console.log('Function: e', e.target);
    const inputName = e.target.name;
    console.log('Name-attribut:', inputName);
    if (inputName === 'content') {
    output.innerHTML = e.target.value;
}}

querySelectorAll('.textfield'); 
const input = querySelectorAll('.textfield');
input.forEach((field) => field.addEventListener('input', uppdate));


// Eventlyssnare för checkboxen
checkbox.addEventListener('change', function() {
    // Ändra bakgrundsfärg på div-elementet till den färg som anges i color-input
    output.style.backgroundColor = color.value;
    console.log('Checkbox status:', Checkbox.checked);
});

// Eventlyssnare för ta bort knappen
knapp[0].addEventListener('click', function() {
    // Ta bort div-elementet vid klick
    output.style.display = 'none';
});

// Eventlyssnare för lägg till knappen
knapp[1].addEventListener('click', function() {
//  Lägg till div-elementet till body
    output.style.display = 'block';
});