window.addEventListener("scroll", ()=>
{
    document.querySelector('nav').classList.toggle("window-scroll", window.scrollY > 0)
})

document.querySelectorAll('.faq').forEach(item => {
    item.addEventListener('click', () => {
        // item.classList.toggle('open')
        const detail = item.querySelector('p')
        if(detail.style.maxHeight){detail.style.maxHeight = null}
        else {detail.style.maxHeight = detail.scrollHeight + "px";}

        const icon = item.querySelector('.faq_icon h3')
        if(icon.innerHTML == "+") {icon.innerHTML = "-"}
        else{icon.innerHTML = "+"}
    })
})

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2
        }
    }
  });

const navMenu = document.querySelector('.nav_menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
    navMenu.style.display = "flex";
    menuBtn.style.display = "none";
    closeBtn.style.display = 'inline-block'
})

closeBtn.addEventListener('click', () =>{
    navMenu.style.display = 'none';
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})