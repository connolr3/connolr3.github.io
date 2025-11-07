$(document).ready(function() {
    console.log("mobile nav ready");
 var trigger = document.getElementById("triggernav");
      trigger.addEventListener("click", myFunction);
function myFunction() {
        console.log("clicking");
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

    trigger.addEventListener("click", myFunction);
});
