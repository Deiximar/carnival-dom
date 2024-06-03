var spanish = document.getElementById('spanish');
spanish.addEventListener('click', changeToEnglish);


function changeToEnglish() {
    let id = document.getElementById('english');
    if (id == false) {
        location.href = "../src/setting.html";
    } else {
        location.href = "../src/ingles/settings.html";
    }
}

var english = document.getElementById('english');
english.addEventListener('click', changeToSpanish);

function changeToSpanish() {
    let id = document.getElementById('spanish');
    if (id == false) {
        location.href = "../src/ingles/settings.html";
    } else {
        location.href = "../setting.html";
    }
}


