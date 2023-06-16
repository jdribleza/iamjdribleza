var main_header = document.querySelector('header');
var menu_btn_cntnr = document.querySelector('.c-menu-btn-cntnr');
var menu_btn = document.querySelector('.c-menu-btn');
var close_btn = document.querySelector('.c-close-menu-btn > a');
var nav_link_cntnr = document.querySelector('.c-menu-list');
var nav_link_btn = document.querySelector('.c-menu-list > li > a');
var to_top = document.querySelector('.to-top');
var fb_link = document.querySelector('.fb-link');

//OPENS MENU WHEN MENU BUTTON CLICKED
menu_btn.addEventListener('click', function(e){
    e.preventDefault();
    nav_link_cntnr.style.display = 'flex';
    this.style.display = 'none';
    nav_link_cntnr.style.position = 'fixed';
});

//CLOSE MENU WHEN X BUTTON CLICKED
close_btn.addEventListener('click', function(e){
    e.preventDefault();
    nav_link_cntnr.style.display = 'none';
    menu_btn.style.display = 'flex';
});

//CLOSE MENU WHEN LINK CLICKED AND NAVIGATE
function navigate(){
    nav_link_cntnr.style.display = 'none';
    menu_btn.style.display = 'flex';
}

//OPEN NEW WINDOW AND REDIRECT FACEBOOK PAGE
fb_link.addEventListener('click', function(e){
    e.preventDefault();
    window.open('https://web.facebook.com/mrTralala89/');
});

//CHANGE NAVIGATION BAR BACKGROUND COLOR
window.onscroll = function(){
    if (window.pageYOffset > window.innerHeight-400){
        to_top.style.display = 'flex';
    } else {
        to_top.style.display = 'none';
    }
}


