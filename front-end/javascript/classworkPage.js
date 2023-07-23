posts = [
  {
        id: 1,
        post_type: 'material',
        category:"Full Stack",
        title: "Fetch/PHP Assignment Correction",
        instructo: 'Khaled Faour',
        posted_date: 'Yesterday',
  },

  {
        id: 2,
        post_type: 'assignment',
        category:"PHP",
        name:" Google Classroom Clone",
        due_date: "Due 15 Dec, 10:00 PM",
  },
  {
        id: 3,
        post_type: 'material',
        category:"PHP",
        name:"Log in Sign Up",
        due_date: "Due 12 Dec, 6:00 AM",
  },
  {
        id: 4,
        post_type: 'assignment',
        category:"SQL",
        name:"Tables and relations",
        due_date: "Due 11 Jan, 11:00 PM",
  },
  {
        id: 5,
        post_type: 'material',
        category:"JavaScript",
        name:"DOM Manipulation",
        due_date: "Due 26 Jul, 10:00 PM",
  },
  {
        id: 6,
        post_type: 'assignment',
        category:"UI/UX Design",
        name:"Color Theory",
        due_date: "Due 07 Oct, 1:00 AM",
  }
]

const categories = []

document.addEventListener("DOMContentLoaded", () => {
  const ulElement = document.querySelector('.aside ul');
  const categories = [];

  for (let i in posts) {
    categories.push(posts[i].category);
    if (ulElement) {
      ulElement.innerHTML += `<li class="topic">${posts[i].category}</li>`;
    }
  }

  for (let i = 0; i < categories.length; i++) {
    const joinedName = categories[i].trim().replace(/\s/g, '');
    document.querySelector(".categories").innerHTML += `
      <li class="category ${joinedName}">
        <div>
          <h1 class="title">${categories[i]}</h1>
          <div class="line cat">1</div>
        </div>
      </li>`;
  }

  for (let i = 0; i < posts.length; i++) {
    const joinedName = posts[i].category.trim().replace(/\s/g, '');
    const elementsWithCategory = document.querySelectorAll(`[class*="${joinedName}"]`)
    for(let j=0 ; j<elementsWithCategory.length ; j++){
      elementsWithCategory[j].innerHTML+=`
      <ul  class="assMat">
          <li>
            <div>
              <div class="singlePost">
                ${posts[i].post_type === "assignment"? `<div class="logoContainer">
                <svg
                focusable="false"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="assignmentsLogo"
              >
                <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16z"></path>
              </svg>
              </div>` :`<div class="logoContainer2">
              <svg
              focusable="false"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="assignmentsLogo"
            >
              <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 18H6V4h2v8l2.5-1.5L13 12V4h5v16z"></path>
            </svg>
            </div>` }
              </div>
            </div>
          </li>
        </ul>`
    }
    console.log(elementsWithCategory);
    
  }
});


{/*  */}