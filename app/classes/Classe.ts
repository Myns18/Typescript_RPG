import { BasicAttaque } from "../attaques/BasicAttaque";
import { IClasse } from "../interfaces/IClasse";

export class Classe implements IClasse{

    private _nom: string;
    private _listeAttaques: BasicAttaque[] = [];
    private _pointDeVie! : number;
    private _degats! : number;
    
    public constructor(nom : string){
        this._nom = nom;
    }

    /**
     * Va chercher une attaque parmis une liste d'attaque.
     * retourne les degats du spell
     * @param nomDuSpell 
     * @returns 
     */
    public getAttaque() : BasicAttaque{
        return this.listeAttaques[Math.floor(Math.random() * this.listeAttaques.length)];
    }

    /**
     * Ajoute une attaque à une classe
     * @param newAttaque 
     */
    public addAttaque(newAttaque: BasicAttaque): void{
        this.listeAttaques.push(newAttaque);
    }

    public creationSpell(){}
    
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
    public get pointDeVie(): number {
        return this._pointDeVie;
    }
    public set pointDeVie(value: number) {
        this._pointDeVie = value;
    }
    public get degats(): number {
        return this._degats;
    }
    public set degats(value: number) {
        this._degats = value;
    }
}