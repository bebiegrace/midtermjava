const form = document.querySelector('#create-account-form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const bdateInput = document.querySelector('#bdate');
const pnumberInput = document.querySelector('#pnumber');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.button();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //firstname
    if(fnameInput.value.trim()==''){
        setError(fnameInput, 'Name can not be empty');
    }else if(fnameInput.value.trim().length <5 || fnameInput.value.trim().length > 15){
        setError(fnameInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(fnameInput);
    }

     //lastname
     if(lnameInput.value.trim()==''){
        setError(lnameInput, 'Name can not be empty');
    }else if(lnameInput.value.trim().length <5 || lnameInput.value.trim().length > 15){
        setError(lnameInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(lnameInput);
    }

    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid email address');
    }

      //birthdate
      if(bdateInput.value.trim()==''){
        setError(bdateInput, 'Name can not be empty');
    }else if(bdateInput.value.trim().length <5 || bdateInput.value.trim().length > 15){
        setError(bdateInput, 'Name must be min 5 and max 15 charecters');
    }else {
        setSuccess(bdateInput);
    }

      //Phone Number
      if(pnumber.value.trim()==''){
        setError(pnumber, 'Name can not be empty');
    }else if(pnumber.value.trim().length <11 || pnumber.value.trim().length > 11){
        setError(pnumber, 'Please Enter a valid phone Number!');
    }else {
        setSuccess(pnumber);
    }

    

    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password can not be empty');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Password min 6 max 20 charecters');
    }else {
        setSuccess(passwordInput);
    }

    //CONFIRM PASSWORD
    if(confirmPasswordInput.value.trim()==''){
        setError(confirmPasswordInput, 'Password can not be empty');
    }else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, 'Password does not match');
    }else {
        setSuccess(confirmPasswordInput);
    }
}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}



