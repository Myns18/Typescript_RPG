import { Combattant } from "../combattants/Combattant";

export interface IGroupe{

    /**
     * Ajoute un combattant
     * @param newCombattant 
     */
    addCombattant(newCombattant : Combattant): void;
    /**
     * Vérifie si un Combattant est mort
     */
    estMort(): boolean;

}