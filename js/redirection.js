redirect();
function redirect(){
  console.log("checking size");
    if (window.innerWidth < 768) {
    window.location.href = "index.html";
  } else {
     console.log("redirect to pc version");
    window.location.href = "largescreen.html";
  }

}


window.addEventListener('resize', redirect);
 