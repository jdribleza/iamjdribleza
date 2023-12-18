let element = (id) =>{
    let el = document.getElementById(id);
    return el;
}

let c_element = (classN) =>{
    let c_el = document.querySelector(classN);
    return c_el;
}

window.onload = function(){
    element('iamjdribleza').style.transform = 'none';
    element('prologue-msg').style.transform = 'none';
}

/*
(function(){
    loadPrologue();
})();*/


/*
document.onscroll = function(){
    if (window.innerHeight - 300 < window.scrollY) {
        element('navigation-bar').style.background = '#FFFFFF';
    } else {
        element('navigation-bar').style.background = 'transparent';
    }
}*/

window.onscroll = function(){
    var scroll = window.scrollY;
    if (scroll > 500) {
        element('brdr-fx').style.visibility = 'visible';
        element('brdr-fx').style.height = '100%';
        element('brdr-fx').style.width = '100%';
        element('about-title').style.color = 'red';
    } else {
        element('brdr-fx').style.visibility = 'hidden';
        element('brdr-fx').style.height = '0';
        element('brdr-fx').style.width = '0';
        element('about-title').style.color = 'red';
    }
}


