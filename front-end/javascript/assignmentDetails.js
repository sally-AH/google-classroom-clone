let btnClicked = false;
let showModal = false;

window.addEventListener('load',function(){
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