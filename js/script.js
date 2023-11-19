'use strict';

const btnSubscribe = document.querySelector('.btn-sub');
const btnSuccess = document.querySelector('.btn-success');
const emailNotValid = document.querySelector('.email-not-valid');
const emailInput = document.querySelector('.email-input');
const mainContainer = document.querySelector('.container');
const containerSuccess = document.querySelector('.container-success');

let emailValue = document.getElementById('email');
let emailDisplay = document.getElementById('display-email');

/* Reset the input box value*/
const init = function (){
    emailValue.value = '';
}

/* Validation for Email with Regular Expression */
const isValidEmail = function(emailValue) {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegEx.test(emailValue);
}

/* Switching the main Container to Success Container */
const switchContainer = function () {
    mainContainer.classList.toggle('hidden');
    containerSuccess.classList.toggle('hidden');
}

/* Check Email Address with 'oninput' event */
const emailOnChange = function(e) {
    if(isValidEmail(e)) {
        emailNotValid.classList.add('hidden');
        emailInput.classList.remove('email-input-not-valid');
    } else {
        emailNotValid.classList.remove('hidden');
        emailInput.classList.add('email-input-not-valid');
    }
}

/* Button event */
btnSubscribe.addEventListener('click', function(){
    const currentEmail = emailValue.value;
    if(isValidEmail(currentEmail)) {
        emailDisplay.textContent = currentEmail;
        switchContainer();
        emailNotValid.classList.add('hidden');
        emailInput.classList.remove('email-input-not-valid');
    } else {
        emailNotValid.classList.remove('hidden');
        emailInput.classList.add('email-input-not-valid');
    }
});

init();

btnSuccess.addEventListener('click', switchContainer);