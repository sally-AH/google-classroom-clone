const people = [
    {
      id: 1,
      teacherName: "Teacher name",
      teacherImage: "/front-end/images/3177440.png",
      role: "teacher",
    },
    {
      id: 2,
      studentName: "Student name",
      studentImage: "/front-end/images/3177440.png",
      role: "student",
    },
    {
      id: 3,
      teacherName: "Another teacher",
      teacherImage: "/front-end/images/3177440.png",
      role: "teacher",
    },
    {
      id: 4,
      studentName: "Another student",
      studentImage: "/front-end/images/3177440.png",
      role: "student",
    },
  ];
  
  const teacherUsers = [];
  const studentUsers = [];
  
  async function getpeople() {
    try {
      const response = await fetch(""); 
      const people = await response.json();
      
      people.forEach((element) => {
        const { id, teacherName, teacherImage, role } = element;
        const { id: studentId, studentName, studentImage } = element;
  
        if (role === "teacher") {
          teacherUsers.push(`
            <div class="container1" id="${id}">
              <img src="${teacherImage}" alt="Teacher image">
              <div>
                <p class="TeacherName">${teacherName}</p>
              </div>
            </div>
          `);
        } else if (role === "student") {
          studentUsers.push(`
            <div class="container2" id="${studentId}">
              <img src="${studentImage}" alt="Student image">
              <div>
                <p class="studentName">${studentName}</p>
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
      console.error("Error fetching data:", error);
    }
  }
  
  getpeople();
