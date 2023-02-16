function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
  function overDropdown(x) {
    const content = document.getElementById("dropdown-content");
    content.style.display = "block";
  }
  function outDropdown(x) {
    const content = document.getElementById("dropdown-content");
    content.style.display = "none";
  }