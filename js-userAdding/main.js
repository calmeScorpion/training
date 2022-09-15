var myForm = document.querySelector('#form');
var nameInput = document.getElementById('nameInput');
var Addmodal = document.getElementById('modal-addUser');
var deleteModal = document.querySelector('.modal-deleteUser');
var addBtn = document.querySelector('.add-user');
let i = 0;

document.addEventListener('DOMContentLoaded', function (event) {
  loadUsers();
});


// EVENT LISTENER
myForm.addEventListener('submit', function (e) {
  e.preventDefault();
  //  check the input is valid or not
  if (checkInputs()) {
    var nameValue = nameInput.value.trim();
    adduser(nameValue);
  }
});


// FUNCTION FOR ADD USER NAME
var adduser = (nameValue) => {
  //  get all the cookie for checking whether cookie is present or not
  var currentnameCookie = cookieFunctions.getCookie('name');
  if (currentnameCookie.length) {
    //  if already cookie is exist, then append the current name to it
    var currentnames = JSON.parse(currentnameCookie);
    currentnames.push(nameValue);
    cookieFunctions.setCookie('name', JSON.stringify(currentnames), 2);
    location.reload();
  } else {
    // if  cookie is not existed, then set new cookie
    cookieFunctions.setCookie('name', JSON.stringify([nameValue]), 2);
    location.reload();
  }
};


// DISPLAY THE USER DETAILS WHEN PAGE IS LOADED
var loadUsers = () => {
  var i = 1;
  var cookieNames = JSON.parse(cookieFunctions.getCookie('name')); // get all the cookies
  cookieNames.forEach(function (user) {
    // loop each value to display

    var tdNo = document.createElement('td'); //  create a <td> for SLNO
    tdNo.innerText = i;

    var tdName = document.createElement('td'); //  create a <td> for NAME
    tdName.innerText = user;

    var tdAction = document.createElement('td'); //  create a <td> for Delete image
    var del = document.createElement('img');
    del.setAttribute('src', 'delete.png'); // set the image
    del.setAttribute('name', user); // set a name attribute of img as corresponding name value

    del.addEventListener('click', function () {
      deleteUserModal(user); //  create  a listener for display the delete modal
    });

    tdAction.appendChild(del);
    var tr = document.createElement('tr'); //  create table row

    tr.appendChild(tdNo); // append all the <td> to the <tr>
    tr.appendChild(tdName);
    tr.appendChild(tdAction);

    tbody = document.querySelector('#tbody');
    tbody.appendChild(tr);
    ++i;
  });
};


// FUNCTION FOR VALIDATE INPUT FIELD
var checkInputs = () => {
  var nameValue = nameInput.value.trim();
  if (nameValue === '') {
    document.getElementById('nameError').innerText = 'Name cannot be blank!';
    return false;
  }
  else{
    return true;
  }
};


// DISPLAY ADD USER MODAL
var addUserModal = () => {
  Addmodal.style.display = 'block';
};
// REMOVE ADD USER MODAL
var clearUserModal = () => {
  Addmodal.style.display = 'none';
};
// DISPLAY DELETE USER MODAL
var deleteUserModal = (el) => {
  deleteModal.style.display = 'block';
  var delBtn = document.querySelector('#delete-btn');
  delBtn.setAttribute('name', el);
};
// REMOVE DELETE USER MODAL
var clearDeleteModa = () => {
  deleteModal.style.display = 'none';
};


// FUNCTION FOR DELETE NAME
var deleteCookie = () => {
  var delBtn = document.querySelector('#delete-btn');
  var delValue = delBtn.getAttribute('name'); // get the corresponding name
  let cookieArray = JSON.parse(cookieFunctions.getCookie('name')); // get all the cookies
  let cookieName = cookieArray.filter((user) => user !== delValue); // filter the name from the cookie
  cookieFunctions.setCookie('name', JSON.stringify(cookieName), 2); // set the cookie after filter
  location.reload(); // reload the page
};


//  COOKIE FUNCTIONS
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
      console.log(c);
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
