menuToggle = document.getElementById('toggle');
menu = document.menuToggle = document.getElementById('links');

if (menu) {
  menu.addEventListener('click', toggleNav);
}

function toggleNav() {
  menuToggle.checked = false;
}
