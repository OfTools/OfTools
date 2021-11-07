window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("navBar", window.scrollY > 0);
});
