import { Combattant } from "./Combattant";

export class Personnage extends Combattant{
    
    public constructor(nom: string, pointDeVie: number, degats: number){
        super(nom, pointDeVie, degats);
    }
    
}