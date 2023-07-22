document.addEventListener("DOMContentLoaded", function () {

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

  document.querySelector(".loginbtn").addEventListener("click", async (e) => {

    if (checkloginfields()) {

      jsdata = {
        user_email: loginemail.value,
        user_password: loginpassword.value,

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
      console.log(jsonresult)
      if (jsonresult["status"] == "user not found") {
        loginemail.value = ""
        loginemail.style.borderColor = "red"
        loginpassword.style.borderColor = "red"
      }
      if (jsonresult["status"] == "wrong password") {
        loginpassword.style.borderColor = "red"
      }
      else {

        location.replace("front-end/html/landingPage.html");

      }

    }
  })
});