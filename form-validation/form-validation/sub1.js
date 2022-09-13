var myForm = document.querySelector('#signup');
var userNameField = document.querySelector('#username');
var textarea = document.querySelector('.textarea');
var select = document.getElementById('select');
var radiobutton = document.querySelector('input[name="gender"]');
var dateInput = document.getElementById('dateInput');

myForm.addEventListener('submit', function (e) {
  var isFormValid = false;
  var isUserNameValid = false;
  var showUsernameRequiredError = true;

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

  //address validation

  var istextareavalid = false;
  var textRequiredError = true;

  var usertextarea = textarea.value.trim();

  if (usertextarea.length === 0) {
  } else {
    istextareavalid = true;
    textRequiredError = false;
  }

  isFormValid = istextareavalid;
  if (istextareavalid) {
    var smallEl = textarea.parentElement.querySelector('small');
    smallEl.textContent = '';

    textarea.parentElement.classList.add('success');
    textarea.parentElement.classList.remove('error');
  } else {
    if (textRequiredError) {
      var smallEl = textarea.parentElement.querySelector('small');
      textarea.parentElement.classList.add('error');
      textarea.parentElement.classList.remove('success');

      smallEl.textContent = 'address is required';
    }
  }

  //branch validation

  var isUserbranch = false;
  var showUserbranchRequiredError = true;

  if (select.value === '') {
    // value is set to a valid option, so submit form
    isUserbranch = false;
  } else {
    isUserbranch = true;
  }

  isFormValid = isUserbranch;
  if (isUserbranch) {
    var smallEl = select.parentElement.querySelector('small');
    smallEl.textContent = '';

    select.parentElement.classList.add('success');
    select.parentElement.classList.remove('error');
  } else {
    if (showUserbranchRequiredError) {
      var smallEl = select.parentElement.querySelector('small');
      select.parentElement.classList.add('error');
      select.parentElement.classList.remove('success');

      smallEl.textContent = 'branch is required';
    }
  }

  //gender validation

  var isgender = false;
  var showUsergenderRequiredError = true;

  if (radiobutton.checked === false) {
    isgender = false;
  } else {
    isgender = true;
  }

  isFormValid = isgender;
  if (isgender) {
    var smallEl = radiobtn.parentElement.querySelector('small');
    smallEl.textContent = '';

    radiobtn.parentElement.classList.add('success');
    radiobtn.parentElement.classList.remove('error');
  } else {
    if (showUsergenderRequiredError) {
      var smallEl = radiobtn.parentElement.querySelector('small');
      radiobtn.parentElement.classList.add('error');
      radiobtn.parentElement.classList.remove('success');
      smallEl.textContent = 'gender is required';
    }
  }

  //date validation
  var dateofbirth = false;
  var showUserdateRequiredError = true;

  var dateValue = dateInput.value;
  console.log(dateValue);

  if (dateValue === '') {
    dateofbirth = false;
  } else {
    dateofbirth = true;
  }

  isFormValid = dateofbirth;
  if (dateofbirth) {
    var smallEl = dateInput.parentElement.querySelector('small');
    smallEl.textContent = '';

    dateInput.parentElement.classList.add('success');
    dateInput.parentElement.classList.remove('error');
  } else {
    if (showUsergenderRequiredError) {
      var smallEl = dateInput.parentElement.querySelector('small');
      dateInput.parentElement.classList.add('error');
      dateInput.parentElement.classList.remove('success');
      smallEl.textContent = 'date is required';
    }
  }

  //checkbox validation

  const hiddenInput = document.querySelector('#chkpan');
  console.log(hiddenInput.checked);
  if (hiddenInput.checked === false) {
    checkbox = false;
  } else {
    checkbox = true;
    enabledisabletextbox();
  }
  if (checkbox) {
    var smallEl = hiddenInput.parentElement.querySelector('small');
    smallEl.textContent = '';

    hiddenInput.parentElement.classList.add('success');
    hiddenInput.parentElement.classList.remove('error');
  } else {
    var smallEl = hiddenInput.parentElement.querySelector('small');
    hiddenInput.parentElement.classList.add('error');
    hiddenInput.parentElement.classList.remove('success');
    smallEl.textContent = 'This field cannot be blank';
  }

  function enabledisabletextbox() {
    var txtpannumber = document.getElementById('txtpannumber');
    txtpannumber.disabled = false;
    txtpannumber.visibility = false;
  }
});
