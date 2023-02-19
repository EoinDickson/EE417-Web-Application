function openNav() {
  document.getElementById("nav").innerHTML = sidebar;
  document.getElementById("nav").style.opacity = "1";
}

function closeNav() {
  document.getElementById("nav").style.opacity = '0';
  document.getElementById("nav").innerHTML = '';
}
function overDropdown(x) {
  const content = document.getElementById("dropdown-content");
  content.style.display = "block";
}
function outDropdown(x) {
  const content = document.getElementById("dropdown-content");
  content.style.display = "none";
}

// document.getElementById("nav").removeChild(document.getElementById("nav").lastChild);

const sidebar = '<div id="mySidenav" class="sidenav"><a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a><a href="index.html">Home</a><a href="gallery.html">Gallery</a><a href="leaderboard.html">Leaderboard</a><div class="dropdown"><a class="dropbtn" onmouseover="overDropdown(this)" onmouseout="outDropdown(this)">Info<i class="fa fa-caret-down"></i></a><div class="dropdown-content" id="dropdown-content" onmouseover="overDropdown(this)" onmouseout="outDropdown(this)"><a href="about.html">About Us</a><a href="contact.html">Contact</a></div></div><div class="bottom-nav"><hr><a href="profile.html"><i class="fa fa-user"></i></a><a href="login.html">Login / Logout</a></div></div>'

