import { Combattant } from "../combattants/Combattant";

export interface ICombattant{

    nom: string;
    pointDeVie: number;
    degats: number;
    /**
     * Attaque un Combattant
     * @param adversaire 
     */
    attaquer(adversaire : Combattant): void;
    /**
     * Methode qui est appelé dans Attaque()
     * Celui qui est attaqué perd de la vie
     * @param degats 
     */
    defendre(degats : number): void;
}