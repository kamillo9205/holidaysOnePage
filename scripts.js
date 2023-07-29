window.addEventListener("DOMContentLoaded", (event) => {
    let menuBtn = document.getElementById("menuBtn");
    let navWrapperList = document.querySelector(".nav__wrapper__list");


    menuBtn.addEventListener("click",  function(){
        navWrapperList.classList.toggle('nav__wrapper__list--active')
    });
  });

