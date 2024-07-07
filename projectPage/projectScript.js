const addproject = document.querySelector('.addNewProject');
const addBtn = document.querySelector('.addBtn');
const addprojectForm = document.querySelector('.addProjectWindow');
const projectsBox = document.querySelector('.projects');
const newProjectFieldSet = document.querySelector("fieldset");
const correctPassword = 'myportfolio0622';
const formCloseBtn = document.querySelector('.formCloseBtn');
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

function openAddProjectWindow(){
    addprojectForm.style.display = 'flex';
}
function closeAddProjectWindow(){
    addprojectForm.style.display = 'none';
}
addproject.onclick = openAddProjectWindow;
formCloseBtn.onclick = closeAddProjectWindow;

function add_projects(project){
    const code = project.elements.code.value;
    const wrongCodeMessage = document.querySelector('.wrongCode');
    wrongCodeMessage.innerHTML='';
    if(code === correctPassword){
        // console.log('correct code');
        const name = project.elements.projectName.value;
        const description = project.elements.projectDescription.value;
        const link = project.elements.projectLink.value;
        let newProject = document.createElement('div');
        newProject.classList.add('project');
        newProject.innerHTML = `
                <h3 class="projectTitle"><a href="#">${name}</a></h3>
                <p class="projectDetail">${description}</p>
                <div class="projectImg">${link}</div>
        `; 
        // projectsBox.appendChild(newProject);
        projectsBox.insertBefore(newProject, addproject);
        addprojectForm.style.display = 'none';
    } else{
        wrongCodeMessage.innerHTML='wrong password';
        wrongCodeMessage.style.marginTop = '-10px';
    }
    
    
}

document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.sideBarSocialIcon');
    icons.forEach(icon => {
      icon.classList.add('sidebarIconAnimate');
    });
  });


addBtn.addEventListener('click', (event)=>{
    // console.log(newProjectFieldSet.elements.projectName.value);
    add_projects(newProjectFieldSet);
    event.preventDefault();
    addprojectForm.reset();
})

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