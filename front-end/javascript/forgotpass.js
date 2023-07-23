document.addEventListener("DOMContentLoaded", function () {
  let forgotemail = document.getElementById("forgotemail")
  let newpassword = ""

  document.querySelector(".forgotbtn").addEventListener("click", async (e) => {
    function passwordgenerator() {
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var passwordLength = 12;
      var password = "";
      for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
      }
      return password
    }
    newpassword = passwordgenerator()
    jsdata = {
      email: forgotemail.value,
      password: newpassword
    }
    const jsonobject = JSON.stringify(jsdata)

    async function sendemail() {
      var default_url = "https://localhost/google-classroom-clone/back-end/php/send.php"
      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }
    async function updatepass() {
      var default_url = "https://localhost/google-classroom-clone/back-end/php/updatepassword.php"
      response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }
    var result = await sendemail()

    var result2 = await updatepass()
    var jsonresult2 = await result2.json()
    console.log(jsonresult2)




  }


  )
}
)
