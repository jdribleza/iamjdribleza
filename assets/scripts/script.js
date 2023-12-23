
const links = document.getElementsByClassName("social_link");

const linkPressed = e => {
    // prevent the element from navigating when clicked
    e.preventDefault();

    // get the element id
    let element_id = e.target.getAttribute("id");

    let link;

     switch (element_id){
        case "fb_link" : link = "https://web.facebook.com/iamjdribleza/";break;
        case "gh_link" : link = "https://github.com/jdribleza";break;
        default : link = "https://www.linkedin.com/in/jdribleza-9b252427b";break;
    }

    // open new window and redirect to specified link
    window.open(link);

}

// loop links to add event when clicked
for(let link of links){
    link.addEventListener("click", linkPressed);
}

// For download CV button
document.getElementById("download_cv").onclick = e => {
    e.preventDefault();
    window.location = "assets/docs/iamjdribleza.docx";
}