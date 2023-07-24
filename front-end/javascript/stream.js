// const search = window.location.search

// console.log(search.split('=')[1])
const classwork_route = document.getElementById('classwork_route');
classwork_route.addEventListener("click",gotToPage);

function gotToPage(){
    window.location.href= "/front-end/html/classwork.html";
}