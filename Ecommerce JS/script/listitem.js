Object.keys(products).forEach(function (a) {
  var productObj = products[a];
  var container = document.querySelector('.container');
  //query param

  var imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image_wrapper');

  var image = document.createElement('img');
  image.setAttribute('src', productObj.img);
  
  var name = document.createElement('h2');
  name.classList.add('product_name');
  name.innerHTML = productObj.name;
  
  var price = document.createElement('p');
  price.classList.add('product_price');
  price.innerHTML = 'Price:' + ' ' + '$' + productObj.price;
  
  var category = document.createElement('p');
  category.classList.add('product_category');
  category.innerHTML = 'Category:' + ' ' + productObj.category;
  
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
