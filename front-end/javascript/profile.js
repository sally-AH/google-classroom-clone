

document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.getElementById('profileImage');
    const fileInput = document.getElementById('fileInput');
  
    profileImage.addEventListener('click', () => {
      fileInput.click(); 
    });
  
    fileInput.addEventListener('change', () => {
      const selectedFile = fileInput.files[0];
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = (e) => {
          profileImage.src = e.target.result;
        };
        reader.readAsDataURL(selectedFile);
      }
    });
  });
  
async function editProfile() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const dateOfBirth = document.getElementById('date').value;
  
    const user_id = 1;

    const profileData = {
      user_id: user_id,
      f_name: firstName,
      l_name: lastName,
      phone_number: phoneNumber,
      dob: dateOfBirth,
      photo: "" 
    };
  
    try {
      const response = await fetch('http://localhost/google-classroom-clone/back-end/php/editProfile.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileData),
      });
  
      const data = await response.json();
      if (data.status === true) {
        showResult('Profile updated successfully', true);
        clearInput();
      } else {
        showResult('Failed to update profile. Please try again.', false);
      }
    } catch (error) {
      console.error('Error:', error);
      showResult('An error occurred while updating the profile. Please try again later.', false);
    }
  }

  function clearInput() {
    document.getElementById('firstName').value = '';
    document.getElementById('lastName').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('date').value = '';
  }

  function showResult(message, isSuccess) {
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = message;
  
    if (isSuccess) {
      resultContainer.style.color = 'green';
    } else {
      resultContainer.style.color = 'red';
    }
  }
  

