import { Classe } from "../classes/Classe";
import { Combattant } from "./Combattant";

export class Personnage extends Combattant{

    private _classe: Classe;
    
    public constructor(nom: string, pointDeVie: number, degats: number, classe : Classe){
        super(nom, pointDeVie, degats);
        this._classe = classe;
    }
    
    public get classe(): Classe {
        return this._classe;
    }
    public set classe(value: Classe) {
        this._classe = value;
    }
}