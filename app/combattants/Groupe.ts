import { IGroupe } from "../interfaces/IGroupe";
import { Combattant } from "./Combattant";

export class Groupe implements IGroupe{

    private _groupeCombattant: Combattant[] = [];

    public addCombattant(newCombattant : Combattant){
        this.groupeCombattant.push(newCombattant);
    }
    
    public estMort(): boolean{
        if(this.groupeCombattant.length == 0){
            console.log("Tout le monde est mort.");
            return true;
        }
        return false;
    }

    public retirerMortDuGroupe(){
        if(this.estMort() == false){
            let enVie = true;
            while(enVie){
                for(let i:number=0; i < this.groupeCombattant.length; i++){
                    if(this.groupeCombattant[i].pointDeVie <= 0){
                        this.groupeCombattant.splice(i, 1);
                        enVie = false;
                    }else if(i+1 == this.groupeCombattant.length){
                        enVie = false;
                    }
                }
            }
        }
    }

    public attaquer(adversaire: Groupe){
        this.retirerMortDuGroupe();
        adversaire.retirerMortDuGroupe();
        let ramdomGroupeMonstre = Math.floor(Math.random() * this.groupeCombattant.length);
        let ramdomGroupePesonnage = Math.floor(Math.random() * adversaire.groupeCombattant.length);
        console.log(this.groupeCombattant[ramdomGroupeMonstre]);
        
        this.groupeCombattant[ramdomGroupeMonstre].attaquer(adversaire.groupeCombattant[ramdomGroupePesonnage]);
    }

    public get groupeCombattant(): Combattant[] {
        return this._groupeCombattant;
    }
    public set groupeCombattant(value: Combattant[]) {
        this._groupeCombattant = value;
    }
}