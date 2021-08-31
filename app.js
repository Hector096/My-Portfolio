const menu = document.getElementById('menu1');

// eslint-disable-next-line no-unused-vars
function closeMenu() {
  menu.style.top = '-100vh';
  menu.style.backgroundColor = 'transparent';
  menu.style.display = 'none';
}

// eslint-disable-next-line no-unused-vars
function openMenu() {
  menu.style.top = '0';
  menu.style.backgroundColor = '#384af5';
  menu.style.display = 'block';
}
