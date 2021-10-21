var canon;
var cible;

import Canon from './canon.js';
import Cible from './cible.js';

export function tir() {
	let tmpTir = canon.tir();
	let tmpResult = cible.resultatTir(tmpTir);
	return { distance: tmpTir, resultat: tmpResult };
}

export function canonCourant() {
	return canon;
}

function nouveauCanon() {
	let vitesse = 10 + Math.floor(Math.random() * 30);
	let param = { inclinaison: 10, minimum: 10, maximum: 80, delta: 5 };
	return (new Canon(vitesse, param));
}

export function cibleCourante() {
		return cible;
}

function nouvelleCible(canon) {
	let ray = 6 + Math.floor(Math.random() * 8);
	let dist = (canon.portee()/2) + Math.floor(Math.random() * (canon.portee()/2));
	return (new Cible(dist, ray));
}

export function nouvellePartie() {
	canon = nouveauCanon();
	cible = nouvelleCible(canon);
}