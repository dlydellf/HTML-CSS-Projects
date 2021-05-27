function bookmarkHue(NavbarClass) {
  if (NavbarClass == "Beginner") {
    hue = "green";
  } else if (NavbarClass == "Intermediate") {
    hue = "white";
  } else {
    hue = "red";
    bookmark(NavbarClass, hue);
  }
}

function bookmark(NavbarClass, hue) {
  document.getElementById(`${NavbarClass}Image`).style.boxShadow = `1px 1px 15px 10px ${hue}`;
  document.getElementById(`${NavbarClass}Image`).style.backgroundColor = `${hue}`;
  document.getElementById(`${NavbarClass}Text`).style.border = `1px solid ${hue}`;
}
