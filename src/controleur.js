import * as vue from './vue.js';
import * as mod from './modele.js';

document.getElementById('interface').addEventListener('click', onInterface, false);

function onLoad() {
	mod.nouvellePartie();
	vue.afficheCanon(mod.canonCourant().etat());
	vue.afficheCible(mod.cibleCourante());
}

function onUnload() {
  window.removeEventListener("load", onLoad, false);
  window.removeEventListener("unload", onUnload, false);
}

function onInterface(e) {
	if (e.target.id == "augmenter") {
		mod.canonCourant().leve();
	}
	else if (e.target.id == "diminuer") {
		mod.canonCourant().baisse();
	}
	else if (e.target.id == "tirer") {
		
	}
	else if (e.target.id == "nouveau") {
		
	}
	vue.afficheCanon(mod.canonCourant().etat());
}

window.addEventListener("load", onLoad, false);
window.addEventListener("unload", onUnload, false);