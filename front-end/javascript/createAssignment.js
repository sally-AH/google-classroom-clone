document.addEventListener("DOMContentLoaded" , ()=>{


  document.querySelector(".btnsubmit").addEventListener('click', async (e) => {
    const fileInput = document.getElementById('fileInput');
    const selectedFile = fileInput.files[0];
    
    // Extract the file name from the selected file
    const fileName = selectedFile ? selectedFile.name : '';
    console.log(11)
    const formData = new FormData();
    formData.append('uploadedFile', selectedFile);
    
    // Include the file name in the body object
    const body = {
      post_type_id: 1,
      teacher_id: JSON.parse(localStorage.getItem("user_id")),
      end_date: document.querySelector(".dueDate").value,
      start_date: new Date().toISOString(),
      post_title: document.querySelector(".post_title").value,
      post_body: document.querySelector(".post_content").value,
      post_attachment: fileName, // Set the file name here
      post_grade: document.querySelector(".grade").value,
      category_id: document.querySelector(".topic").value
    };
  
    const parsedBody1 = JSON.stringify(body);
    const response1 = await fetch("http://localhost/google-classroom-clone/back-end/php/createPost.php", {
      method: "POST",
      body: parsedBody1
    });
const id1 = JSON.parse(localStorage.getItem("user_id"))
  const url1 = "http://localhost/google-classroom-clone/back-end/php/getClasses.php"
  const requestBody2= {
    user_id : localStorage.getItem("user_id")
  }
  const parsedBody2 = JSON.stringify(requestBody2)
  const response2 = await fetch(url1 , {
    method:"POST",
    body:parsedBody2
  })
  const data2 = await response2.json()




const id3 = JSON.parse(localStorage.getItem("user_id"))
  const url3 = "http://localhost/google-classroom-clone/back-end/php/addUserToClass.php"
  const requestBody3 = {
    user_id : localStorage.getItem("user_id"),
    class_id : 1
  }
  const parsedBody3 = JSON.stringify(requestBody3)
  const response3 = await fetch(url3 , {
    method:"POST",
    body:parsedBody3
  })
  const data3 = await response3.json()
  console.log(data3)
  responseData = data3.data




const id4 = JSON.parse(localStorage.getItem("user_id"))
  const url4 = "http://localhost/google-classroom-clone/back-end/php/getNewestPost.php"
  
  const response4 = await fetch(url4 , {
    method:"POST",
    
  })  



  const data4 = await response4.json()
  console.log(data4)
  responseData = data4


  const url = "http://localhost/google-classroom-clone/back-end/php/addToClassRoomPosts.php"
  const requestBody= {
    class_id : 1,
    post_id : data4
  }
  const parsedBody = JSON.stringify(requestBody)
  const response = await fetch(url , {
    method:"POST",
    body:parsedBody
  })
  const data = await response.json()
  console.log(data)
  responseData = data

console.log(responseData)


})



})