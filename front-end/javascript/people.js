
const id = 1;
const teacherUsers = [];
const studentUsers = [];

let btnClicked = false;
let showModal = false;
const module1=document.getElementById("add_teacher_pop");
const module2=document.getElementById("add_student_pop");
document.addEventListener('DOMContentLoaded',function(){
document.querySelector(".stream").addEventListener("click", ()=>{
  window.location.href='stream.html'
})
document.querySelector(".classwork").addEventListener("click", ()=>{
  window.location.href='classwork.html'
})

  const invite_btn_teacher = document.getElementById("addTeacher");
  invite_btn_teacher.addEventListener("click",function(){
    showModal = !showModal;
    checkModalToggle();
  });


  const cancel_tech = document.getElementById("cancel_tech");
  cancel_tech.addEventListener("click",function(){
    showModal = !showModal;
    checkModalToggle();
  });

  const inv_tech = document.getElementById("invite_tech");
  inv_tech.addEventListener("click",function(){
    // add your method
  });

  const invite_btn_student = document.getElementById("addStudent");
  invite_btn_student.addEventListener("click",function(){
    showModal = !showModal;
    checkModalToggle2();
  });

  const cancel_std = document.getElementById("cancel_std");
  cancel_std.addEventListener("click",function(){
    showModal = !showModal;
    checkModalToggle2();
  });

  const invite_std = document.getElementById("invite_std");
  invite_std.addEventListener("click",function(){
    // add your method
  });

})

function checkModalToggle(){
  if (showModal == true){
    module1.style.display = "flex";
  }else{
    module1.style.display = "none";
  }
}
function checkModalToggle2(){
  if (showModal == true){
    module2.style.display = "flex";
  }else{
    module2.style.display = "none";
  }
}


async function get() {
  try {
    const response = await fetch("http://localhost/google-classroom-clone/back-end/php/people.php?id", {
      method: "POST",
      body: JSON.stringify({ class_id: 1 }) 
    });
    const { data } = await response.json(); 
    console.log(data)
    data.forEach((element) => {
      const photo = element.photo;
      const userId = element.user_id;
      const role = element.user_role_id;
      const fname = element.f_name;

      if (role === 1) {
        teacherUsers.push(`
          <div class="container1" id="${userId}">
            <img src="${photo}" alt="Teacher image">
            <div>
              <p class="TeacherName">${fname}</p>
            </div>
          </div>
        `);
      } else if (role === 2) {
        studentUsers.push(`
          <div class="container2" id="${userId}">
            <img src="${photo}" alt="Student image">
            <div>
              <p class="studentName">${fname}</p>
            </div>
          </div>
        `);
      }
    });

    const teacherSection = document.querySelector(".upper_part");
    teacherSection.innerHTML += teacherUsers.join("");

    const studentSection = document.querySelector(".down_part");
    studentSection.innerHTML += studentUsers.join("");
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

get();


