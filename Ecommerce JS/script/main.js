var products = {
  1: {
    img: 'https://5.imimg.com/data5/CG/TF/BU/SELLER-39606768/rose-gold-32-gb-apple-iphone-7-500x500.jpg',
    name: 'APPLE iPhone 7',
    price: 19,
    category: 'Phone',
  },
  2: {
    img: 'https://m.media-amazon.com/images/I/71PvHfU+pwL._SL1500_.jpg',
    name: 'SAMSUNG Galaxy S22 Ultra 5G ',
    price: 30,
    category: 'Phone',
  },
  3: {
    img: 'https://www.lenovo.com/medias/Features-1.png?context=bWFzdGVyfHJvb3R8NjIwMDk1fGltYWdlL3BuZ3xoY2QvaDk1LzEwMDEzNTQ4NTExMjYyLnBuZ3wxYzRlNTExOTFhNmExMWFlZDczZWE0OWM1NWZlMGU1YmM2ZTI1Mzk3N2VlZmVhMGRmMzcwNTk3MGY5NTZhNDZi',
    name: 'Lenovo K9 ',
    price: 50,
    category: 'Phone',
  },
  4: {
    img: 'https://m.media-amazon.com/images/I/916GGqnsG+L._SL1500_.jpg',
    name: 'Canon EOS 3000D DSLR ',
    price: 25,
    category: 'Camera',
  },
  5: {
    img: 'https://rukminim1.flixcart.com/image/312/312/kihqz680/dslr-camera/g/z/t/alpha-7siii-ilce-7sm3-bq-in5-sony-original-imafya2qhvjjmruh.jpeg?q=70',
    name: 'SONY ILCE-6100Y/B IN5 Mirrorless Camera',
    price: 35,
    category: 'Camera',
  },
  6: {
    img: 'https://m.media-amazon.com/images/I/71kEAoY7oOL._AC_SS450_.jpg',
    name: 'FUJIFILM X Series X-E4 Mirrorless Camera ',
    price: 55,
    category: 'Camera',
  },
  7: {
    img: 'https://m.media-amazon.com/images/I/81-SDed0wzL._SL1500_.jpg',
    name: 'ASUS VivoBook K15 OLED ',
    price: 15,
    category: 'Laptop',
  },
  8: {
    img: 'https://m.media-amazon.com/images/I/71hmqIQJFdL._SL1200_.jpg',
    name: 'HP Core i5 12th Gen',
    price: 23,
    category: 'Laptop',
  },
  9: {
    img: 'https://www.myg.in/images/detailed/28/82KU017KIN-1.jpg',
    name: 'Lenovo IdeaPad 3 Ryzen 5 Hexa Core 5500U',
    price: 60,
    category: 'Laptop',
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
