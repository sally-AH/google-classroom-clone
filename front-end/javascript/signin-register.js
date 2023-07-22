document.addEventListener("DOMContentLoaded", function () {
  let signupbtn = document.getElementById("signupbtn")
  let firstname = document.getElementById("fname")
  let lastname = document.getElementById("lname")
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let phonenumber = document.getElementById("phonenumber")
  let date = document.getElementById("date")


  function checkfields() {
    check = true
    if (firstname.value == "") {
      firstname.style.borderColor = "red";
      check = false
    }
    if (lastname.value == "") {
      lastname.style.borderColor = "red"
      check = false

    }
    if (email.value == "") {
      email.style.borderColor = "red"
      check = false

    }
    if (password.value == "") {
      password.style.borderColor = "red"
      check = false

    }
    if (phonenumber.value == "") {
      phonenumber.style.borderColor = "red"
      check = false

    }
    if (date.value == "") {
      date.style.borderColor = "red"
      check = false
    }
    return check
  }
  signupbtn.addEventListener("click", () => {


  })



});

