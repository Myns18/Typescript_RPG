import { BasicAttaque } from "../attaques/BasicAttaque";
import { Classe } from "./Classe";

export class God extends Classe{

    public constructor(nom: string, pointDeVie: number){
        super(nom);
        this.pointDeVie = pointDeVie;
        this.creationSpell();
    }

    public creationSpell(){
        this.addAttaque(new BasicAttaque("Attaquer", 1000, 100))
        this.addAttaque(new BasicAttaque("Jugement divin", 1500, 100));
        this.addAttaque(new BasicAttaque("Apocalypse", 3000, 100));
        // this.addAttaque(new BasicAttaque("Bouclier", 50, 100)); pour ce proteger
        //this.addAttaque(new BasicAttaque("Soin", 50, 100)); pour ce soin
    }
}