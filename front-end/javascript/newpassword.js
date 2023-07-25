document.addEventListener("DOMContentLoaded", function () {
  let newpass = document.getElementById("newpass")
  const search = window.location.search
  let email = search.split('=')[1]



  document.querySelector(".passbtn").addEventListener("click", async (e) => {
    jsdata = {
      user_email: email,
      user_password: newpass.value
    }
    const jsonobject = JSON.stringify(jsdata)

    async function updatepass() {
      var default_url = "https://localhost/google-classroom-clone/back-end/php/newpass.php"
      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }
    var result = await updatepass()


    var jsonresult = await result.json()
    console.log(jsonresult['status'])



  })
}
)
