'use strict';
const listBlock = document.querySelector('.list-block');
const input = document.querySelector('.input');
const addSection = document.querySelector('.plus-icon');
var tasks = document.querySelectorAll('.container-task');

// adding list item while user clicks PLUS button
addSection.addEventListener('click', add);

// adding list item while user adds text and presses ENTER button
input.addEventListener('keydown', function(event) { if(event.key == 'Enter') add(); });

function add() {
    input.style.borderColor = '#4caf50';

    //if user inputs nothing warn him
    if(!input.value) {
        input.style.borderColor = 'red';
        return;
    }

    //adding list elements
    let section = document.createElement('div');
    section.className = 'container-task';
    section.innerHTML = "<div class='check'><i class='fas fa-check-circle'></i></div><p class='content'>" + input.value + "</p><div class='delete check'><i class='fas fa-trash-alt'></i></div>";
    listBlock.appendChild(section);
    input.value = '';
}

listBlock.addEventListener('click', function(event) {
     var target = event.target;
     var prntElmn = target.parentElement;

     if(target.tagName == 'I' && prntElmn.classList == 'delete check') {
    //accessing parent element of parent element
        prntElmn.parentElement.style.display = 'none';
     }

     if(target.tagName == 'I' && (prntElmn.classList == 'check' || prntElmn.classList == 'check active') ) {
        target = prntElmn;
        target.classList.toggle('active');
        var nextElm = target.nextElementSibling;
        nextElm.classList.toggle('done');
        }

     if(target.tagName == 'P') {
        target.classList.toggle('done');
        var prvsElm = target.previousElementSibling;
        prvsElm.classList.toggle('active');
   
           }         
})







