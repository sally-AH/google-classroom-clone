// const search = window.location.search

// console.log(search.split('=')[1])
const stream_route = document.getElementById("stream_route");
const classwork_route = document.getElementById('classwork_route');
const people_route = document.getElementById('people_route');
classwork_route.addEventListener("click",gotToPage);
people_route.addEventListener("click",gotToPage);

const line = document.getElementById("line_people");
const line1 = document.getElementById("line_classwork");
    line.style.display  = 'none';
    line1.style.display = 'none';

function gotToPage(event){
  window.location.href= `/front-end/html/${event.target.className}.html`;
}