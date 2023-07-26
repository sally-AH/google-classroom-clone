document.addEventListener("DOMContentLoaded", function () {
<<<<<<< HEAD
=======
  const search = window.location.search
  let useridd = localStorage.getItem("user_id")
  let userids = JSON.parse(useridd)
  let userid = parseInt(userids)
>>>>>>> 847bf3a6dbe84e2292b7077d8bdb44161966a5f6

  function linkgenerator() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tokenlength = 10;
    var token = "";
    for (var i = 0; i <= tokenlength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      token += chars.substring(randomNumber, randomNumber + 1);
    }
    return token
  }
  function classcodegenerator() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var tokenlength = 5;
    var token = "";
    for (var i = 0; i <= tokenlength; i++) {
      var randomNumber = Math.floor(Math.random() * chars.length);
      token += chars.substring(randomNumber, randomNumber + 1);
    }
    return token
  }







  document.querySelector(".createbtn").addEventListener("click", async (e) => {
    let classcode = classcodegenerator()
    let linktext = linkgenerator()
    let classname = document.getElementById("classname").value
    let section = document.getElementById("section").value
    let subject = document.getElementById("subject").value
    let room = document.getElementById("room").value
    let classlink = "https://localhost/classroomclone/c/" + linktext


    jsdata = {
      class_name: classname,
      class_section: section,
      class_subject: subject,
      room: room,
      class_link: classlink,
      class_code: classcode
    }
<<<<<<< HEAD
    const jsonobject = JSON.stringify(jsdata)
    const default_url = "http://localhost/google-classroom-clone/back-end/php/createclass.php"

    async function createclass() {

      const response = await fetch(default_url, {
=======
    let jsonobject = JSON.stringify(jsdata)
    let default_url = "http://localhost/google-classroom-clone/back-end/php/createclass.php"

    async function createclass() {

      let response = await fetch(default_url, {
>>>>>>> 847bf3a6dbe84e2292b7077d8bdb44161966a5f6
        method: "POST",
        body: jsonobject,

      })
      return response
    }
    var res = await createclass()
    var jsn = await res.json()
<<<<<<< HEAD
    console.log(jsn)
  })

=======

    async function getclassid() {
      jsdata = {
        "classcode": classcode,
      }
      jsonobject = JSON.stringify(jsdata)
      var default_url = "https://localhost/google-classroom-clone/back-end/php/getid.php"
      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }

    var res4 = await getclassid()
    var jsn4 = await res4.json()

    let classid = jsn4['classid']
    console.log(classid)

    async function userclassupdate() {
      jsdata = {
        "classid": classid,
        "userid": userid

      }
      jsonobject = JSON.stringify(jsdata)
      var default_url = "https://localhost/google-classroom-clone/back-end/php/userclasses.php"
      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject

      })
      return response
    }
    let res44 = await userclassupdate()
    var jsonresult = await res44.json()
    console.log(jsonresult)
  })
>>>>>>> 847bf3a6dbe84e2292b7077d8bdb44161966a5f6
})