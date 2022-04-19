window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var menu = document.querySelector('.menu');
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

// projects read more 
let more = document.querySelectorAll('.more');
for (let i=0; i<more.length; i++){
    more[i].addEventListener('click', function(){
        more[i].parentNode.classList.toggle('active')
    });
}

// achievements gallery
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let gallery = document.querySelectorAll('.gallery');

let i=0;
gallery[i].firstChild.classList.toggle('show');
prev.classList.add('inactive');
next.addEventListener('click', function(){
    if(i < gallery.length - 1){
        gallery[i].firstChild.classList.toggle('show');
        gallery[i+1].firstChild.classList.toggle('show');
        prev.classList.remove('inactive');
        i++;
    }
    if(i == gallery.length - 1){
        next.classList.add('inactive');
    }
});
prev.addEventListener('click', function(){
    if(i > 0){
        gallery[i].firstChild.classList.toggle('show');
        gallery[i-1].firstChild.classList.toggle('show');
        next.classList.remove('inactive');
        i--;
    }
    if(i == 0){
        prev.classList.add('inactive');
    }
});