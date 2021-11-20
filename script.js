window.addEventListener('scroll',function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 10);
})

VanillaTilt.init(document.querySelectorAll(".card"),{
    max: 20,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});
