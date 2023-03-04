let overlay = document.querySelector('.overlay');
let sidebar = document.querySelector('#dashSidebar');
let menu = document.querySelector('.menuIcon');

menu.addEventListener('click', displaySidebar);
overlay.addEventListener('click', hideSidebar);
window.addEventListener('resize', hideSidebarOnResize);

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
