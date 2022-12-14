// Modal
var modal = document.querySelector('.modal');
var add_user_button = document.querySelector('#add_but');
var modal_close_button = document.querySelector('.close');
var submit_button = document.querySelector('#sub_but');

add_user_button.addEventListener('click', function openModal() {
  modal.style.display = 'block';
});
modal_close_button.addEventListener('click', function closeModal() {
  modal.style.display = 'none';
});
window.addEventListener('click', function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

var username = document.getElementById('name');
var age = document.getElementById('age');
var image = document.getElementById('image');
var designation = document.getElementById('designation');
var myform = document.getElementById('myform');
document.addEventListener('DOMContentLoaded', function (event) {
  myform.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
    user.addUser();
  });
  var userrr = user.initialize();
  console.log('user', userrr);
});

// Form validation
function checkInputs() {
  var usernameValue = username.value.trim();
  var ageValue = age.value.trim();
  var designationValue = designation.value.trim();
  if (usernameValue === '') {
    setErrorFor(username, 'It cannot be blank');
  } else if (!isNaN(usernameValue)) {
    setErrorFor(username, 'It cannot be a number');
  } else if (usernameValue.length < 3 || usernameValue.length > 15) {
    setErrorFor(
      username,
      'Name should be more than 3 and less than 15 letters'
    );
  } else {
    setSuccessFor(username);
  }
  if (isNaN(ageValue)) {
    setErrorFor(age, 'It should be a number');
  } else if (ageValue === '') {
    setErrorFor(age, 'It cannot be blank');
  } else {
    setSuccessFor(age);
  }
  if (image === '') {
    setErrorFor(image, 'It cannot be empty');
  } else {
    setSuccessFor(image);
  }
  if (designationValue === '') {
    setErrorFor(designation, 'It cannot be empty');
  } else if (!isNaN(designationValue)) {
    setErrorFor(designation, 'it cannot be a number');
  } else {
    setSuccessFor(designation);
  }
}

function setErrorFor(input, message) {
  var formControl = input.parentElement;
  var small = formControl.querySelector('small');
  small.innerText = message;
  formControl.className = 'form-control error';
}

function setSuccessFor(input) {
  var formControl = input.parentElement;
  formControl.className = 'form-control success';
  var small = formControl.querySelector('small');
  small.innerText = '';
}

// cookie

var cookieFunctions = {
  setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  },

  getCookie(cname) {
    let name = cname + '=';
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  },

  checkCookieExists(name) {
    let user = this.getCookie(name);
    if (user != '') {
      return true;
    }
    return false;
  },
};

var user = {
  addUser() {
    var formfield = this.getUsers();
    formfield.push(this.getElementObject());
    cookieFunctions.setCookie('formfield', JSON.stringify(formfield), 8);
  },
  getUsers() {
    var userCookies = cookieFunctions.getCookie('formfield');
    return JSON.parse(userCookies);
  },
  getElementObject() {
    console.log(user.getUsers);
    return {
      name: username.value,
      age: age.value,
      image: image.value,
      designation: designation.value,
    };
  },
  initialize() {
    var isCookieExists = cookieFunctions.checkCookieExists('formfield');
    if (!isCookieExists) {
      var formfield = [];
      console.log('cookie_working');
      cookieFunctions.setCookie('formfield', JSON.stringify(formfield), 8);
    }
    return this.getUsers();
  },
};

window.onload = () => {
  var display_feilds = document.getElementById('tdata');
  let edata = JSON.parse(cookieFunctions.getCookie('formfield'));

  let data = '';

  if (edata.length > 0) {
    edata.forEach((element) => {
      console.log(element);
      data += `<tr><td>${element.name}</td> <td>${element.age}</td> <td><img src="${element.image}" width="20px" height="20px"></td> <td>${element.designation}</td><td><button id="edit_btn" onclick="edit('${element.name}')">Edit</button>
      </td></tr>`;
      console.log(data);
    });
    display_feilds.innerHTML = data;
  }
};

function edit(editValue) {
  var modal = document.querySelector('.modal');
  modal.style.display = 'block';
  document.querySelector('.button').style.visibility = 'hidden';
  var ecookie = JSON.parse(cookieFunctions.getCookie('formfield'));

  var dfilter = ecookie.filter((data) => data.name == editValue);
  console.log(dfilter);

  document.getElementById('name').value = dfilter[0].name;
  document.getElementById('age').value = dfilter[0].age;
  document.getElementById('image').value = dfilter[0].image;
  document.getElementById('designation').value = dfilter[0].designation;

  document.getElementById('name').readOnly = 'true';

  var emodal = document.querySelector('.modal');
  document.getElementById('heading').innerHTML = 'Update Details';
  var ubtn = document.createElement('BUTTON');
  ubtn.innerHTML = 'Update';
  var ebtn = emodal.appendChild(ubtn);

  ebtn.addEventListener('submit', function () {
    e.preventDefault();
    user.updateData();
    if (checkInputs()) {
      updateData();
    }
  });
}

function updateData() {
  var newdata = JSON.parse(cookieFunctions.getCookie('formfield'));
  var newName = document.getElementById('name').value;
  var newAge = document.getElementById('age').value;
  var newImage = document.getElementById('image').value;
  var newDesignation = document.getElementById('designation').value;

  let user = {
    name: newName,
    age: newAge,
    image: newImage,
    designation: newDesignation,
  };
  let index = newdata.findIndex((data) => data.empname == newName);
  newdata.splice(index, 1, user);
  console.log('the updated data:- ', newdata);
  document.cookie =
    'user=' +
    JSON.stringify(newdata) +
    ';path=/' +
    ';expires=' +
    expire.toUTCString();

  window.location.reload();
}
