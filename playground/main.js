var myForm = document.querySelector('#signup');
var userNameField = document.querySelector('[name="username"]');

myForm.addEventListener('submit', function (e) {
  var isFormValid = false;
  var isUserNameValid = false;
  var showUsernameRequiredError = true;
  var showAgeRequiredError = true;
  var isAgeValid = false;

  e.preventDefault();

  // Handle username validation
  var userNameFieldValue = userNameField.value.trim();
  if (userNameFieldValue.length === 0) {
  } else {
    isUserNameValid = true;
    showUsernameRequiredError = false;
  }
  isFormValid = isUserNameValid;
  if (isFormValid) {
    console.log('Form is valid');
  } else {
    console.log('Form is invalid');
  }
  if (isUserNameValid) {
    var smallEl = userNameField.parentElement.querySelector('small');
    smallEl.textContent = '';

    userNameField.parentElement.classList.add('success');
    userNameField.parentElement.classList.remove('error');
  } else {
    if (showUsernameRequiredError) {
      var smallEl = userNameField.parentElement.querySelector('small');
      userNameField.parentElement.classList.add('error');
      userNameField.parentElement.classList.remove('success');

      smallEl.textContent = 'Username is required.';
    }
  }

  //for the age
  var ageFieldValue = ageField.value.trim();
  if (ageFieldValue.length === 0) {
  } else {
    isAgeValid = true;
    showAgeRequiredError = false;
  }
  isFormValid = isAgeValid;
  if (isFormValid) {
    console.log('Form is valid');
  } else {
    console.log('Form is invalid');
  }
  if (isAgeValid) {
    var smallEl = ageField.parentElement.querySelector('small');
    smallEl.textContent = '';

    ageField.parentElement.classList.add('success');
    ageField.parentElement.classList.remove('error');
  } else {
    if (showAgeRequiredError) {
      var smallEl = ageField.parentElement.querySelector('small');
      ageField.parentElement.classList.add('error');
      ageField.parentElement.classList.remove('success');

      smallEl.textContent = 'Username is required.';
    }
  }
});
function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}
