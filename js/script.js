'use strict';


const btnSubscribe = document.querySelector('.btn-sub');
const btnSuccess = document.querySelector('.btn-success');
const emailNotValid = document.querySelector('.email-not-valid');
const emailInput = document.querySelector('.email-input');
const mainContainer = document.querySelector('.container');
const containerSuccess = document.querySelector('.container-success');

let emailValue = document.getElementById('email');
emailValue.value = '';
let emailDisplay = document.getElementById('display-email');

const init = function (){
    emailValue = '';
    emailValue = document.getElementById('email').value;
}

const isValidEmail = function(emailValue) {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegEx.test(emailValue);
}

const switchContainer = function () {
    mainContainer.classList.toggle('hidden');
    containerSuccess.classList.toggle('hidden');
}

btnSubscribe.addEventListener('click', function(){
    if(isValidEmail(emailValue)) {
        emailDisplay.textContent = emailValue;
        switchContainer();
        emailNotValid.classList.add('hidden');
        emailInput.classList.remove('email-input-not-valid');
    } else {
        emailNotValid.classList.remove('hidden');
        emailInput.classList.add('email-input-not-valid');
    }
    init();
});
btnSuccess.addEventListener('click', switchContainer)