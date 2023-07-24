let btnClicked = false;
let showModal = false;

window.addEventListener('load',function(){
  const add_symbol= document.getElementById("addSymbol");
  add_symbol.addEventListener("click", function(){
    btnClicked = !btnClicked;
    checkToggle();
    console.log(btnClicked);
  });

  const create_class = document.getElementById("createClassBtn");
  create_class.addEventListener("click",function(){
    showModal = !showModal;
    checkModalToggle();
  });

  const cancel = document.getElementById("cancel");
  cancel.addEventListener("click",function(){
    hideModal();
  });

  const create = document.getElementById("create");
  cancel.addEventListener("click",function(){
    createClass();
  });

})

function checkToggle(){
  if (btnClicked == true){
    const popup_module=document.getElementById("popup");
    popup_module.style.display = "block";
  }else{
    const popup_module=document.getElementById("popup");
    popup_module.style.display = "none";
  }
}

function checkModalToggle(){
  if (showModal == true){
    const module=document.getElementById("create_class_popup");
    module.style.display = "flex";
  }else{
    const module=document.getElementById("create_class_popup");
    module.style.display = "none";
  }
}

function hideModal(){
  showModal == false
  const module=document.getElementById("create_class_popup");
    module.style.display = "none";
}

function createClass(){
  // do somthin
}