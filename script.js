let overlay = document.querySelector('.overlay');
let sidebar = document.querySelector('#dashSidebar');
let menu = document.querySelector('.menuIcon');
let sunIcon = document.querySelector('.sunIcon');
let moonIcon = document.querySelector('.moonIcon');


menu.addEventListener('click', displaySidebar);
overlay.addEventListener('click', hideSidebar);
window.addEventListener('resize', hideSidebarOnResize);
sunIcon.addEventListener('click', toggleTheme);
moonIcon.addEventListener('click', toggleTheme);

function toggleTheme() {
  const root = document.documentElement;
  const newTheme = root.className === 'dark' ? 'light' : 'dark';
  root.className = newTheme;
  if(newTheme === 'dark') {
    sunIcon.classList.remove('hide');
    moonIcon.classList.add('hide');
  } else {
    moonIcon.classList.remove('hide');
    sunIcon.classList.add('hide');
  }
}

function displaySidebar(e) {
  overlay.classList.add("showOverlay");
}

function hideSidebar(e) {
  if(e.target.classList[0] === "overlay") {
    overlay.classList.remove("showOverlay");
    document.body.style.overflow = '';
  }
}

function hideSidebarOnResize() {
  overlay.classList.remove("showOverlay");
  document.body.style.overflow = '';
}
