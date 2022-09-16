document.addEventListener('DOMContentLoaded', function (event) {
  var userBtn = document.querySelector('.add-user-btn');

  userBtn.addEventListener('click', function () {
    document.location.href = 'reg.html';
  });

  const loadCart = () => {
    if (getCookie('formfield')) {
      var display = JSON.parse(getCookie('formfield'));

      display.forEach(function (c, index) {
        var username = c.name;
        var userage = c.age;
        var tdNo = document.createElement('td');
        tdNo.innerText = index + 1;
        var tdName = document.createElement('td');
        tdName.innerText = username;
        var tdAge = document.createElement('td');
        tdAge.innerText = userage;
        var tdAction = document.createElement('td');
        var edit = document.createElement('img');
        edit.setAttribute('src', 'edit.png');
        var tr = document.createElement('tr');

        tdAction.appendChild(edit);
        tr.appendChild(tdNo);
        tr.appendChild(tdName);
        tr.appendChild(tdAge);
        tr.appendChild(tdAction);

        tbody = document.querySelector('#tbody');
        tbody.appendChild(tr);

        edit.addEventListener('click', function () {
          document.location.href = `reg.html?id=${index}`;
        });
      });
    }
  };
  loadCart();
});
