document.addEventListener("DOMContentLoaded", function () {
  let forgotemail = document.getElementById("forgotemail")

  document.querySelector(".forgotbtn").addEventListener("click", async (e) => {



    jsdata = {
      email: forgotemail.value,

    }
    const jsonobject = JSON.stringify(jsdata)
    const default_url = "https://localhost/google-classroom-clone/back-end/php/send.php"

    async function sendmemail() {

      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject,

      })
      return response
    }
    const result = await sendmemail()
    const jsonresult = await result.json()


  }


  )
}
)
