import { AbstractCombattant } from "./AbstractCombattant";

export class Personnage extends AbstractCombattant{
    
    public constructor(nom: string, pointDeVie: number, degats: number){
        super(nom, pointDeVie, degats);
    }
    
}