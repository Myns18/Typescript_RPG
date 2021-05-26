import { BasicAttaque } from "../attaques/BasicAttaque";
import { Classe } from "./Classe";

export class Paladin extends Classe{

    public constructor(nom: string, pointDeVie: number){
        super(nom);
        this.pointDeVie = pointDeVie;
        this.creationSpell();
    }

    public creationSpell(){
        this.addAttaque(new BasicAttaque("Attaquer", 20, 100))
        this.addAttaque(new BasicAttaque("Frappe sacre", 50, 100));
        this.addAttaque(new BasicAttaque("Coup de bouclier", 50, 100));
        // this.addAttaque(new BasicAttaque("Bouclier", 50, 100)); pour ce proteger
        //this.addAttaque(new BasicAttaque("Soin", 50, 100)); pour ce soin
    }
}