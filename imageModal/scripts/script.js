const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', function openModal() {
  modal.style.display = 'block';
});
closeBtn.addEventListener('click', function closeModal() {
  modal.style.display = 'none';
});
window.addEventListener('click', function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});
