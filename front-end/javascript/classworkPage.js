const categories = []

document.addEventListener("DOMContentLoaded", async() => {
  const id = window.location.search.split('=')[1]
  const url = "http://localhost/google-classroom-clone/back-end/php/getAssignments.php"
  const body = {
    id
  }
  const parsedBody = JSON.stringify(body)
  const response = await fetch(url , {
    method:"POST",
    body:parsedBody
  })
  const data = await response.json()
  posts = data
  // console.log(data)
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
        <div class="catHeadings">
          <h1 class="title">${categories[i]}</h1>
          <div class="line cat">1</div>
        </div>
      </li>`;
  }

  for (let i = 0; i < posts.length; i++) {
    const joinedName = posts[i].category.trim().replace(/\s/g, '');
    const elementsWithCategory = document.querySelectorAll(`[class*="${joinedName}"]`)
    for(let j=0 ; j<elementsWithCategory.length ; j++){
      const assDueDate = posts[i].due_date ? "Due "+posts[i].due_date.split(',')[0] :"Posted "+  posts[i].posted_date.split(',')[0] 
      elementsWithCategory[j].innerHTML+=`
      <ul  class="assMat">
          <li>
          
            <div>
            
              <div class="singlePost  post${posts[i].id}">
              <div class = "ContainingPost">
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
                <div class = "dueDate">${assDueDate}</div>
              </div>
              
              <div class="accordion-content  post${posts[i].id} ">
                <div class="innerAccordion">
                  <p>${posts[i].text_content}</p>
                  <div class="flex-box">
                
                  </div>
                </div>
                <div class="footer">
                  <h3>View material</h3>
                </div>
              </div>
            </div>
          </li>
        </ul>`
    }
    if (!posts[i].category) {
      const noCategUl = document.querySelector('.assMat');
      if (noCategUl) {
        const assDueDate = posts[i].due_date ? "Due "+posts[i].due_date.split(',')[0] :"Posted "+  posts[i].posted_date.split(',')[0] 
        noCategUl.innerHTML += `
        <li>
              <div class="">
                <div class="singlePost  post${posts[i].id}">
                <div class = "ContainingPost">
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
                <div class = "dueDate">${assDueDate}</div> 
                </div>  
                
              </div>
              <div class="accordion-content  post${posts[i].id} ">
                <div class="innerAccordion">
                  <p>${posts[i].text_content}</p>
                  <div class="flex-box">
                
                  </div>
                </div>
                <div class="footer">
                  <h3>View material</h3>
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
      post.classList.toggle("active");
    });
  });
  const topicElements = document.querySelectorAll(".topic");
  
  topicElements.forEach((topicElement) => {
    topicElement.addEventListener("click", () => {
      
      const category = topicElement.textContent;

      const assignmentElements = document.querySelector(".categories");
      const liElements = assignmentElements.querySelectorAll("li.category")
      const allTopics = document.querySelector(".topics")
      allTopics.addEventListener("click" , ()=>{
        liElements.forEach((assignmentElement) => {
          assignmentElement.style.display = "block";
        });
      })
      liElements.forEach((assignmentElement) => {

        const joinedName = assignmentElement.classList[1].trim().replace(/\s/g, '');
        console.log(joinedName)
        if (joinedName === category.trim().replace(/\s/g, '')) {
          assignmentElement.style.display = "block"; 
        } else {
          assignmentElement.style.display = "none"; 
        }
      });
    });
  });
});