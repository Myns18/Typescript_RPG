import { Combattant } from "./Combattant";

export class Monstre extends Combattant{

    public constructor(nom: string, pointDeVie: number, degats: number){
        super(nom);
        this.pointDeVie = pointDeVie;
        this.degats = degats;
    }

}