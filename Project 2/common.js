var elec = {
  data: [
    {
      name: 'Realme C21Y (Cross Blue, 64 GB)  (4 GB RAM)',
      price: '₹7999',
      img: './imgs/realme.webp',
      type: 'phone',
    },
    {
      name: ' OPPO F3 Plus (Gold, 64 GB)  (4 GB RAM)',
      price: '₹18,999',
      img: './imgs/oppo.webp',
      type: 'phone',
    },
    {
      name: 'APPLE iPhone 11 (White, 128 GB)',
      price: '₹25,999',
      img: './imgs/apple_iphone.webp',
      type: 'phone',
    },
    {
      name: '  Acer Aspire 7 Ryzen 5 Hexa Core 5500U - (8 GB/512 GB SSD/Windows 10 Home/4)',
      price: '₹7999',
      img: './imgs/acer_laptop.webp',
      type: 'laptop',
    },
    {
      name: 'ASUS Ryzen 3 Dual Core 3250U 3rd Gen - (8 GB/256 GB SSD/Windows 10 Home) ',
      price: ' ₹18,999',
      img: './imgs/asuslaptop.webp',
      type: 'laptop',
    },
    {
      name: 'hp IdeaPad 3 Core i3 11th Gen - (8 GB/512 GB SSD/Windows 11 Home) 82H801L7I',
      price: '₹25,999',
      img: './imgs/hplaptop.webp',
      type: 'laptop',
    },
    {
      name: 'Haier E-series 165 cm (65 inch) Ultra HD (4K) LED Smart Android TV',
      price: '₹7999',
      img: './imgs/haier.webp',
      type: 'tv',
    },
    {
      name: ' LG 164 cm (65 inch) Ultra HD (4K) LED Smart WebOS TV (65UK6360PTE)',
      price: '₹18,999',
      img: './imgs/lg.webp',
      type: 'tv',
    },
    {
      name: ' MOTOROLA Revou 164 cm 65 inch Ultra HD 4K LED Smart Android TV with Dolby atmos ',
      price: '₹25,999',
      img: './imgs/motarola.webp',
      type: 'tv',
    },
  ],
};

for (let i of product.data) {
  let card = document.createElement('div');
  card.classList.add('card', 'i.type');
  let imageContainer = document.createElement('div');
  imageContainer.classList.add('image-container');
  let image = document.createElement('img');
  image.setAttribute('src', i.image);
}

//cookie functions
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
