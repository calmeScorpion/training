var additemid = 0;
function addToCart(item) {
  additemid += 1;
  var selectedItem = document.createElement('div');
  selectedItem.classList.add('cartImg');
  selectedItem.setAttribute('id', additemid);
  var img = document.createElement('img');
  img.setAttribute(' src ', item.children[0].currentsrc);
  var title = document.createElement(' div ');
  title.innerText = item.children[1].innerText;
  var label = document.createElement(' div ');
  label.innerText = item.children[2].children[0].innerText;
  var select = document.createElement(' span ');
  select.innerText = item.children[2].children[1].value;
  label.append(select);
  var delBtn = document.createElement(' button ');
  delBtn.innerText = 'Delete';
  delBtn.setAttribute('onclick','del('+ additemid+')');
  var cartItems = document.getElementById('title');
  selectedItem.append(img);
  selectedItem.append(title);
  selectedItem.append(label);
  selectedItem.append(delBtn);
  cartItems.append(selectedItem);
}
var noti = document.querySelector('h1');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button){
		but.addEventListener('click', (e)=>{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')

			// image --animation to cart ---//
			var image = e.target.parentNode.querySelector('img');
			var span = e.target.parentNode.querySelector('span');
			var s_image = image.cloneNode(false);
			span.appendChild(s_image);
			span.classList.add("active");
			setTimeout(()=>{
				span.classList.remove("active");
				span.removeChild(s_image);
			}, 500); 
			

			// copy and paste //
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) {
				noti.onclick = ()=>{
					select.classList.toggle('display');
				}	
			}
		})
	}
