function showMusicSetting() {
    const musicbutton = document.getElementById('music');
    const nomusicbutton = document.getElementById('no-music');

    if (localStorage.getItem('musicDisabled') === 'true') {
        musicbutton.style.display = 'none';
        nomusicbutton.style.display = 'inline-block';

    } else {
        musicbutton.style.display = 'inline-block';
        nomusicbutton.style.display = 'none';
    }
}

function changeMusicSetting() {
    if (localStorage.getItem('musicDisabled') === 'true') {
        localStorage.setItem('musicDisabled', 'false');
    } else {
        localStorage.setItem('musicDisabled', 'true');
    }
    showMusicSetting();
}

function showSoundSetting() {
    const soundbutton = document.getElementById('sound');
    const mutebutton = document.getElementById('mute');

    if (localStorage.getItem('soundDisabled') === 'true') {
        soundbutton.style.display = 'none';
        mutebutton.style.display = 'inline-block';
    } else {
        soundbutton.style.display = 'inline-block';
        mutebutton.style.display = 'none';
    }
}
function changeSoundSetting() {
    if (localStorage.getItem('soundDisabled') === 'true') {
        localStorage.setItem('soundDisabled', 'false');
    } else {
        localStorage.setItem('soundDisabled', 'true');
    }
    showSoundSetting();
}

function changeLanguage() {
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


document.getElementById('changeuser').addEventListener('click', function () {
    document.getElementById('changeuser').style.display = 'none';
    document.getElementById('userForm').style.display = 'flex';
});

document.getElementById('check').addEventListener('click', function () {
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

showMusicSetting();
showSoundSetting();