var products = {
  1: {
    name: 'Realme C21Y (Cross Blue, 64 GB)  (4 GB RAM)',
    price: 20,
    img: './imgs/realme.webp',
    type: 'phone',
  },
  2: {
    name: ' OPPO F3 Plus (Gold, 64 GB)  (4 GB RAM)',
    price: 40,
    img: './imgs/oppo.webp',
    type: 'phone',
  },
  3: {
    name: 'APPLE iPhone 11 (White, 128 GB)',
    price: 15,
    img: './imgs/apple_iphone.webp',
    type: 'phone',
  },
  4: {
    name: '  Acer Aspire 7 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 10 Home/4)',
    price: 50,
    img: './imgs/acer_laptop.webp',
    type: 'laptop',
  },
};

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
