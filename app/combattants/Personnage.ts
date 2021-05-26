import { Classe } from "../classes/Classe";
import { Combattant } from "./Combattant";

export class Personnage extends Combattant{

    private _classe: Classe;
    
    public constructor(nom: string, classe : Classe){
        super(nom);
        this._classe = classe;
        this.pointDeVie = classe.pointDeVie;
        this.degats = classe.degats;
    }

    public attaquer(adversaire: Combattant){
        adversaire.defendre(this.classe.getAttaque().lancerAttaque(this ,adversaire));        
    }
    
    public get classe(): Classe {
        return this._classe;
    }
    public set classe(value: Classe) {
        this._classe = value;
    }
}