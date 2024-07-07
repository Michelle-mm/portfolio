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


function animateScrollToView(elements, animateClassName, needSeperate){
        // Create the observer like the examples above 
        const observer = new IntersectionObserver(entries => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    if(needSeperate){
                        entry.target.style.animationDelay = `${index*0.5}s`;
                    }
                    // observer.unobserve(entry.target);
                    entry.target.classList.add(animateClassName);
                    return;
            }  
                entry.target.classList.remove(animateClassName);
            });
        });
        elements.forEach((element) => {
            observer.observe(element);
            
        });
}

let needSeperate = true;
const socialIcons = document.querySelectorAll('.social-icon');
const sideBarSocialIcons = document.querySelectorAll('.sideBarSocialIcon');
const texts = document.querySelectorAll('.text');
const projectBox = document.querySelectorAll('.projectBox');
document.addEventListener('DOMContentLoaded', 
        // animateScrollToView(socialIcons, 'iconAnimate', !needSeperate),
        animateScrollToView(sideBarSocialIcons, 'iconAnimate', needSeperate),
        animateScrollToView(texts, 'text-transition', !needSeperate),
        animateScrollToView(projectBox, 'projectBox-transition', !needSeperate)
);

//copy email addr to clipboard 
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
// emailBtn.onclick = copyToClipboard("rilakkuma71945@gmail.com");

// window.addEventListener('load', function() {
//     const loading = document.getElementById('loading');
//     loading.classList.add('loading-hidden');
//     loading.addEventListener('transitionend', ()=>{
//         document.body.removeChild('loading');
//     })
// });