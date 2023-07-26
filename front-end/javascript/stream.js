<<<<<<< HEAD
// const search = window.location.search

// console.log(search.split('=')[1])
=======
>>>>>>> 847bf3a6dbe84e2292b7077d8bdb44161966a5f6
const stream_route = document.getElementById("stream_route");
const classwork_route = document.getElementById('classwork_route');
const people_route = document.getElementById('people_route');
classwork_route.addEventListener("click",gotToPage);
people_route.addEventListener("click",gotToPage);

<<<<<<< HEAD
=======

>>>>>>> 847bf3a6dbe84e2292b7077d8bdb44161966a5f6
const line = document.getElementById("line_people");
const line1 = document.getElementById("line_classwork");
    line.style.display  = 'none';
    line1.style.display = 'none';

function gotToPage(event){
  const id  =window.location.search.split('=')[1]
  window.location.href= `/front-end/html/${event.target.className}.html?id=${id}`;
}

<<<<<<< HEAD
/////////////////////////////////////////////

// dummby data
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

  const singlePosts = document.querySelectorAll(".post");
  singlePosts.forEach((post) => {
    post.addEventListener("click", (e) => {
    //   const postId = e.currentTarget.classList[1]; send this id to next page
    });
  });

});
=======

/////////////////////////////////////////////


document.addEventListener("DOMContentLoaded", async function (){


    const body = {user_id : 2}
    const parsebody = JSON.stringify(body);
    const response = await fetch ("http://localhost/google-classroom-clone/back-end/get_class.php",{
        method:"POST",
        body: parsebody
    });

    const data= await response.json();
    const dataArray = data.data;


    for(let i =0; i<dataArray.length; i++){

        console.log(dataArray[i]["class_id"])
        const class_id= dataArray[i]["class_id"];
        const class_name= dataArray[i]["class_name"];
        const class_subject= dataArray[i]["class_subject"];
        const post_title= dataArray[i]["post_title"];

        const end_date= dataArray[i]["end_date"];
        const google_meet_link = dataArray[i]["google_meet_link"];
        
        console.log(end_date)
          const meet_btn = document.getElementById('meet_btn');
        meet_btn.addEventListener("click",goToMeet);

        function goToMeet(event){
          window.location.href = google_meet_link;
        }

          document.getElementById("class_name").innerHTML= class_name;
          document.getElementById("class_name_title").innerHTML = class_name;
          document.querySelector(".classroomText").innerHTML = class_subject;
          document.querySelector(".assignments_due_date_value").innerHTML = end_date;
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
                  <p>${name}  ${post_title}</p>
                  <p>${end_date}</p>
                </div>
              </div>
              <div class="post_right">
                <img src="/front-end/images/settings.png">
              </div>
            </div>`;
    }

      const singlePosts = document.querySelectorAll(".post");
      singlePosts.forEach((post) => {
        post.addEventListener("click", (e) => {
          console.log("hello")
        //   const postId = e.currentTarget.classList[1]; send this id to next page
        });
      });

})
>>>>>>> 847bf3a6dbe84e2292b7077d8bdb44161966a5f6
