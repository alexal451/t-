document.addEventListener('click', function(event) {
    if (event.target.matches('.section')) {
        navigateTo(event.target.getAttribute('data-url'));
    }
});

// Funzione per navigare a una pagina
function navigateTo(url) {
    window.location.href = url;
}

// Mostra il pop-up della newsletter appena il sito si carica
window.onload = () => {
    document.getElementById('newsletter').classList.add('active');
};

// Funzione per chiudere il pop-up della newsletter
document.querySelector('.close-newsletter').addEventListener('click', function() {
    document.getElementById('newsletter').classList.remove('active');
});

// Funzione per iscriversi alla newsletter con validazione dell'email
function subscribeToNewsletter(event) {
    event.preventDefault();
    const email = document.getElementById('emailInput').value;
    if (!email) {
        alert('Per favore, inserisci un indirizzo email.');
        return;
    }
    if (!isValidEmail(email)) {
        alert('Per favore, inserisci un indirizzo email valido.');
        return;
    }
    // Qui potresti aggiungere la logica per inviare l'email a un server
    alert('Iscrizione alla newsletter completata! Ottieni il tuo 10% di sconto!'); // Placeholder per conferma
    document.getElementById('newsletter').classList.remove('active');
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
