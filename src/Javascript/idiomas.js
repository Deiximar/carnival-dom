var language = document.getElementById('spanish');
language.addEventListener('click', idioma);


function idioma(){
    let id=document.getElementById('englishbutton');
    if (id==false){
     location.href="../src/configuracion.html";
    }else{
     location.href="../src/ingles/settings.html";
    }
}

var language2 = document.getElementById('english');
language2.addEventListener('click', idioma2);

function idioma2(){
    let id=document.getElementById('spanishbutton');
    if (id==false){
     location.href="../src/ingles/settings.html";
    }else{
     location.href="../configuracion.html";
    }
}


