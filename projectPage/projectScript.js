const projectsBoxs = document.querySelectorAll('.project');

const correctPassword = 'myportfolio0622';
const formCloseBtn = document.querySelector('.formCloseBtn');
const sidebarBtns = document.querySelectorAll('.openSideBar');
const sideBar = document.querySelector('.sideNav');
const closeBtn = document.querySelector('li.closeBtn');

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
        let posY = document.documentElement.scrollTop || document.body.parentElement.scrollTop;
        let posX = document.documentElement.offsetWidth;
        confirmCopyBox.style.top = `${posY + 20}px`;
        confirmCopyBox.style.left = `${posX/2}px`;
        confirmCopyBox.classList.add('confirmCopyBoxFade');
    } catch (err) {
        console.log('failed');
        alert.error('Failed to copy: ', err);
    }
}


projectsBoxs.forEach((eachBox)=>{
    eachBox.addEventListener("click", (event) => {
        const className = eachBox.classList;
        const detailBox = document.querySelector(`.detailWindow.${className[1]}`);
        const detailBoxY = (window.scrollY);
        detailBox.style.top = `${(detailBoxY)}px`;
        detailBox.classList.toggle("visible"); 
    });
})

document.addEventListener('click', (event) => {
    const detailWindows = document.querySelectorAll('.detailWindow');
    detailWindows.forEach((detailBox) => {
        if (detailBox.classList.contains('visible') && !detailBox.contains(event.target) && !Array.from(projectsBoxs).some(box => box.contains(event.target))) {
            detailBox.classList.remove('visible');
        }
    });
});






