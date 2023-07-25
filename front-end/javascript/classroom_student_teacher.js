document.addEventListener("DOMContentLoaded", function () {

  let studentemail = document.getElementById("studentemail")
  let classnum = "5"

  //will use the below in case front-end is available
  // const search = window.location.search
  // let classnum = search.split('=')[1]





  document.querySelector(".studentbtn").addEventListener("click", async (e) => {


    jsdata = {
      user_email: studentemail.value,
      user_token: "",
      message: "Dear Student ," + "\n" + "You are invited to join " + classnum + " class!  \n" + "\nPlease Join via this link : " + "\n127.0.0.1:5500/front-end/html/classwork.html?id=" + classnum + " .",
      subject: "Classroom Invitation"

    }
    var jsonobject = JSON.stringify(jsdata)

    async function sendemail() {
      var default_url = "https://localhost/google-classroom-clone/back-end/php/send.php"
      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }

    async function grabid() {
      jsdata = {
        user_email: studentemail.value,

      }
      jsonobject = JSON.stringify(jsdata)
      var default_url = "https://localhost/google-classroom-clone/back-end/php/grab_id.php"
      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }





    let res = await sendemail();
    let res2 = await grabid();
    var jsonresult = await res2.json()
    user_id = jsonresult['user_id']
    async function addtodb() {
      jsdata = {
        "roleid": "2",
        "classid": classnum,
        "userid": user_id

      }
      jsonobject = JSON.stringify(jsdata)
      var default_url = "https://localhost/google-classroom-clone/back-end/php/classroom_student_teacher.php"
      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }
    let res3 = await addtodb();

    var jsonresult = await res3.json()
    console.log(res3)
  })
}
)
