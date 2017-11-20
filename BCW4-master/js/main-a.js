'use strict';
//select buttons
const addButton = document.querySelector('#add');
const changeButton = document.querySelector('#change');
const toggleButton = document.querySelector('#toggle');


//select p elements
const firstP= document.querySelector('p');
const secondP = document.querySelector('p:nth-child(2)');
const thirdP = document.querySelector('p:nth-child(3)');

//create eventListeners

addButton.addEventListener('click', (evt) => {
    firstP.classList.add('red');
});


changeButton.addEventListener('click', (evt) => {
    //if secondP contains class red
    if(secondP.classList.contains('red')){
        //replace it with 'blue'
        secondP.classList.replace('red', 'blue');
    }//else
    else {
        //replace with 'red'
        secondP.classList.replace('blue', 'red');
    }
});

toggleButton.addEventListener('click', (evt) => {
    thirdP.classList.toggle('green');
});