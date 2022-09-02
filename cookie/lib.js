// Cookie Functions

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

// Other Functions

var other = {
  getUsers() {
    var userCookie = cookieFunctions.getCookie('users');
    return JSON.parse(userCookie);
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

    var imageWrapper = document.createElement('div');
    imageWrapper.classList.add('img_wrapper');

    var image = document.createElement('img');
    image.setAttribute('src', 'https://www.w3schools.com/howto/img_avatar.png');
    image.setAttribute('alt', 'Avatar');

    imageWrapper.appendChild(image);
    card.appendChild(imageWrapper);
    return card;
  },
  getUserObject() {
    return {
      name: 'Akarsh',
      image: 'https://www.w3schools.com/howto/img_avatar.png',
      occupation: 'John Doe',
    };
  },
  adduser() {
    var card_wrapper = document.querySelector('.card_wrapper');

    card_wrapper.appendChild(this.getElement());
    var users = this.getUsers();
    users.push(this.getUserObject());
    cookieFunctions.setCookie('users', JSON.stringify(users), 8);
  },
  loadUsers() {
    var users = this.getUsers();
    var card_wrapper = document.querySelector('.card_wrapper');
    users.forEach(function (user) {
      const card = document.createElement('div');
      card.classList.add('card');

      var imageWrapper = document.createElement('div');
      imageWrapper.classList.add('img_wrapper');

      var image = document.createElement('img');
      image.setAttribute(
        'src',
        'https://www.w3schools.com/howto/img_avatar.png'
      );
      image.setAttribute('alt', 'Avatar');

      imageWrapper.appendChild(image);
      card.appendChild(imageWrapper);
      card_wrapper.appendChild(card);
    });
  },
};
