document.addEventListener('DOMContentLoaded', function (event) {
  console.log('page is fully loaded');

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
