function login() {
  var uname = document.getElementById('uname').value;
  var pass = document.getElementById('pass').value;
  if (uname == 'admin' && pass == 'root') {
    document.write('Login Successful');
  } else {
    document.write('Login Failed');
  }
  
}
