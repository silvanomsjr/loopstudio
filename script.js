const menu = document.querySelector('.nav-menu');
const btnMenu = document.querySelector('.menu-div img');
let switchImg = 0;

if(window.innerWidth >= 660){
    document.querySelector('.img-div img').src = "./images/desktop/image-interactive.jpg";
}

window.addEventListener('resize', () =>{
    if(window.innerWidth >= 660){
        document.querySelector('.img-div img').src = "./images/desktop/image-interactive.jpg";
    }
    else{
        document.querySelector('.img-div img').src = "./images/mobile/image-interactive.jpg";
    }
})


btnMenu.addEventListener('click', () =>{
    menu.classList.toggle('active');
    document.body.classList.toggle('active');
    if(switchImg == 0){
        btnMenu.src =  './images/icon-close.svg';
        switchImg = 1;
    }else{
        btnMenu.src =  './images/icon-hamburger.svg';
        switchImg = 0;
    }
})