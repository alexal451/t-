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

// Funzione per iscriversi alla newsletter
function subscribeToNewsletter(event) {
    event.preventDefault(); // Prevenire il submit del form
    const email = document.getElementById('emailInput').value;
    if (email) {
        // Qui potresti aggiungere la logica per inviare l'email a un server
        alert('Iscrizione alla newsletter completata! Ottieni il tuo 10% di sconto!'); // Placeholder per conferma
        document.getElementById('newsletter').classList.remove('active');
    } else {
        alert('Per favore, inserisci un indirizzo email.');
    }
}
