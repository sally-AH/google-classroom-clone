document.addEventListener("DOMContentLoaded", function () {

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
    const jsonobject = JSON.stringify(jsdata)
    const default_url = "http://localhost/google-classroom-clone/back-end/php/createclass.php"

    async function createclass() {

      const response = await fetch(default_url, {
        method: "POST",
        body: jsonobject,

      })
      return response
    }
    var res = await createclass()
    var jsn = await res.json()
    console.log(jsn)
  })

})