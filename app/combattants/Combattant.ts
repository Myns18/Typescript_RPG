import { ICombattant } from "../interfaces/ICombattant";

export abstract class Combattant implements ICombattant{

    private _nom: string;

    private _pointDeVie: number;

    private _degats: number;

    public constructor(nom: string, pointDeVie: number, degats: number){
        this._nom = nom;
        this._pointDeVie = pointDeVie;
        this._degats = degats;
    }

    
    public attaquer(adversaire: Combattant){
        this.defendre(adversaire.degats);
        console.log(`${adversaire.nom} attaque !`);
        console.log(`Vous avez perdu -${adversaire.degats} PV`);
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