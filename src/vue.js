export function afficheCanon(etatCanon) {
	document.getElementById('vitesse-canon').innerHTML = etatCanon.vitesse;
	document.getElementById('inclinaison-canon').innerHTML = etatCanon.inclinaison;
}

export function afficheCible(cible) {
	document.getElementById('distance-cible').innerHTML = cible.distance().toFixed(2);
	document.getElementById('rayon-cible').innerHTML = cible.rayon();
}

function resultatsTir(resultat) {
	
}

export function effacerResultatsTir() {
	
}

export function ajouterResultatTir(resultat) {
	
}

function onLoad() {
}

function onUnload() {
  window.removeEventListener("load", onLoad, false);
  window.removeEventListener("unload", onUnload, false);
}

window.addEventListener("load", onLoad, false);
window.addEventListener("unload", onUnload, false);