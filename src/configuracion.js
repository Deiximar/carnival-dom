function changeButton() {
    const musicbutton = document.getElementById('music');
    const nomusicbutton = document.getElementById('no-music');
    
    if (musicbutton.style.display === 'none') {
        musicbutton.style.display = 'inline-block';
        nomusicbutton.style.display = 'none';
    } else {
        musicbutton.style.display = 'none';
        nomusicbutton.style.display = 'inline-block';
    }
}

function changeButton2() {
    const soundbutton = document.getElementById('sound');
    const mutebutton = document.getElementById('mute');
    
    if (soundbutton.style.display === 'none') {
        soundbutton.style.display = 'inline-block';
        mutebutton.style.display = 'none';
    } else {
        soundbutton.style.display = 'none';
        mutebutton.style.display = 'inline-block';
    }
}

function changeButton3() {
    const spanishbutton = document.getElementById('spanish');
    const englishbutton = document.getElementById('english');
    
    if (spanishbutton.style.display === 'none') {
        spanishbutton.style.display = 'inline-block';
        englishbutton.style.display = 'none';
    } else {
        spanishbutton.style.display = 'none';
        englishbutton.style.display = 'inline-block';
    }
}


document.getElementById('changeuser').addEventListener('click', function() {
    document.getElementById('changeuser').style.display = 'none';
    document.getElementById('userForm').style.display = 'flex';
});

document.getElementById('check').addEventListener('click', function() {
    const userInput = document.getElementById('userInput');
    const userName = userInput.value.trim();

    if (userName) {
        alert(`Tu nombre de usuario es ${userName}`);

        // Esconder el formulario y volver a mostrar el botón de cambio de usuario
        document.getElementById('userForm').style.display = 'none';
        document.getElementById('changeuser').style.display = 'flex';
        userInput.value = ''; // Limpiar el campo de texto
    } else {
        alert('Por favor, escribe tu nombre de usuario');
    }
});