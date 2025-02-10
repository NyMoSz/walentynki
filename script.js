document.addEventListener("DOMContentLoaded", function () {
    const h1 = document.querySelector("h1");
    const buttonYes = document.querySelector("button:nth-of-type(1)");
    const buttonNo = document.querySelector("button:nth-of-type(2)");
    const img = document.querySelector("img");

    const texts = [
        "Na pewno?",
        "Proszę, zgódź się!",
        "Ale ja Cię lubię...",
        "Nie rób mi tego 🤧",
        "Jeszcze raz przemyśl...",
        "Błagam!",
        "Jesteś pewna?",
        "No weźźźźźź",
        "PROSZE😭😭",
        "ostatnia szansza!",
        "No teraz to muszisz... :)"
    ];
    
    let textIndex = 0;
    let textElement = null; // Tekst pojawia się dopiero po kliknięciu „nie”
    let buttonYesSize = 1.0; // Rozmiar przycisku „tak”

    buttonNo.addEventListener("click", function () {
        // Tworzy napis tylko przy pierwszym kliknięciu
        if (!textElement) {
            textElement = document.createElement("p");
            textElement.style.fontSize = "2rem";
            textElement.style.fontWeight = "800"
            textElement.style.fontFamily = "Imperial Script, serif";
            document.body.appendChild(textElement);
        }

        // Zmienia tekst na kolejny
        textElement.textContent = texts[textIndex];
        textIndex = (textIndex + 1) % texts.length;

        // Powiększa przycisk "tak"
        buttonYesSize += 0.2;
        buttonYes.style.transform = `scale(${buttonYesSize})`;
    });

    buttonYes.addEventListener("click", function () {
        h1.textContent = "YEEEEEEEEEEY  KOCHAM   CIĘ!";
        h1.style.color = "red";
        h1.style.fontSize = "5rem";

        img.src = "gif.gif"; // Podmień na nowy GIF
        img.style.width = "20%"; // Zmniejszenie nowego GIF-a

        // Usunięcie przycisków i tekstu
        buttonYes.remove();
        buttonNo.remove();
        if (textElement) textElement.remove();
    });

    // Początkowe zmniejszenie GIF-a
    img.style.width = "25%";
});
