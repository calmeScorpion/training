// ************************************************
// Shopping Cart API
// ************************************************

var shoppingCart = (function () {
  // =============================
  // Private methods and propeties
  // =============================

  // Constructor
  class Item {
    constructor(name, price, count) {
      this.name = name;
      this.price = price;
      this.count = count;
    }
  }
var cart=[];
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
    setCookie("item1",)
  }

  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem('shoppingCart') != null) {
    loadCart();
  }

  var obj = {};

  // Add to cart
  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  };
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  };

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  };

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  };

  // Count cart
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  };

  // Total cart
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
    }
    return Number(totalCart.toFixed(2));
  };

  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];
      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy);
    }
    return cartCopy;
  };

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();

// *****************************************
// Triggers / Events
// *****************************************
// Add item
// $('.add-to-cart').click(function (event) {
//   event.preventDefault();
//   var name = $(this).data('name');
//   var price = Number($(this).data('price'));
//   shoppingCart.addItemToCart(name, price, 1);
//   displayCart();
// });

// // Clear items
// $('.clear-cart').click(function () {
//   shoppingCart.clearCart();
//   displayCart();
// });

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = '';
  for (var i in cartArray) {
    output +=
      '<tr>' +
      '<td>' +
      cartArray[i].name +
      '</td>' +
      '<td>(' +
      cartArray[i].price +
      ')</td>' +
      "<td><div class='input-group'><button class='minus-item input-group-addon btn btn-primary' data-name=" +
      cartArray[i].name +
      '>-</button>' +
      "<input type='number' class='item-count form-control' data-name='" +
      cartArray[i].name +
      "' value='" +
      cartArray[i].count +
      "'>" +
      "<button class='plus-item btn btn-primary input-group-addon' data-name=" +
      cartArray[i].name +
      '>+</button></div></td>' +
      "<td><button class='delete-item btn btn-danger' data-name=" +
      cartArray[i].name +
      '>X</button></td>' +
      ' = ' +
      '<td>' +
      cartArray[i].total +
      '</td>' +
      '</tr>';
  }
  $('.show-cart').html(output);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
}

// Delete item button

$('.show-cart').on('click', '.delete-item', function (event) {
  var name = $(this).data('name');
  shoppingCart.removeItemFromCartAll(name);
  displayCart();
});

// -1
$('.show-cart').on('click', '.minus-item', function (event) {
  var name = $(this).data('name');
  shoppingCart.removeItemFromCart(name);
  displayCart();
});
// +1
$('.show-cart').on('click', '.plus-item', function (event) {
  var name = $(this).data('name');
  shoppingCart.addItemToCart(name);
  displayCart();
});

// Item count input
$('.show-cart').on('change', '.item-count', function (event) {
  var name = $(this).data('name');
  var count = Number($(this).val());
  shoppingCart.setCountForItem(name, count);
  displayCart();
});

displayCart();


//cookie
function setCookie(item, value, exp_days) {
  var d = new Date();
  d.setTime(d.getTime() + exp_days * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toGMTString();
  document.cookie = item + '=' + value + ';' + expires + ';path=/';
}
document.addEventListener('DOMContentLoaded', function (item) {
  console.log('item added');

  var userBtn = document.querySelector('.add-user-btn');

  userBtn.addEventListener('click', function () {
    console.log('btn clicked');
    other.additem();
  });

  //Initialize items
  var item = other.initialize();
  console.log('users', item);

  other.loaditem();
});
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
