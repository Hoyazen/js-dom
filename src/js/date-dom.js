// Récupération des éléments du DOM
const button = document.querySelector("#button-choice");
const dateInput = document.querySelector('input[name="dateInput"]');
const textChoice = document.querySelector("#text-choice");

// Tableaux pour afficher les noms en toutes lettres
const jours = [
  "dimanche",
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi"
];

const mois = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre"
];

// Fonction appelée au clic
function afficherChoix() {
  if (!dateInput.value) {
    textChoice.value = "Choisissez une date";
    return;
  }

  const dateChoisie = new Date(dateInput.value);
  const radioSelectionne = document.querySelector('input[name="radioChoice"]:checked').value;

  if (radioSelectionne === "day") {
    textChoice.value = jours[dateChoisie.getDay()];
  } 
  else if (radioSelectionne === "month") {
    textChoice.value = mois[dateChoisie.getMonth()];
  } 
  else if (radioSelectionne === "remainingDay") {
    const finAnnee = new Date(dateChoisie.getFullYear(), 11, 31);
    const differenceMs = finAnnee - dateChoisie;
    const joursRestants = Math.ceil(differenceMs / (1000 * 60 * 60 * 24));
    textChoice.value = joursRestants;
  }
}

// Ajout de l'évènement sur le bouton
button.addEventListener("click", afficherChoix);