document.querySelector(".upload").addEventListener('change', () => {
  const fileInput = document.getElementById('fileInput');

  // Add an event listener to the input element to listen for file selection
  fileInput.addEventListener('change', function () {
    // When a file is selected, the 'change' event is triggered
    const selectedFile = fileInput.files[0];

    // You can now access information about the selected file
    const fileInfo = `
          File name: ${selectedFile.name}<br>
          File type: ${selectedFile.type}<br>
          File size: ${selectedFile.size} bytes
      `;

    // Display the file information in the fileInfo div
    const fileInfoDiv = document.getElementById('fileInfo');
    fileInfoDiv.innerHTML = fileInfo;
    console.log(fileInfo)
    // You can perform any additional actions with the selected file here.
    // For example, you might want to upload the file to a server using AJAX.
  });

})
document.querySelector(".btnsubmit").addEventListener('click', async (e) => {
  const fileInput = document.getElementById('fileInput');
  const selectedFile = fileInput.files[0];
  const formData = new FormData();
  formData.append('uploadedFile', selectedFile);
  const response = await fetch("http://localhost/google-classroom-clone/back-end/php/test.php", {
    method: "POST",
    body: formData
  })


  const data = await response.json()
  console.log(data)
});

