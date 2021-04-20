"use strict"



let profileForm = document.querySelector('#profileForm')
profileForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Submit!");
});
