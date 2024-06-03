var language = document.getElementById('spanish');
language.addEventListener('click', idioma);


function idioma(){
    let id=document.getElementById('english');
    if (id==false){
     location.href="../src/setting.html";
    } else{
     location.href="../src/ingles/settings.html";
    }
}

var language2 = document.getElementById('english');
language2.addEventListener('click', idioma2);

function idioma2(){
    let id=document.getElementById('spanish');
    if (id==false){
     location.href="../src/ingles/settings.html";
    } else{
     location.href="../setting.html";
    }
}


