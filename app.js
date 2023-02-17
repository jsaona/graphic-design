/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function togglesMenuLinks() {
  let myLinks = document.getElementById("myLinks");
  if (myLinks.style.display === "block") {
    myLinks.style.display = "none";
  } else {
    myLinks.style.display = "block";
  }
}

// Navbar Animation
$(document).ready(function () {
  $(".icon").click(function () {
    $("#myLinks").slideToggle("1000");
  });
});
