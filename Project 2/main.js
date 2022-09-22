var product = document.createElement('div');
product.classList.add('products');
product.setAttribute('id', 'products');
container.appendChild(product);

// giving heading to product section
var heading = document.createElement('h2');
product.setAttribute('id', 'header');
heading.innerText = 'ELECTRONICS';
product.appendChild(heading);
var row1 = document.createElement('div');
row1.classList.add('row');
row1.setAttribute('id', 'row-one');
product.appendChild(row1);

window.onload = function exampleFunction() {
  load();
  check();
};
//  Displaying each items using loop
function load() {
  Object.keys(elec).forEach(function (a) {
    var elecObj = elec[a];
    var div1 = document.createElement('div');
    div1.classList.add('box');
    div1.setAttribute('id', 'b-one');
    row1.appendChild(div1);
    var img_wrap = document.createElement('div');
    img_wrap.classList.add('img_wrapper');
    img_wrap.setAttribute('id', 'img_wrapper1');
    div1.appendChild(img_wrap);

    var image = document.createElement('img');
    image.setAttribute('src', elecObj.img);
    img_wrap.appendChild(image);
    image.classList.add('img');

    var pName = document.createElement('p');
    pName.classList.add('pname');
    pName.setAttribute('id', 'pname');
    pName.innerHTML = elecObj.name;
    div1.appendChild(pName);

    var prc = document.createElement('p');
    prc.classList.add('Price');
    prc.setAttribute('id', 'price');
    prc.innerHTML = elecObj.price;
    div1.appendChild(prc);
  });
}

// //filter functions
// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = elec[type];
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }
// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("filterDiv");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }

// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }

// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);     
//     }
//   }
//   element.className = arr1.join(" ");
// }

// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }

// function check() {
//   var mobCheck = document.getElementById('mobile').checked;
//   var lapCheck = document.getElementById('laptop').checked;
// }
// function display() {
//   var result = Object.values(elec);

//   function filter(data) {}
// }
