var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var phoneError = document.getElementById('phone-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName(){
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
      nameError.innerHTML = "Name is required";
      return false;
  }
  if(!name.match(/^([a-zA-Z ]){2,30}$/)){
      nameError.innerHTML = "Use only Aplhabets";
      return false;
  }
      nameError.innerHTML = '<i class="bi bi-check-circle-fill"></i>'
      return true
  
}


function validateEmail(){
  var email = document.getElementById('contact-email').value;
  if(email.length == 0){
    emailError.innerHTML = 'email is required'
    return false;
  }
  if (!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
    emailError.innerHTML = 'Email is invalid';
    return false;
  }
  emailError.innerHTML ='<i class="bi bi-check-circle-fill"></i>';
  return true;
}

function validatePhone(){
  var phone = document.getElementById('contact-phone').value;


  if(phone.length == 0){
    phoneError.innerHTML = 'phone number required'
    return false;
  }

  if(phone.length !== 10){
    phoneError.innerHTML = 'phone number should be 10 digits'
    return false;
  }
 
  if(!phone.match(/^[0-9]{10}$/)){
    phoneError.innerHTML = 'phone number required '
    return false;
  }
  phoneError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;

}

function validateMessage(){
  var message = document.getElementById('contact-message').value;
  var required = 30;
  var left = required - message.length;

  if(left > 0){
    messageError.innerHTML = left + 'more characters required'
    return false;
  }

  messageError.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
  return true;

}

