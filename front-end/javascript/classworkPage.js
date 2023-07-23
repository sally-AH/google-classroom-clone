posts = [
  {
        id: 1,
        post_type: 'material',
        name:" full stuff from stuff",
        category:"Full Stack",
        title: "Fetch/PHP Assignment Correction",
        instructo: 'Khaled Faour',
        posted_date: 'Yesterday',
        text_content:"asdjasdjkasd nasdkjasdnadbsmnasbd adbnasbdn abndabs nban bnab bas",
        files:""
  },

  {
        id: 2,
        post_type: 'assignment',
        category:"PHP",
        name:" Google Classroom Clone",
        due_date: "Due 15 Dec, 10:00 PM",
        text_content:"asdjasdjkasd nasdkjasdnadbsmnasbd adbnasbdn abndabs nban bnab bas",
        files:""
  },
  {
        id: 3,
        post_type: 'material',
        category:"PHP",
        name:"Log in Sign Up",
        due_date: "Due 12 Dec, 6:00 AM",
        text_content:"asdjasdjkasd nasdkjasdnadbsmnasbd adbnasbdn abndabs nban bnab bas",
        files:""
  },
  {
        id: 4,
        post_type: 'assignment',
        category:"SQL",
        name:"Tables and relations",
        due_date: "Due 11 Jan, 11:00 PM",
        text_content:"asdjasdjkasd nasdkjasdnadbsmnasbd adbnasbdn abndabs nban bnab bas",
        files:""
  },
  {
        id: 5,
        post_type: 'material',
        category:"Ja",
        name:"DOM Manipulation",
        due_date: "Due 26 Jul, 10:00 PM",
        text_content:"asdjasdjkasd nasdkjasdnadbsmnasbd adbnasbdn abndabs nban bnab bas",
        files:""
  },
  {
        id: 6,
        post_type: 'material',
        category:"",
        name:"DOM Manipulation",
        due_date: "Due 26 Jul, 10:00 PM",
        text_content:"asdjasdjkasd nasdkjasdnadbsmnasbd adbnasbdn abndabs nban bnab bas",
        files:""
  },
  {
        id: 7,
        post_type: 'material',
        category:"",
        name:"DOM Manipulation",
        due_date: "Due 26 Jul, 10:00 PM",
        text_content:"asdjasdjkasd nasdkjasdnadbsmnasbd adbnasbdn abndabs nban bnab bas",
        files:""
  },
  

]

const categories = []

document.addEventListener("DOMContentLoaded", () => {
  const ulElement = document.querySelector('.aside ul');
  const categories = [];
  

  for (let i in posts) {
    if(!categories.includes(posts[i].category) && posts[i].category !== ""){
      categories.push(posts[i].category);
      if (ulElement) {
        ulElement.innerHTML += `<li class="topic">${posts[i].category}</li>`;
      }
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
              <div class="singlePost  post${posts[i].id}">
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
              <svg class="logoMat" focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M hhikbc"><path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7z"></path><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"></path></svg>
            
                   
            </div>` }
                <div>
                  <h4 class="assMat text">${posts[i].name}</h4>
                </div>
                
              </div>
              <div class="accordion-content  post${posts[i].id} ">
              
              <div class="innerAccordion">
              <p>${posts[i].text_content}</p>
                </div>
              </div>
            </div>
          </li>
        </ul>`
    }
    console.log(elementsWithCategory);
    if (!posts[i].category) {
      const noCategUl = document.querySelector('.assMat');
      if (noCategUl) {
        noCategUl.innerHTML += `
        <li>
              <div class="">
                <div class="singlePost  post${posts[i].id}">
                  <div>
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
                </div>
                <div class="line cat">1</div>` :`<div class="logoContainer2" >
                <svg class="logoMat"  focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M hhikbc"><path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7z"></path><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z"></path></svg>
              </div>` }
                  </div>
                  <div>
                    <h4 class="assMat text">${posts[i].name}</h4>
                  </div>  
                </div>  
              </div>
              <div class="accordion-content  post${posts[i].id}">
              <p>${posts[i].text_content}</p>
              <div class="flex-box">
                
                </div>
              </div>
            </div>
            </li>
            
            `;
      }
      
    }
  }
  const singlePosts = document.querySelectorAll(".singlePost");
  singlePosts.forEach((post) => {
    post.addEventListener("click", (e) => {
      const postId = e.currentTarget.classList[1];
      const accordionContent = document.querySelector(`.accordion-content.${postId}`)
      accordionContent.classList.toggle("active");
    });
  });

});