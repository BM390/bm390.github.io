//hamburger menu

const hamMenu = document.querySelector('.ham-menu');

const offScreenMenu = document.querySelector('.off-screen-menu');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
})

//text effect

let myElement = document.getElementById("myBlur");
     myElement.addEventListener("click", ()=>{
        myElement.classList.toggle("blur2");
     })
    
  

