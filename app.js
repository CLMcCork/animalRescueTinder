"use strict"

//delete the api key when pushing to github!! until i figure out how to hide files :) 
const apiKey = '';


let profileForm = document.querySelector('#profileForm')
profileForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Submit!");
});
