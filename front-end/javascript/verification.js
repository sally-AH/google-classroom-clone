document.addEventListener("DOMContentLoaded", function () {
  let forgotemail = document.getElementById("forgotemail")


  document.querySelector(".forgotbtn").addEventListener("click", async (e) => {
    function tokengenerator() {
      var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      var tokenlength = 6;
      var token = "";
      for (var i = 0; i <= tokenlength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        token += chars.substring(randomNumber, randomNumber + 1);
      }
      return token
    }
    newtoken = tokengenerator()

    jsdata = {
      user_email: forgotemail.value,
      user_token: newtoken,
      message: "Your Verification Code is : ",
      subject: "Google Recovery Team"
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
    async function addtoken() {
      var default_url = "https://localhost/google-classroom-clone/back-end/php/updatetoken.php"
      response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }
    var result = await sendemail()

    var result2 = await addtoken()

    var jsonresult = await result2.json()



    if (jsonresult['status'] == "token added") {
      window.location.href = `../html/token.html?id=${forgotemail.value}`

    }
    else {
      forgotemail.value = ""
      forgotemail.placeholder = "Wrong email"
      forgotemail.style.borderColor = "red";

    }



  }


  )
}
)
