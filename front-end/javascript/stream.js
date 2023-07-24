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
                <div class="image">
                    <svg focusable="false" width="24" height="24" viewBox="0 0 24 24" class=" NMm5M hhikbc">
                        <path d="M7 15h7v2H7zm0-4h10v2H7zm0-4h10v2H7z"></path>
                        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-.14 0-.27.01-.4.04a2.008 2.008 0 0 0-1.44 1.19c-.1.23-.16.49-.16.77v14c0 .27.06.54.16.78s.25.45.43.64c.27.27.62.47 1.01.55.13.02.26.03.4.03h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7-.25c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75zM19 19H5V5h14v14z">
                        </path>
                    </svg>
                </div>
                <div class="post_details">
                    <p>${posts[i].instructor} posted a new material: ${posts[i].title}</p>
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