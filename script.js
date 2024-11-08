function checkAnswer() {
    const answer = [
        document.getElementById("digit-1").value,
        document.getElementById("digit-2").value,
        document.getElementById("digit-3").value,
        document.getElementById("digit-4").value
    ].join("");

    const errorMessage = document.getElementById("error-message");

    if (answer === "29+1") {
        // Risposta corretta: mostra la seconda pagina
        document.getElementById("first-page").style.display = "none";
        document.getElementById("second-page").style.display = "block";
    } else {
        // Risposta sbagliata: mostra il messaggio di errore
        errorMessage.textContent = "Risposta sbagliata, riprova!";
        errorMessage.style.display = "block";

        // Rimuovi il messaggio dopo 3 secondi
        setTimeout(() => {
            errorMessage.style.display = "none";
        }, 3000);
    }
}

// Auto-move al prossimo input box
const inputs = document.querySelectorAll(".digit-input");
inputs.forEach((input, index) => {
    input.addEventListener("input", () => {
        if (input.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    });
});

window.onload = function() {
    const video = document.getElementById('myVideo');
    
    // Avviare il video a schermo intero
    video.play();
    video.requestFullscreen().catch(err => {
        console.log("Errore nel passaggio a schermo intero: ", err);
    });
};

// Seleziona le input box e il bottone
const inputs = document.querySelectorAll(".digit-input");
const button = document.querySelector("button");

inputs.forEach(input => {
    input.addEventListener("focus", () => {
        // Quando la input box ottiene il focus, scrolla la pagina
        window.scrollTo({
            top: input.offsetTop - 50, // Scorri sopra l'input box di 50px per evitare che venga coperta
            behavior: "smooth" // Aggiungi una transizione fluida
        });
    });
});

button.addEventListener("focus", () => {
    // Quando il bottone ottiene il focus, scrolla la pagina
    window.scrollTo({
        top: button.offsetTop - 50, // Scorri sopra il bottone di 50px
        behavior: "smooth"
    });
});
