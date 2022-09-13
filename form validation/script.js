const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  checkInputs();
});
const emailFormat =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
function checkInputs() {
  // get the values of the input
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const confirmpasswordValue = confirmpassword.value.trim();

  if (usernameValue === '') {
    //show error
    //add error class
    setErrorFor(username, 'username cannot be blank');
  } else if (!isNaN(usernameValue)) {
    setErrorFor(username, 'Please enter only characters');
  } else if (usernameValue.length < 5 || usernameValue.length > 20) {
    setErrorFor(username, 'Your Character must be 5 to 20 Character');
  } else {
    //add success class
    setSuccessFor(username);
  }
  if (emailValue === '') {
    //show error
    //add error class
    setErrorFor(email, 'email cannot be blank');
  } else if (!emailFormat.test(emailValue)) {
    setErrorFor(email, 'email is not valid');
  } else {
    //add success class
    setSuccessFor(email);
  }
  if (passwordValue === '') {
    //show error
    //add error class
    setErrorFor(password, 'password cannot be blank');
  } else if (passwordValue.length > 8) {
    setErrorFor(password, 'password must be less than 8 character');
  } else {
    //add success class
    setSuccessFor(password);
  }
  if (confirmpasswordValue === '') {
    //show error
    //add error class
    setErrorFor(confirmpassword, 'confirmpassword cannot be blank');
  } else if (passwordValue != confirmpasswordValue) {
    setErrorFor(confirmpassword, 'password cannot match');
  } else {
    //add success class
    setSuccessFor(confirmpassword);
  }
}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  // add error message to small
  small.innerText = message;
  //add error message
  formControl.className = 'form-control error';
}
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
// function isEmail(email) {
//   return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9]+.[a-zA-Z0-9]*$/.test(
//     email
//   );
// }

// /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
