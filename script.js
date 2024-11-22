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

// Lägg till eventlyssnare till textfälten (color och content)
color.addEventListener('input', uppdate);
content.addEventListener('input', uppdate);

// Eventlyssnare för checkboxen
checkbox.addEventListener('change', function() {
    // Ändra bakgrundsfärg på div-elementet till den färg som anges i color-input
    output.style.backgroundColor = color.value;
    console.log('Checkbox status:', Checkbox.checked);
});

// Eventlyssnare för knappen
knapp.addEventListener('click', function() {
    // Ta bort div-elementet vid klick
    output.style.display = 'none';
});