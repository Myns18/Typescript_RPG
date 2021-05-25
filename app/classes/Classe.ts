import  * as read  from "readline-sync";
import { BasicAttaque } from "../attaques/BasicAttaque";

export class Classe {

    private _nom: string;
    private _listeAttaques: BasicAttaque[];
    
    public constructor(nom : string, listeAttaques: BasicAttaque[]){
        this._nom = nom;
        this._listeAttaques = listeAttaques;
    }

    /**
     * Va chercher une attaque parmis une liste d'attaque.
     * @param nomDuSpell 
     * @returns 
     */
    public getAttaque(nomDuSpell : string) : any{
        let spellQuiexiste: boolean = false;
        while(spellQuiexiste == false){
            for(let i=0; this.listeAttaques.length; i++){
                if(this.listeAttaques[i].nom == nomDuSpell){
                    spellQuiexiste = true;
                    return this.listeAttaques[i];
                }
                if(spellQuiexiste == false && i+1 == this.listeAttaques.length){
                    console.log("Cette attaque n'existe pas.");
                    nomDuSpell = read.question("Veuillez reselectionner votre attaque : ");
                }
            }
        }
    }
    
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get listeAttaques(): BasicAttaque[] {
        return this._listeAttaques;
    }
    public set listeAttaques(value: BasicAttaque[]) {
        this._listeAttaques = value;
    }
}