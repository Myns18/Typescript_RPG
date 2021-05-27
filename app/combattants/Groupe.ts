import { IGroupe } from "../interfaces/IGroupe";
import { Combattant } from "./Combattant";

export class Groupe implements IGroupe{

    private _groupeCombattant: Combattant[] = [];

    public addCombattant(newCombattant : Combattant){
        this.groupeCombattant.push(newCombattant);
    }
    
    public estMort(): boolean{
        if(this.groupeCombattant.length == 0){
            return true;
        }
        return false;
    }

    public retirerMortDuGroupe(){
        let enVie = true;
        while(enVie){
            for(let i:number=0; i < this.groupeCombattant.length; i++){
                console.log(this.groupeCombattant[i].pointDeVie + " +++++++++ ");
                if(this.groupeCombattant[i].pointDeVie <= 0){                        
                    this.groupeCombattant.splice(i);
                    enVie = false;
                }else if(i+1 == this.groupeCombattant.length){
                    enVie = false;
                }
            }
        }
    }

    public attaquer(adversaire: Groupe){
        this.retirerMortDuGroupe();
        adversaire.retirerMortDuGroupe();
        if (this.groupeCombattant.length > 0 && adversaire.groupeCombattant.length > 0 ){
            let ramdomGroupeMonstre = Math.floor(Math.random() * this.groupeCombattant.length);
            let ramdomGroupePesonnage = Math.floor(Math.random() * adversaire.groupeCombattant.length);
            console.log(this.groupeCombattant.length + " !!!!!!!!!!!!!!!! ");
            console.log(adversaire.groupeCombattant.length + " AAAAAAAAAAAAAAAAAAAA ");
        
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