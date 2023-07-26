const landingPage = document.getElementById('landingPage');
landingPage.addEventListener("click",gotToPage);

function gotToPage(event){
  const id  =window.location.search.split('=')[1]
  window.location.href= `/front-end/html/${event.target.className}.html?id=${id}`;
}

let btnClicked = false;
let showModal = false;
let btnMenu =false;

document.addEventListener('DOMContentLoaded',async function(){
  const menu_btn= document.getElementById("hamburger");
  menu_btn.addEventListener("click", function(){
    btnMenu = !btnMenu;
    showMenu();
    console.log(btnMenu);
  });

  const uploadbtn= document.getElementById("uploadbtn");
  uploadbtn.addEventListener("click", function(){
    btnClicked = !btnClicked;
    checkToggle();
    console.log(btnClicked);
  });

  const close = document.getElementById("closebtn");
  close.addEventListener("click",function(){
    hideModal();
  });

  const id = window.location.search.split('=')[1]
  const url = "http://localhost/google-classroom-clone/back-end/php/getPostDetails.php"
  const body = {
    postId:1
  }
  const parsedBody = JSON.stringify(body)
  const response = await fetch(url , {
    method:"POST",
    body:parsedBody
  })
  const data = await response.json()
  posts = data
  console.log(posts)
  const {id:postId ,name:postName ,category:postCategory,posted_date:postPostedDate , due_date:postDueDate , text_content:textContent , files,grade:postGrade }   = posts
  console.log(postId)
  const assignmentDescription  = document.querySelector(".assignment_details").textContent=textContent
  const assignmentTitle  = document.querySelector(".assignment_title").textContent=postName
  const dueDate  = document.querySelector(".due_date").textContent=`Due ${postDueDate.split(' ')[1].substring(0, 5)}`
  assignmentTitle.textContent = 11
document.querySelector(".classroomTitle").innerHTML = `${localStorage.getItem("className")} <br>
<span class="classroomText">
${localStorage.getItem("classDescription")}</span>`
})

function checkToggle(){
  if (btnClicked == true){
    const popup_module=document.getElementById("upload_files_popup");
    popup_module.style.display = "flex";
  }else{
    const popup_module=document.getElementById("upload_files_popup");
    popup_module.style.display = "none";
  }
}

function hideModal(){
  showModal == false
  const module=document.getElementById("upload_files_popup");
    module.style.display = "none";
}

function showMenu(){
  if (btnMenu == true){
    const menu_module=document.getElementById("menu");
    menu_module.style.display = "block";
  }else{
    const menu_module=document.getElementById("menu");
    menu_module.style.display = "none";
  }
}