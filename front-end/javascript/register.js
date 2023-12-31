document.addEventListener("DOMContentLoaded", function () {
  let signupbtn = document.getElementById("signupbtn")
  let firstname = document.getElementById("fname")
  let lastname = document.getElementById("lname")
  let email = document.getElementById("email")
  let password = document.getElementById("password")
  let phonenumber = document.getElementById("phonenumber")
  let date = document.getElementById("date")
  let loginemail = document.getElementById("loginemail")
  let loginpassword = document.getElementById("loginpassword")
  function checkloginfields() {
    let check = true
    if (loginemail.value == "") {
      loginemail.style.borderColor = "red";
      check = false;
    } else {
      loginemail.style.borderColor = "";
    }
    if (loginpassword.value == "") {
      loginpassword.style.borderColor = "red";
      check = false;
    } else {
      loginpassword.style.borderColor = "";
    }
    return check
  }

  function checkregisterfields() {
    let check = true;
    if (firstname.value == "") {
      firstname.style.borderColor = "red";
      check = false;
    } else {
      firstname.style.borderColor = "";
    }
    if (lastname.value == "") {
      lastname.style.borderColor = "red";
      check = false;
    } else {
      lastname.style.borderColor = "";
    }
    if (email.value == "") {
      email.style.borderColor = "red";
      check = false;
    } else {
      email.style.borderColor = "";
    }
    if (password.value == "") {
      password.style.borderColor = "red";
      check = false;
    }
    else {
      password.style.borderColor = "";
    }
    if (phonenumber.value == "") {
      phonenumber.style.borderColor = "red";
      check = false;
    } else {
      phonenumber.style.borderColor = "";
    }
    if (date.value == "") {
      date.style.borderColor = "red";
      check = false;
    } else {
      date.style.borderColor = "";
    }
    return check;
  }
  document.querySelector(".registerbtn").addEventListener("click", async (e) => {

    if (checkregisterfields()) {

      jsdata = {
        user_email: email.value,
        user_password: password.value,
        f_name: firstname.value,
        l_name: lastname.value,
        phone_number: phonenumber.value,
        dob: date.value
      }
      const jsonobject = JSON.stringify(jsdata)
      const default_url = "http://localhost/google-classroom-clone/back-end/php/signup.php"

      async function register() {

        const response = await fetch(default_url, {
          method: "POST",
          body: jsonobject,

        })
        return response
      }
      const result = await register()
      const jsonresult = await result.json()
      if (jsonresult["status"] == "failed") {
        email.value = ""
        email.placeholder = 'Please choose another email';
        email.style.borderColor = "red";
      }
      else {
        location.replace("/index.html");

      }


    }
  })

  document.querySelector(".loginbtn").addEventListener("click", async (e) => {

    if (checkloginfields()) {

      jsdata = {
        user_email: email.value,
        user_password: password.value,

      }
      const jsonobject = JSON.stringify(jsdata)
      const default_url = "https://localhost/google-classroom-clone-backend/back-end/php/signin.php"

      async function login() {

        const response = await fetch(default_url, {
          method: "POST",
          body: jsonobject,

        })
        return response
      }
      const result = await login()
      const jsonresult = await result.json()
      if (jsonresult["status"] == "user not found") {
        loginemail.value = ""
        loginemail.style.borderColor = "red";
      }
      if (jsonresult["status"] == "user not found") {
        loginemail.value = ""
        loginemail.style.borderColor = "red";
      }
      else {
        location.replace("/index.html");

      }

    }
  })
});

