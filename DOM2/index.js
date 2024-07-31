


// Fonction pour générer une couleur aléatoire
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Ajouter un écouteur d'événements pour DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Sélectionner les éléments du DOM
    const colorBox = document.querySelector('.boite-de-couleur');
    const changeColorButton = document.querySelector('.charge-color-btn');

    // Ajouter un écouteur d'événements au bouton
    changeColorButton.addEventListener('click', function () {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});

document.getElementById("change-btn").addEventListener("click", function() {
    var colorBox = document.getElementById("color-box");
    
    
    if (colorBox.style.backgroundColor === "red") {
        colorBox.style.backgroundColor = "blue";
    } else {
        colorBox.style.backgroundColor = "red";
    }
});

function getRandomColor() {
    // Génère des valeurs RGB aléatoires comprises entre 0 et 255
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    

    return rgb($red, $green, $blue);
}

const couleurAleatoire = getRandomColor();
console.log("Couleur aléatoire RGB:", couleurAleatoire);

