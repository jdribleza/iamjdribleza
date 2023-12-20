let download_btn = document.getElementById("download_cv");

// execute the download resume button
download_btn.onclick = function (e) {
    e.preventDefault();
    location.href = "assets/docs/iamjdribleza.docx";
};