var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){

  var name = document.getElementById('contact-name').value.trim();

  if (name.length === 0){
    nameError.innerHTML = 'Name is required';
    return false;
  }

  //matches the required format of input and give error if not matched
  if(!name.match(/^[A-Za-z]+\s{1}[A-Za-z]+$/)){
    nameError.innerHTML = 'Name is required';
    return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validatePhone(){
  var phone = document.getElementById('contact-phone').value; 

  if(phone.length === 0){
    phoneError.innerHTML = 'phone no. is required';
    return false;
  }
  if(phone.length !== 10){
    phoneError.innerHTML = 'phone no. should be of 10 digits';
    return false;
  }
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'only digits please';
    return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-check"></i>';
    return true;
}

function validateEmail(){
  var email = document.getElementById('contact-email').value;  

  if (email.length == 0){
    emailError.innerHTML = 'Email is required';
    return false;
  }
  if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[a-z]{2,4}$/)){
     emailError.innerHTML = 'enter valid email';
    //regex format match(/.../)
    return false;
  }

  emailError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateMessage(){
  var message = document.getElementById('contact-message').value;  
  var required = 30;
  var left = required - (message.length); 

  if(left >0){
    messageError.innerHTML = left + 'more charecter required';
    return false;
  }
  
  messageError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}

function validateForm(){
  if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage() ){
    submitError.style.display = 'block'
    submitError.innerHTML = 'Please fix error to submit';
  setTimeout(function(){ submitError.style.display = 'none'}, 3000)
    return false;
  }
}

//will add some feature
