function setCookie(name, value, exp_days) {
  var d = new Date();
  d.setTime(d.getTime() + exp_days * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toGMTString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}
var user = {
  name: document.querySelector('#uname').value,
  password: document.querySelector('#pass').value,
};
function login() {
  var username = document.querySelector('#uname').value;
  var pass_wrd = document.querySelector('#pass').value;
  setCookie(username, pass_wrd, 3);
  getCookie(username);
}
function getCookie(uname) {
  let name = uname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  console.log('username=' + name);
}

// function getCookie(name) {
//   var nameEQ = name + '=';
//   var ca = document.cookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//     if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//   }
//   return null;
// }

// function getCookie(uname) {
//   var cname = uname + '=';
//   var decodedCookie = decodeURIComponent(document.cookie);
//   var ca = decodedCookie.split(';');
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(cname) == 0) {
//       return c.substring(cname.length, c.length);
//     }
//   }
//   return '';
// }
