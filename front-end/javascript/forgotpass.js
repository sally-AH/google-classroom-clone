
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
    let jsdata = {
      email: forgotemail.value,
      password: newtoken
    }
    const jsonobject = JSON.stringify(jsdata)

    async function sendemail() {
      // var default_url = "https://localhost/google-classroom-clone/back-end/php/send.php"
      // const response = await fetch(default_url, {
      //   method: "POST",
      //   body: jsonobject

      // })
      // return response
    }
    async function addtoken() {
      var default_url = "http://localhost/google-classroom-clone/back-end/php/updatetoken.php";
      try {
        const response = await fetch(default_url, {
          method: "POST",
          body: jsonobject
        });
        
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        
        return response;
      } catch (error) {
        console.error("Error in fetch request:", error);
        throw error;
      }
    }
    
    // var result = await sendemail()

    var result2 = await addtoken()

    var jsonresult = await result2.json()
    console.log(jsonresult)
    
    if (jsonresult['status'] == "token added") {
      window.location.href = `../html/token.html?id=${1}`

    }
    else {
      forgotemail.placeholder = "Wrong Email"
      forgotemail.style.borderColor = "red";

    }



  }


  )
}
)