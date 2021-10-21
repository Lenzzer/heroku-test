export default class Cible {
	constructor(dist, ray) {
		this.distan = dist;
		this.rayo = ray;
	}
	
	distance() {
		return this.distan;
	}
	
	rayon() {
		return this.rayo;
	}
	
	resultatTir(distanceTir) {
		if (distanceTir == this.distan) {
			return 0;
		}
		else if (distanceTir < this.distan) {
			return (-1);
		}
		else {
			return 1;
		}
	}
}