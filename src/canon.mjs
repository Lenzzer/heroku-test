export default class Canon {
	constructor(vitSortie, paramIncl) {
		this.vitesseSortie = vitSortie;
		this.paramInclinaison = paramIncl;
	}
	
	inclinaison() {
		return this.paramInclinaison.inclinaison;
	}
	
	leve() {
		this.paramInclinaison.inclinaison += this.paramInclinaison.delta;
		if (this.paramInclinaison.inclinaison > this.paramInclinaison.maximum) {
			this.paramInclinaison.inclinaison = this.paramInclinaison.maximum;
		}
	}
	
	baisse() {
		this.paramInclinaison.inclinaison -= this.paramInclinaison.delta;
		if (this.paramInclinaison.inclinaison < this.paramInclinaison.minimum) {
			this.paramInclinaison.inclinaison = this.paramInclinaison.minimum;
		}
	}
	
	portee() {
		return ((this.vitesseSortie*this.vitesseSortie) / 9.81);
	}
	
	tir(){
		return ((this.vitesseSortie*this.vitesseSortie)*Math.sin(2*this.paramInclinaison.inclinaison*Math.PI/180)/9.81);
	}
	
	etat() {
		return { inclinaison:this.paramInclinaison.inclinaison; vitesse:this.vitesseSortie };
	}
}