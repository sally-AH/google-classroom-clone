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

/////////////////////////////////////////////

posts = [
  {
        id: 1,
        title: "Fetch/PHP Assignment Correction",
        instructor: 'Khaled Faour',
        posted_date: 'Yesterday',
  },

  {
        id: 2,
        title: "Post Assignment Correction",
        instructor: 'hanan Faour',
        posted_date: 'today',
  },
  {
        id: 3,
        title: "Android studio",
        instructor: 'kassem danash',
        posted_date: '1 week ago',
  },
]

document.addEventListener("DOMContentLoaded", () => {
  
  for (let i = 0; i < posts.length; i++) {
    document.querySelector(".body_right").innerHTML += 
      `<div class="post">
            <div class="post_left">
                <img src="/front-end/images/3177440.png">
                <div class="post_details">
                    <p>${posts[i].instructor} poseted a new assignment</p>
                    <p>${posts[i].posted_date}</p>
                </div>
            </div>
            <div class="post_right">
                <img src="/front-end/images/settings.png">
            </div>
        </div>`;
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