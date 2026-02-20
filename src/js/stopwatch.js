/* Variable globales */
// Références vers les objets du DOM
let stopwatch = document.getElementById("chrono");
let startButton = document.getElementById("startButton");
let pauseButton = document.getElementById("pauseButton");
let stopButton = document.getElementById("stopButton");

// Fonction auto-exécutable d'intialisation : permet de ne pas rendre globale les variables utilisées dans la fonction
(function () {
	// Ajout des fonctions qui seront appelées suivant les évènement
	startButton.addEventListener("click", startChrono, false);

})();

// Démarre le chronomètre et masque les boutons inutiles
function start(e) {

}

function pause() {
}

function stopChrono() {
}