


var close_btn = document.querySelector('.c-close-menu-btn > a');
var menu_btn = document.querySelector('.c-menu-btn');
var menu_cntnr = document.querySelector('.c-open-menu');
var menu_opxns = document.querySelector('.c-menu-list > li > a');
var menu_contnr = document.querySelector('.c-menu-list');
var navigation_panel = document.querySelector('header');
var to_top = document.querySelector('.to-top');
var fb_link = document.querySelector('.fb-link');

//OPENS MENU WHEN MENU BUTTON CLICKED
menu_btn.addEventListener('click', function(e){
    e.preventDefault();
    menu_contnr.style.display = 'flex';
    this.style.display = 'none';
    menu_contnr.style.position = 'fixed';
});

//CLOSE MENU WHEN X BUTTON CLICKED
close_btn.addEventListener('click', function(e){
    e.preventDefault();
    menu_contnr.style.display = 'none';
    menu_btn.style.display = 'flex';
});

//CLOSE MENU WHEN LINK CLICKED AND NAVIGATE
menu_opxns.addEventListener('click', function(e){
    e.preventDefault();
    menu_contnr.style.display = 'none';
    menu_btn.style.display = 'flex';
});

//CHANGE NAVIGATION BAR BACKGROUND COLOR
/*
window.onscroll = function(){
    if (window.pageYOffset > window.innerHeight-400){
        navigation_panel.style.boxShadow = '0 1px 5px #999999';
        to_top.style.display = 'flex';
    } else {
        navigation_panel.style.boxShadow = 'none';
        to_top.style.display = 'none';
    }
}*/

fb_link.addEventListener('click', function(e){
    e.preventDefault();
    window.open('https://web.facebook.com/mrTralala89/');
});

//alert(window.innerWidth);
