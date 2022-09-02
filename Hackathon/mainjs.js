var cart = [];
function setCookie(name, value, exp_days) {
  var d = new Date();
  d.setTime(d.getTime() + exp_days * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toGMTString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}
var itemName;
var price;
let obj = { itemName: 'electronic', price: 50 };
// var obj = {};
obj.additem = function (itemName, price) {};
//set object
obj = {
  itemName: 'electronics',
  price: '50',
};
var items = JSON.parse(getCookie(itemName));
// get current items from cookie
function getCookie(itemName) {
  let name = itemName + '=';
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
}
// addd new item
items.push(obj);
// set cookie
setCookie('', JSON.stringify(items));
