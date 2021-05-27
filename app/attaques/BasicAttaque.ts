import { Combattant } from "../combattants/Combattant";
import { IAttaque } from "../interfaces/IAttaque";

export class BasicAttaque implements IAttaque{

    private _nom: string;
    private _degats: number;
    private _chance: number;
    
    public constructor(nom: string, degats: number, chance: number){
        this._nom = nom;
        this._degats = degats;
        this._chance = chance;
    }
    
    public lancerAttaque(lanceur : Combattant, cible : Combattant): number{
        let chanceDeNePasToucher = Math.floor(Math.random() * 100);
        if(chanceDeNePasToucher <= this.chance){
            console.log(`${lanceur.nom} (${lanceur.pointDeVie}) lance ${this.nom} sur ${cible.nom} (${cible.pointDeVie})`);
            console.log(`${cible.nom} (${cible.pointDeVie-this.degats}) à subit ${this.degats} degats`);            
            if(cible.pointDeVie-this.degats <= 0){
                console.log(`${cible.nom} n'a pas survécu`);
            }
            return this.degats;
        }else{
            console.log("Echec critique !");
            return 0;
        }
    }
    
    
    public get chance(): number {
        return this._chance;
    }
    public set chance(value: number) {
        this._chance = value;
    }
    public get degats(): number {
        return this._degats;
    }
    public set degats(value: number) {
        this._degats = value;
    }
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
}