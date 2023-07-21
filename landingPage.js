

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
      </div>`
  )
})

console.log(bodyContent)
const body = document.querySelector(".classes")
body.innerHTML = bodyContent.join('')