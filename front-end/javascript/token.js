document.addEventListener("DOMContentLoaded", function () {
  let verificationcode = document.getElementById("verificationcode")
  const search = window.location.search
  let email = search.split('=')[1]



  document.querySelector(".tokenbtn").addEventListener("click", async (e) => {
    jsdata = {
      user_email: email,
      user_token: verificationcode.value
    }
    const jsonobject = JSON.stringify(jsdata)

    async function checktoken() {
      var default_url = "https://localhost/google-classroom-clone/back-end/php/checktoken.php"
      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }
    var result = await checktoken()


    var jsonresult = await result.json()
    if (jsonresult['status'] == 'token match') {

    }
    else {
      verificationcode.value = ""
      verificationcode.placeholder = "Wrong code"
      verificationcode.style.borderColor = "red";
    }


  })
}
)
