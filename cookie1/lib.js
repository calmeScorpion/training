// // Cookie Functions

// var cookieFunctions = {
//   setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
//     let expires = 'expires=' + d.toUTCString();
//     document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
//   },

//   getCookie(cname) {
//     let name = cname + '=';
//     let ca = document.cookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//       let c = ca[i];
//       while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//       }
//       if (c.indexOf(name) == 0) {
//         return c.substring(name.length, c.length);
//       }
//     }
//     return '';
//   },

//   checkCookieExists(name) {
//     let user = this.getCookie(name);
//     if (user != '') {
//       return true;
//     }
//     return false;
//   },
// };

// // Other Functions

// var other = {
//   getUsers() {
//     var userCookie = cookieFunctions.getCookie('users');
//     return JSON.parse(userCookie);
//   },
//   initialize() {
//     var isCookieExists = cookieFunctions.checkCookieExists('users');
//     // If not exists
//     if (!isCookieExists) {
//       var users = [];
//       //   var user = this.getUserObject();
//       //   users.push(user);
//       cookieFunctions.setCookie('users', JSON.stringify(users), 8);
//     }
//     return this.getUsers();
//   },
//   getElement() {
//     const card = document.createElement('div');
//     card.classList.add('card');

//     var imageWrapper = document.createElement('div');
//     imageWrapper.classList.add('img_wrapper');

//     var image = document.createElement('img');
//     image.setAttribute('src', 'https://www.w3schools.com/howto/img_avatar.png');
//     image.setAttribute('alt', 'Avatar');

//     imageWrapper.appendChild(image);
//     card.appendChild(imageWrapper);
//     return card;
//   },
//   getUserObject() {
//     return {
//       name: 'Akarsh',
//       image: 'https://www.w3schools.com/howto/img_avatar.png',
//       occupation: 'John Doe',
//     };
//   },
//   adduser() {
//     var card_wrapper = document.querySelector('.card_wrapper');

//     card_wrapper.appendChild(this.getElement());
//     var users = this.getUsers();
//     users.push(this.getElement());
//     cookieFunctions.setCookie('users', JSON.stringify(users), 8);
//   },
//   loadUsers() {
//     var users = this.getUsers();
//     var card_wrapper = document.querySelector('.card_wrapper');
//     users.forEach(function (user) {
//       const card = document.createElement('div');
//       card.classList.add('card');

//       var imageWrapper = document.createElement('div');
//       imageWrapper.classList.add('img_wrapper');

//       var image = document.createElement('img');
//       image.setAttribute(
//         'src',
//         'https://www.w3schools.com/howto/img_avatar.png'
//       );
//       image.setAttribute('alt', 'Avatar');

//       imageWrapper.appendChild(image);
//       card.appendChild(imageWrapper);
//       card_wrapper.appendChild(card);
//     });
//   },
// };

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

var other = {
  getUsers() {
    var userCookies = cookieFunctions.getCookie('users');
    return JSON.parse(userCookies);
  },
  initialize() {
    var isCookieExists = cookieFunctions.checkCookieExists('users');
    // If not exists
    if (!isCookieExists) {
      var users = [];
      //   var user = this.getUserObject();
      //   users.push(user);
      cookieFunctions.setCookie('users', JSON.stringify(users), 8);
    }
    return this.getUsers();
  },
  getElement() {
    const card = document.createElement('div');
    card.classList.add('card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('img_wrapper');

    const image = document.createElement('img');
    image.setAttribute('src', 'https://www.w3schools.com/howto/img_avatar.png');

    imageContainer.appendChild(image);
    card.appendChild(imageContainer);
    return card;
  },
  getElementObject() {
    return {
      name: 'Bear',
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      family: 'mammal',
    };
  },
  adduser() {
    var card_wrapper = document.querySelector('.card_wrapper');
    card_wrapper.appendChild(this.getElement());
    var user = this.getUsers();
    user.push(this.getElementObject());
    cookieFunctions.setCookie('users', JSON.stringify(user), 8);
  },

  loadUsers() {
    var users = this.getUsers();
    var card_wrapper = document.querySelector('.card_wrapper');
    users.forEach(function (user) {
      const card = document.createElement('div');
      card.classList.add('card');

      const imageContainer = document.createElement('div');
      imageContainer.classList.add('img_wrapper');

      const image = document.createElement('img');
      image.setAttribute(
        'src',
        'https://www.w3schools.com/howto/img_avatar.png'
      );

      imageContainer.appendChild(image);
      card.appendChild(imageContainer);
      card_wrapper.appendChild(card);
    });
  },
};

//veena
function createCookie() {
  var empName = document.getElementById('ename');
  var empAge = document.getElementById('eage');
  var empImage = document.getElementById('eimage');
  var empDest = document.getElementById('edest');

  today = new Date();
  var expire = new Date();
  expire.setTime(today.getTime() + 3600000  24  15);

  let user = {
    empname: empName.value,
    empage: empAge.value,
    empimage: empImage.value,
    empdest: empDest.value,
  };
  let history = getCookie();
  let foundData = false;
  if (history) {
    for (let i = 0; i < history.length; i++) {
      let res = objectsAreSame(history[i], user);
      if (res) {
        foundData = true;
      }
    }
    if (foundData) {
      alert('data already exists');
    } else {
      let newHistory = [history, user];
      document.cookie =
        'user=' +
        JSON.stringify(newHistory) +
        ';path=/' +
        ';expires=' +
        expire.toUTCString();
    }
  } else {
    document.cookie =
      'user=' +
      JSON.stringify([user]) +
      ';path=/' +
      ';expires=' +
      expire.toUTCString();
  }
}

function getCookie() {
  let name = 'user';
  var result = document.cookie.match(new RegExp(name + '=([^;]+)'));
  result && (result = JSON.parse(result[1]));

  return result;
}
function objectsAreSame(x, y) {
  var objectsAreSame = true;
  for (var empName in x) {
    if (x[empName] !== y[empName]) {
      objectsAreSame = false;
      break;
    }
  }
  return objectsAreSame;
}
//sreelakshmi

var other = {
  //adding data to cookie
  addProduct() {
    var formfield = this.getProducts();
    formfield.push(this.getElementObject());
    cookieFunctions.setCookie('formfield', JSON.stringify(formfield), 8);
  },
  getElementObject() {
    console.log(other.getProducts);
    return {
      name: username.value,
      age: age.value,
      image: image.value,
      destination: destination.value,
    };
  },
  getProducts() {
    var productCookies = cookieFunctions.getCookie('formfield');
    return JSON.parse(productCookies);
  },
  //initial cookie creation
  initialize() {
    var isCookieExists = cookieFunctions.checkCookieExists('formfield');
    if (!isCookieExists) {
      var formfield = [];
      cookieFunctions.setCookie('formfield', JSON.stringify(formfield), 8);
    }
    return this.getProducts();
  },
};