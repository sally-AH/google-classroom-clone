

classes = [
  
  {
     id:1,
     name:"FSW23&24 | Tech",
     instructor:'Christopher Yammine',
     image:'./images/home.png',

     description:"full stack web dev bootcamp tech department",
     color:"black",
     assignments:[
       {
         name:"Google Classroom Clone",
         dueDate:"10-12-2023T11.00PM"
       }
     ]
   },
   {
     id:2,
     color:"green",
     name:"FSW23&24 | Soft Skills",
     instructor:'George Abed el Nour',
     image:'./images/3177440.png',
     description:"full stack web dev bootcamp soft skills department",
     assignments:[
       {
         name:"pro dev stuff",
         dueDate:"9-12-2023T10.00PM"
       }
     ]
   },
   {
     id:2,
     color:"green",
     name:"FSW23&24 | Soft Skills",
     instructor:'George Abed el Nour',
     image:'./images/3177440.png',
     description:"full stack web dev bootcamp soft skills department",
     assignments:[
       {
         name:"pro dev stuff",
         dueDate:"9-12-2023T10.00PM"
       }
     ]
   },
   {
     id:2,
     color:"green",
     name:"FSW23&24 | Soft Skills",
     instructor:'George Abed el Nour',
     image:'./images/3177440.png',
     description:"full stack web dev bootcamp soft skills department",
     assignments:[
       {
         name:"pro dev stuff",
         dueDate:"9-12-2023T10.00PM"
       }
     ]
   },
   {
     id:2,
     color:"green",
     name:"FSW23&24 | Soft Skills",
     instructor:'George Abed el Nour',
     image:'./images/3177440.png',
     description:"full stack web dev bootcamp soft skills department",
     assignments:[
       {
         name:"pro dev stuff",
         dueDate:"9-12-2023T10.00PM"
       }
     ]
   },
   {
     id:2,
     color:"green",
     name:"FSW23&24 | Soft Skills",
     instructor:'George Abed el Nour',
     image:'./images/3177440.png',
     description:"full stack web dev bootcamp soft skills department",
     assignments:[
       {
         name:"pro dev stuff",
         dueDate:"9-12-2023T10.00PM"
       }
     ]
   },
   {
     id:2,
     color:"green",
     name:"FSW23&24 | Soft Skills",
     instructor:'George Abed el Nour',
     image:'./images/3177440.png',
     description:"full stack web dev bootcamp soft skills department",
     assignments:[
       {
         name:"pro dev stuff",
         dueDate:"9-12-2023T10.00PM"
       }
     ]
   },
   {
     id:2,
     color:"green",
     name:"FSW23&24 | Soft Skills",
     instructor:'George Abed el Nour',
     image:'./images/3177440.png',
     description:"full stack web dev bootcamp soft skills department",
     assignments:[
       {
         name:"pro dev stuff",
         dueDate:"9-12-2023T10.00PM"
       }
     ]
   },
 
]

const bodyContent = []
classes.forEach((studentClass, index) => {
  const { id,name,color,image, instructor, description, assignments } = studentClass

 
  let assignmentDetails = ''
  assignments.forEach((assignment) => {
    assignmentDetails += `<div class="assignments">
      <p class="class-subject">Due tomorow</p>
      <p class="assignment-name">${assignment.dueDate.split("T")[1]} - ${assignment.name}</p>
      </div>
    `
  })
  bodyContent.push(`
    <div class="classCard">
    <div class="header" style="background-color:${color}; background-image: url(${image});">

        <h3 class="className">${name}</h3>
        <h3 class="className desc">${description}</h3>
      </div>
      ${assignmentDetails}
      <button class="dots">
        <span>
          <svg class="iconSvg" focusable="false" width="24" height="24" viewBox="0 0 24 24">
            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </span>
      </button>
      <footer class = "footer">
        <div class="bottomIcons ">
        <span>
          <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
            <path class="calender" d="M19 3h-4.18C14.4 1.84 13.3 1 12 1s-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7.55 0c.14-.15.33-.25.55-.25s.41.1.55.25c.12.13.2.31.2.5 0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.19.08-.37.2-.5zM19 5v10.79C16.52 14.37 13.23 14 12 14s-4.52.37-7 1.79V5h14zM5 19v-.77C6.74 16.66 10.32 16 12 16s5.26.66 7 2.23V19H5z"></path>
            <path d="M12 13c1.94 0 3.5-1.56 3.5-3.5S13.94 6 12 6 8.5 7.56 8.5 9.5 10.06 13 12 13zm0-5c.83 0 1.5.67 1.5 1.5S12.83 11 12 11s-1.5-.67-1.5-1.5S11.17 8 12 8z"></path>
          </svg>
        </span>
        <a href="/c/NjE1MzI3NzQ1ODkx/sp/NjE1NTAwOTkzOTIy/all" aria-label="Open your work for &quot;FSW 23&amp; 24 | Tech&quot;" data-tooltip-enabled="true" data-tooltip-id="zxtDBb615327745891" jsaction=""></a>
      </div>
      <div class="bottomIcons">
        <span>
          <svg focusable="false" width="24" height="24" viewBox="0 0 24 24">
            <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path>
          </svg>
        </span>
        <a href="https://drive.google.com/drive/folders/1LLEQWXMr_zQtT_WalAcIyXtT9io0RzgEd6HzqomGoiGWlQ59djg7WHEu6qz4fmmMlC15ccKU?authuser=0" target="_blank" aria-label="Open folder for &quot;FSW 23&amp; 24 | Tech Full Stack Web Development Bootcamp&quot; in Google Drive"></a>
      </div>
    </footer>
      </div>`
  )
})

console.log(bodyContent)
const body = document.querySelector(".classes")
body.innerHTML = bodyContent.join('')