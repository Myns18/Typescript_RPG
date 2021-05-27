import { IGroupe } from "../interfaces/IGroupe";
import { Combattant } from "./Combattant";

export class Groupe implements IGroupe{

    private _groupeCombattant: Combattant[] = [];

    public addCombattant(newCombattant : Combattant){
        this.groupeCombattant.push(newCombattant);
    }
    
    public estMort(): boolean{
        this.retirerMortDuGroupe();
        if(this.groupeCombattant.length == 0){
            return true;
        }
        return false;
    }

    /**
     * Retire un combattant du groupe quand ses PV sont inférieur à 0
     */
    public retirerMortDuGroupe(){
        let enVie = true;
        while(enVie){
            for(let i:number=0; i < this.groupeCombattant.length; i++){
                if(this.groupeCombattant[i].pointDeVie <= 0){                        
                    this.groupeCombattant.splice(i, 1);
                    enVie = false;
                    break;
                }else if(i+1 == this.groupeCombattant.length){
                    enVie = false;
                    break;
                }
            }
        }
    }
    /**
     * Attaque un groupe de combattants
     * @param adversaire 
     */
    public attaquer(adversaire: Groupe){
        if (this.groupeCombattant.length > 0 && adversaire.groupeCombattant.length > 0 ){
            let ramdomGroupeMonstre = Math.floor(Math.random() * this.groupeCombattant.length);
            let ramdomGroupePesonnage = Math.floor(Math.random() * adversaire.groupeCombattant.length);
        
            this.groupeCombattant[ramdomGroupeMonstre].attaquer(adversaire.groupeCombattant[ramdomGroupePesonnage]);
        }
    }

    public get groupeCombattant(): Combattant[] {
        return this._groupeCombattant;
    }
    public set groupeCombattant(value: Combattant[]) {
        this._groupeCombattant = value;
    }
}