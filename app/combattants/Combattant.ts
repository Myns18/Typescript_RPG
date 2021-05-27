import { ICombattant } from "../interfaces/ICombattant";

export abstract class Combattant implements ICombattant{

    private _nom: string;

    private _pointDeVie!: number;

    private _degats!: number;

    public constructor(nom: string){
        this._nom = nom;
    }
    
    public attaquer(adversaire: Combattant){
        console.log(`${this.nom} (${this.pointDeVie}) lance Attaquer sur ${adversaire.nom} (${adversaire.pointDeVie})`);
        adversaire.defendre(this.degats);
        console.log(`${adversaire.nom} (${adversaire.pointDeVie}) à subit ${this.degats} degats`);
        if(adversaire.pointDeVie <= 0){
            console.log(`${adversaire.nom} n'a pas survécu`);
        }
    }

    public defendre(degats: number){
        if(this.pointDeVie < 0){
            console.log("DEAD");
        }else{
            this.pointDeVie -= degats;
        }
    }

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
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