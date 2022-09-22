//price filtering functions
function filterprice1() {
  var filter_price1 = Object.values(products).filter(
    (data) => data.price <= 20
  );
  return filter_price1;
  // console.log(filter_price1);
}

function filterprice2() {
  var filter_price2 = Object.values(products).filter(
    (data) => data.price <= 40 && data.price > 20
  );
  return filter_price2;
  // console.log(filter_price2);
}

function filterprice3() {
  var filter_price3 = Object.values(products).filter(
    (data) => data.price >= 40
  );
  return filter_price3;
  // console.log(filter_price3);
}

//display price filtering products
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('page is fully loaded');

  var price1 = document.getElementById('0to20');

  price1.addEventListener('change', function (e) {
    e.preventDefault();
    console.log('btn clicked');

    other1.addPrice();
    other1.loadproduct_price();
  });

  //   console.log('product', product);
});

var other1 = {
  addPrice() {
    cookieFunctions.setCookie('price1', JSON.stringify(filterprice1()), 8);
  },

  loadproduct_price() {
    var container = document.querySelector('.filter_container');
    var price = JSON.parse(cookieFunctions.getCookie('price1'));

    price.forEach(function (a) {
      var image = a.img;
      console.log(image);
      var name = a.name;
      console.log(name);
      var price = a.price;
      console.log(price);
      var category = a.category;
      console.log(category);
      var imageWrapper = document.createElement('div');
      imageWrapper.classList.add('image_wrapper');

      var image = document.createElement('img');
      image.setAttribute('src', a.img);

      var name = document.createElement('h1');
      name.classList.add('product_name');
      name.innerHTML = a.name;

      var price = document.createElement('h1');
      price.classList.add('product_price');
      price.innerHTML = 'Price:' + ' ' + '$' + a.price;

      var category = document.createElement('h1');
      category.classList.add('product_category');
      category.innerHTML = 'Category:' + ' ' + a.category;

      // whole product containing div
      var productdetail = document.createElement('div');
      productdetail.classList.add('product_detail');

      imageWrapper.appendChild(image);
      productdetail.appendChild(imageWrapper);
      productdetail.appendChild(name);
      productdetail.appendChild(price);
      productdetail.appendChild(category);
      container.appendChild(productdetail);
    });
  },
};

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('page is fully loaded');

  var price2 = document.getElementById('20to40');

  price2.addEventListener('change', function (e) {
    e.preventDefault();
    console.log('btn clicked');

    other2.addPrice();
    other2.loadproduct_price();
  });

  //   console.log('product', product);
});

var other2 = {
  addPrice() {
    cookieFunctions.setCookie('price2', JSON.stringify(filterprice2()), 8);
  },
  loadproduct_price() {
    var container = document.querySelector('.filter_container');
    var price = JSON.parse(cookieFunctions.getCookie('price2'));

    price.forEach(function (a) {
      var image = a.img;
      console.log(image);
      var name = a.name;
      console.log(name);
      var price = a.price;
      console.log(price);
      var category = a.category;
      console.log(category);
      var imageWrapper = document.createElement('div');
      imageWrapper.classList.add('image_wrapper');

      var image = document.createElement('img');
      image.setAttribute('src', a.img);

      var name = document.createElement('h1');
      name.classList.add('product_name');
      name.innerHTML = a.name;

      var price = document.createElement('h1');
      price.classList.add('product_price');
      price.innerHTML = 'Price:' + ' ' + '$' + a.price;

      var category = document.createElement('h1');
      category.classList.add('product_category');
      category.innerHTML = 'Category:' + ' ' + a.category;

      // whole product containing div
      var productdetail = document.createElement('div');
      productdetail.classList.add('product_detail');

      imageWrapper.appendChild(image);
      productdetail.appendChild(imageWrapper);
      productdetail.appendChild(name);
      productdetail.appendChild(price);
      productdetail.appendChild(category);
      container.appendChild(productdetail);
    });
  },
};
document.addEventListener('DOMContentLoaded', function (event) {
  console.log('page is fully loaded');

  var price3 = document.getElementById('40above');

  price3.addEventListener('change', function (e) {
    e.preventDefault();
    console.log('btn clicked');

    other3.addPrice();
    other3.loadproduct_price();
  });

  //   console.log('product', product);
});

var other3 = {
  addPrice() {
    cookieFunctions.setCookie('price3', JSON.stringify(filterprice3()), 8);
  },
  loadproduct_price() {
    var container = document.querySelector('.filter_container');
    var price = JSON.parse(cookieFunctions.getCookie('price3'));

    price.forEach(function (a) {
      var image = a.img;
      console.log(image);
      var name = a.name;
      console.log(name);
      var price = a.price;
      console.log(price);
      var category = a.category;
      console.log(category);
      var imageWrapper = document.createElement('div');
      imageWrapper.classList.add('image_wrapper');

      var image = document.createElement('img');
      image.setAttribute('src', a.img);

      var name = document.createElement('h1');
      name.classList.add('product_name');
      name.innerHTML = a.name;

      var price = document.createElement('h1');
      price.classList.add('product_price');
      price.innerHTML = 'Price:' + ' ' + '$' + a.price;

      var category = document.createElement('h1');
      category.classList.add('product_category');
      category.innerHTML = 'Category:' + ' ' + a.category;

      // whole product containing div
      var productdetail = document.createElement('div');
      productdetail.classList.add('product_detail');

      imageWrapper.appendChild(image);
      productdetail.appendChild(imageWrapper);
      productdetail.appendChild(name);
      productdetail.appendChild(price);
      productdetail.appendChild(category);
      container.appendChild(productdetail);
    });
  },
};
//category filtering functions
function filtercategory1() {
  var filter_category1 = Object.values(products).filter(
    (data) => data.category == 'Phone'
  );
  return filter_category1;
}
function filtercategory2() {
  var filter_category2 = Object.values(products).filter(
    (data) => data.category == 'Camera'
  );
  return filter_category2;
}
function filtercategory3() {
  var filter_category2 = Object.values(products).filter(
    (data) => data.category == 'Laptop'
  );
  return filter_category2;
}
//display category display products
document.addEventListener('DOMContentLoaded', function (event) {
  var category1 = document.getElementById('Mobile');

  category1.addEventListener('change', function (e) {
    e.preventDefault();

    other11.addcategory();
    other11.loadproduct_category();
  });

  //   console.log('product', product);
});
var other11 = {
  addcategory() {
    cookieFunctions.setCookie(
      'category1',
      JSON.stringify(filtercategory1()),
      8
    );
  },
  loadproduct_category() {
    var container = document.querySelector('.filter_container');
    var category = JSON.parse(cookieFunctions.getCookie('category1'));

    category.forEach(function (a) {
      var image = a.img;
      console.log(image);
      var name = a.name;
      console.log(name);
      var price = a.price;
      console.log(price);
      var category = a.category;
      console.log(category);
      var imageWrapper = document.createElement('div');
      imageWrapper.classList.add('image_wrapper');

      var image = document.createElement('img');
      image.setAttribute('src', a.img);

      var name = document.createElement('h1');
      name.classList.add('product_name');
      name.innerHTML = a.name;

      var price = document.createElement('h1');
      price.classList.add('product_price');
      price.innerHTML = 'Price:' + ' ' + '$' + a.price;

      var category = document.createElement('h1');
      category.classList.add('product_category');
      category.innerHTML = 'Category:' + ' ' + a.category;

      // whole product containing div
      var productdetail = document.createElement('div');
      productdetail.classList.add('product_detail');

      imageWrapper.appendChild(image);
      productdetail.appendChild(imageWrapper);
      productdetail.appendChild(name);
      productdetail.appendChild(price);
      productdetail.appendChild(category);
      container.appendChild(productdetail);
    });
  },
};
document.addEventListener('DOMContentLoaded', function (event) {
  var category2 = document.getElementById('Camera');

  category2.addEventListener('change', function (e) {
    e.preventDefault();

    other22.addcategory();
    other22.loadproduct_category();
  });

  //   console.log('product', product);
});
var other22 = {
  addcategory() {
    cookieFunctions.setCookie(
      'category2',
      JSON.stringify(filtercategory2()),
      8
    );
  },
  loadproduct_category() {
    var container = document.querySelector('.filter_container');
    var category = JSON.parse(cookieFunctions.getCookie('category2'));

    category.forEach(function (a) {
      var image = a.img;
      console.log(image);
      var name = a.name;
      console.log(name);
      var price = a.price;
      console.log(price);
      var category = a.category;
      console.log(category);
      var imageWrapper = document.createElement('div');
      imageWrapper.classList.add('image_wrapper');

      var image = document.createElement('img');
      image.setAttribute('src', a.img);

      var name = document.createElement('h1');
      name.classList.add('product_name');
      name.innerHTML = a.name;

      var price = document.createElement('h1');
      price.classList.add('product_price');
      price.innerHTML = 'Price:' + ' ' + '$' + a.price;

      var category = document.createElement('h1');
      category.classList.add('product_category');
      category.innerHTML = 'Category:' + ' ' + a.category;

      // whole product containing div
      var productdetail = document.createElement('div');
      productdetail.classList.add('product_detail');

      imageWrapper.appendChild(image);
      productdetail.appendChild(imageWrapper);
      productdetail.appendChild(name);
      productdetail.appendChild(price);
      productdetail.appendChild(category);
      container.appendChild(productdetail);
    });
  },
};
