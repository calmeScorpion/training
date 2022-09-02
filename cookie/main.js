document.addEventListener('DOMContentLoaded', function (event) {
  console.log('page is fully loaded');

  var userBtn = document.querySelector('.add-user-btn');

  userBtn.addEventListener('click', function () {
    console.log('btn clicked');
    other.adduser();
  });

  //Initialize variables
  var users = other.initialize();
  console.log('users', users);

  other.loadUsers();
});
