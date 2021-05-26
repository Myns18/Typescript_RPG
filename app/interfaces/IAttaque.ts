import { Combattant } from "../combattants/Combattant";

export interface IAttaque{

    nom : string;
    degats: number;
    chance : number
    
    /**
     * Lance une attaque sur un Combattant
     * @param lanceur 
     * @param cible 
     */
    lancerAttaque(lanceur : Combattant, cible : Combattant, degatsDuSpell: number): void;
}