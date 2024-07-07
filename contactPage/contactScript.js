const sidebarBtns = document.querySelectorAll('.openSideBar');
const sideBar = document.querySelector('.sideNav');
const closeBtn = document.querySelector('#closeBtn');

function showSideBar() {
    sideBar.style.display = 'flex';
}
function closeSideBar() {
    sideBar.style.display = 'none';
}
sidebarBtns.forEach((sidebarBtn)=>sidebarBtn.onclick = showSideBar);
closeBtn.onclick = closeSideBar;

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.sideBarSocialIcon');
    icons.forEach(icon => {
      icon.classList.add('sidebarIconAnimate');
    });
  });


const emailBtns = document.querySelectorAll('.emailBtn');
const confirmCopyBox = document.querySelector('.confirmCopyBox');
emailBtns.forEach((emailBtn)=>{
    emailBtn.addEventListener("click", () => {
        copyToClipboard("rilakkuma71945@gmail.com");
        confirmCopyBox.classList.remove('confirmCopyBoxFade');
    });
    }
);
async function copyToClipboard(text){
    try {
        console.log('click');
        await navigator.clipboard.writeText(text);
        confirmCopyBox.classList.add('confirmCopyBoxFade');
    } catch (err) {
        console.log('failed');
        alert.error('Failed to copy: ', err);
    }
}

const commentForm = document.querySelector('.contactForm');
commentForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    // Validate form fields
    const name = commentForm.elements.Name.value;
    const email = commentForm.elements.Email.value;
    const comments = commentForm.elements.comments.value;

    console.log('name', name);
    console.log('email', email);
    console.log('comment', comments);

    if (!name || !email) {
        const errorMessage = document.querySelector('.errorMessage');
        errorMessage.innerText = 'Please fill out all fields.';
        errorMessage.style.display = "block";
        return;
    }

    // Prepare data for submission
    let formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('comment', comments);

    // // Submit data via AJAX
    // fetch('submit_form.php', {
    //     method: 'POST',
    //     body: formData
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         document.getElementById('message').innerText = 'Form submitted successfully!';
    //         document.getElementById('myForm').reset(); // Reset the form fields
    //     } else {
    //         document.getElementById('message').innerText = 'Error submitting form. Please try again.';
    //     }
    // })
    // .catch(error => {
    //     document.getElementById('message').innerText = 'Error submitting form. Please try again.';
    // });
})
