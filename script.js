const checkbox = document.querySelector('#divStyle');
const textFields = document.querySelectorAll('.textfield');
const knapp = document.getElementsByClassName('knapp');
const output = document.getElementById('output');

function example1(color, content) {
    console.log('function example1(color, content' , color + content);
    return 'Returnerar' + color + '' + content;
    }

console.log(example1('color', 'content'));