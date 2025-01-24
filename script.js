// Mostra il pop-up della newsletter dopo 3 secondi
window.onload = () => {
    setTimeout(() => {
        document.getElementById('newsletter').classList.add('active');
    }, 3000);
};

// Chiudi il pop-up della newsletter
function subscribeToNewsletter() {
    const email = document.getElementById('emailInput').value;
    if (email) {
        // Qui potresti aggiungere la logica per inviare l'email a un server
        alert('Iscrizione alla newsletter completata!'); // Placeholder per conferma
        document.getElementById('newsletter').classList.remove('active');
    } else {
        alert('Per favore, inserisci un indirizzo email.');
    }
}

// Funzione per navigare a una pagina
function navigateTo(url) {
    window.location.href = url;
}
