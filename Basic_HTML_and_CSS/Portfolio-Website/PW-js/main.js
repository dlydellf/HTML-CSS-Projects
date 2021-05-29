function validateForm() {
  var inputs = document.forms["contactForm"];
  console.log(inputs);
  if ((inputs[(type = "text")].value || inputs[(type = "email")].value) == "") {
    alert("Please fill in all of form's fields before submitting");
  }
  if (!inputs[(type = "email")].value.contains("@")) {
    alert("Please enter a valid email address");
  }
}
