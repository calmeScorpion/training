document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('forms');
  var username = document.getElementById('name');
  var age = document.getElementById('age');

  var other = {
    //adding data to cookie
    userdetail() {
      var formfield = this.getinput();
      if (document.querySelector('input[type=hidden]').value === 'edit') {
        var urlParams = getUrlParams();
        formfield[parseInt(urlParams.id)] = this.getElementObject();
      } else {
        formfield.push(this.getElementObject());
      }

      cookieFunctions.setCookie('formfield', JSON.stringify(formfield), 8);
    },
    getElementObject() {
      return {
        name: username.value,
        age: age.value,
      };
    },
    getinput() {
      var productCookies = cookieFunctions.getCookie('formfield');
      return JSON.parse(productCookies);
    },
    //initial cookie creation
    initialize() {
      var isCookieExists = cookieFunctions.checkCookieExists('formfield');

      if (!isCookieExists) {
        cookieFunctions.setCookie('formfield', JSON.stringify([]), 8);
      }
      var formfield = this.getinput();
      var urlParams = getUrlParams();
      if (urlParams.id) {
        document.querySelector('input[type=hidden]').value = 'edit';
        const userData = formfield[parseInt(urlParams.id)];
        username.value = userData.name;
        age.value = userData.age;
      }
    },
  };

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    other.userdetail();
    document.location.href = 'Listing.html';
  });
  other.initialize();
});
