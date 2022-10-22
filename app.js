

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
        alert("Account Created!")
        

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
        swal({
             title: "Fields Empty!!!",
             text: "Please try to check!",
             icon: "warning",
             button: "ok",
            });
    }else if(fnameInput.value.trim().length <5 || fnameInput.value.trim().length > 15){
        setError(fnameInput, 'Invalid name');
        swal({
            title: "Please enter a valid name!",
            text: "Please change!",
            icon: "warning",
            button: "ok",
           });
    }else if(!isNameValid(fnameInput.value)){

        setError(fnameInput,'Invalid name');
        swal({
            title: "Please enter a valid name!",
            text: "Please change!",
            icon: "warning",
            button: "ok",
           });
     } else {
        setSuccess(fnameInput);
    }

     //lastname
     if(lnameInput.value.trim()==''){
        setError(lnameInput, 'Name can not be empty');
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
    }else if(lnameInput.value.trim().length <5 || lnameInput.value.trim().length > 15){
        setError(lnameInput, 'Invalid name');

        swal({
            title: "Please enter a valid name!",
            text: "Please change!",
            icon: "warning",
            button: "ok",
           });
    }else if(!isNameValid(lnameInput.value)){

        setError(lnameInput,'Invalid name');
        swal({
            title: "Please enter a valid name!",
            text: "Please change!",
            icon: "warning",
            button: "ok",
           });
        }
    
    else {
        setSuccess(lnameInput);
    }

    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
    }else if(!isEmailValidi(emailInput.value)){
        setError(emailInput, 'Provide valid email address');
        swal({
            title: "Please enter a valid email!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
        
    }else{
        
        setSuccess(emailInput);
    }

      //birthdate
      if(bdateInput.value.trim()==''){
        setError(bdateInput, 'Birthdate cannot be empty');
        swal({
            title: "Fields Empty!!!",
            text: "Please check!",
            icon: "warning",
            button: "ok",
           });

    }else if(!isAgeValid(bdateInput.value)){
        setError(bdateInput, 'Age not qualified');
        swal({
            title: "Your Age is age!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });

         } else{
        setSuccess(bdateInput);
    }

      //Phone Number
      if(pnumber.value.trim()==''){
        setError(pnumber, 'Name can not be empty');
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
    }else if(pnumber.value.trim().length <11 || pnumber.value.trim().length > 11){
        setError(pnumber, 'Invalid phone number');
        swal({
            title: 'Please Enter a valid phone Number!',
            text: "Please check!",
            icon: "warning",
            button: "ok",
           });
       
    }else {
        setSuccess(pnumber);
    }

    

    //PASSWORD
    if(passwordInput.value.trim()==''){
        setError(passwordInput);
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
    }else if(passwordInput.value.trim().length  <8 ){
        setError(passwordInput, 'Must have 8 characters');
        swal({
            title: "Password Invalid!",
            text: "Your password must have 8 characters or more, and contain at least one special character, number, uppercase letter, and lowercase letter",
            icon: "warning",
            button: "ok",
           });

    }else {
        setSuccess(passwordInput);
    }

    //CONFIRM PASSWORD
    if(confirmPasswordInput.value.trim()==''){
        setError(confirmPasswordInput, 'Password cannot be empty');
        swal({
            title: "Fields Empty!!!",
            text: "Please try to check!",
            icon: "warning",
            button: "ok",
           });
    }else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, 'Password does not match');
        swal({
            title: "Your passwords do not match. Please try again!",
            text: "check your password!",
            icon: "warning",
            button: "ok",
           });
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

// function isEmailValid(email){
//     const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     return reg.test(email);
// }



function isNameValid(fname)
  {
   const letters = /^[A-Za-z-.|]+$/;
   return letters.test(fname)
  }


function isEmailValidi(emaili){
  const fmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return fmail.test(emaili);
}

function isAgeValid(dob, age) {
    // dates are all converted to date objects
    const my_dob = new Date(dob);
    const today = new Date();
    const max_dob = new Date(today.getFullYear() - age, today.getMonth(), today.getDate());
    return max_dob.getTime() > my_dob.getTime();
  }

//   function isAgeValid(birthday) {
//     const diff = Date.now() - birthday.getTime();
//     const ageDate = new Date(diff);
//     let age = Math.abs(ageDate.getUTCFullYear() - 1970);
//     const valid = age < 18;
//     return valid.test(birthday);
//   }


















// const form = document.querySelector('#create-account-form');
// const fnameInput = document.querySelector('#fname');
// const lnameInput = document.querySelector('#lname');
// const emailInput = document.querySelector('#email');
// const bdateInput = document.querySelector('#bdate');
// const pnumberInput = document.querySelector('#pnumber');
// const passwordInput = document.querySelector('#password');
// const confirmPasswordInput = document.querySelector('#confirm-password');

// form.addEventListener('submit', (event)=>{
    
//     validateForm();
//     console.log(isFormValid());
//     if(isFormValid()==true){
//         form.button();
//      }else {
//          event.preventDefault();
//      }

// });
// function isFormValid(){
//     const inputContainers = form.querySelectorAll('.input-group');
//     let result = true;
//     inputContainers.forEach((container)=>{
//         if(container.classList.contains('error')){
//             result = false;
//         }
//     });
//     return result;
// }

// function validateForm() {
//     //firstname
  
        
//     if(fnameInput.value.trim()==''|| lnameInput.value.trim()=='' || emailInput.value.trim()==''|| pnumberInput.value.trim()=='' || bdateInput.value.trim()=='' || passwordInput.value.trim()==''  || confirmPasswordInput.value.trim()==''){
//         setError(fnameInput);
//         setError(lnameInput);
//         setError(bdateInput);
//         setError(pnumberInput);
//         setError(emailInput);
//         setError(passwordInput);
//         setError(confirmPasswordInput);
//         // alert('Fields Empty!!\n Please check the Empty field!!')
//         swal({
//             title: "Fields Empty!!!",
//             text: "Please try to check!",
//             icon: "warning",
//             button: "ok",
//           });
//     }else if(fnameInput.value.trim().length <5 || fnameInput.value.trim().length > 15){
//         setError(fnameInput, 'Name must be min 5 and max 15 charecters');

//      //lastname
//     }else if(lnameInput.value.trim().length <5 || lnameInput.value.trim().length > 15){
//         setError(lnameInput);
//         alert( 'Name must be min 5 and max 15 charecters');
//     }
//     //EMAIL
//     else if(isEmailValid(!emailInput.value)){
//         setError(emailInput);
//         alert( 'Please input valid email')
        
//     }

//       //birthdate
//     else if(bdateInput.value.trim().length <5 || bdateInput.value.trim().length > 15){
//         setError(bdateInput);      
//         alert( 'Name must be min 5 and max 15 charecters');

//       //Phone Number
//     }else if(pnumber.value.trim().length <11 || pnumber.value.trim().length > 11){
//         setError(pnumbe);
//         alert('Please Enter a valid phone Number!')
//     }
//     //PASSWORD
//     else if(passwordInput.value.trim().length <8 || passwordInput.value.trim().length >20){
//         setError(passwordInput);
//         alert('Password min 6 max 20 charecters');
//     }
//     //CONFIRM PASSWORD
    
//     if(confirmPasswordInput.value !== passwordInput.value){
//         setError(confirmPasswordInput);
//         alert('Password does not match');
//     }else {
//         setSuccess(confirmPasswordInput);

//         swal({
//             title: "Account Created!!",
//             text: "Thanks for filling up! Your account has been successfully created.",
//             icon: "success",
//             button: "ok",
//           });
//     }
    
// }

// function setError(element, errorMessage) {
//     const parent = element.parentElement;
//     if(parent.classList.contains('success')){
//         parent.classList.remove('success');
//     }
//     parent.classList.add('error');
//     const paragraph = parent.querySelector('p');
//     paragraph.textContent = errorMessage;
// }

// function setSuccess(element){
//     const parent = element.parentElement;
//     if(parent.classList.contains('error')){
//         parent.classList.remove('error');
//     }
//     parent.classList.add('success');
// }

// function isEmailValid(email){
//     const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//     return reg.test(email);
// }








 





