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