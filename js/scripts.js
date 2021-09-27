function w3_open() {
    //document.getElementById("main").style.marginLeft = "25%";
    //document.getElementById("mySidebar").style.width = "25%";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("openNav").style.display = 'none';
    document.getElementById("logo").style.marginLeft= '100px"'
  }
  
  function mouseOut() {
    document.getElementById("main").style.marginLeft = "0%";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("openNav").style.display = "inline-block";
  }