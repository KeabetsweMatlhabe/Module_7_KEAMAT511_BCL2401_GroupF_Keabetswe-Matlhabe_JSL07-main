 document.addEventListener('DOMContentLoaded', function () {
    const cardForm = document.getElementById('cardForm');
    const modal = document.getElementById('modal');
    const certificateContent = document.getElementById('certificateContent');
    const closeModal = document.querySelector('.close');
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    cardForm.addEventListener('submit', function (e) {  /*an event listener is attactched to the "cardForm" to listen to the "submit" after that, the (e.ptrventDefault()) is used to prevent defualt refreshing of the page */
      e.preventDefault();
  
      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById('personalMessage');
      const courseNameInput = document.getElementById('courseName')
      ; 
  
      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input
  
      if (studentName.trim() === '' || personalMessage.trim() === '') {
        alert('Please fill in all fields');
        return;
      }
  
      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
      <h1>Certificate Of Archievemt</h1>
      <p>This is to Certify that</p>
      <h3>${studentName}</h3>
      <p>Has Almost Completed The</p>
      <p>Course Name: ${courseName}</p>
      <p>With Legendary Perseverance and the world-class bad-assery for not giving up 🏆</p>
      <p>Personal Message: ${personalMessage}</p>
      <img src="./logo.png" style="padding:25px; height:75px; alt="Codespace logo">
      <p>${personalMessage}🐐 </p>
    `;
    
      //  Display the modal
      modal.style.display = 'block';
  
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
    });
  
    //  🚨 Close the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
      modal.style.display = 'none'; //added an event listner that when the buton is clicked the modal should close
    });
  });
  