
const teacherUsers = [];
const studentUsers = [];

async function get() {
  try {
    const response = await fetch("http://localhost/google-classroom-clone/php/people.php", {
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
    teacherSection.innerHTML = teacherUsers.join("");

    const studentSection = document.querySelector(".down_part");
    studentSection.innerHTML = studentUsers.join("");
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

get();