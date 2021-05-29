var NavbarClass;
var hue;
function bookmarkHue(NavbarClass) {
  if (NavbarClass == "Beginner") {
    hue = "green";
  } else if (NavbarClass == "Intermediate") {
    hue = "white";
  } else {
    hue = "red";
  }
  bookmark(NavbarClass, hue);
}

function bookmark(NavbarClass, hue) {
  document.getElementById("BeginnerImage").style.boxShadow = "none";
  document.getElementById("AdvancedImage").style.boxShadow = "none";
  document.getElementById("IntermediateImage").style.boxShadow = "none";
  document.getElementById("BeginnerImage").style.background = "none";
  document.getElementById("AdvancedImage").style.background = "none";
  document.getElementById("IntermediateImage").style.background = "none"; // These six lines above toggle off the styling of whichever 2 classes weren't selected */
  document.getElementById(`${NavbarClass}Image`).style.boxShadow = `1px 1px 15px 10px ${hue}`;
  document.getElementById(`${NavbarClass}Image`).style.backgroundColor = `${hue}`;
}
/* And all of this must become @media-responsive, eventually */
