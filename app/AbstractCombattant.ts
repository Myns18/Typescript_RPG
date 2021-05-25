export abstract class AbstractCombattant{

    private _nom: string;

    private _pointDeVie: number;

    private _degats: number;

    public constructor(nom: string, pointDeVie: number, degats: number){
        this._nom = nom;
        this._pointDeVie = pointDeVie;
        this._degats = degats;
    }


    protected get nom(): string {
        return this._nom;
    }
    protected set nom(value: string) {
        this._nom = value;
    }
    protected get pointDeVie(): number {
        return this._pointDeVie;
    }
    protected set pointDeVie(value: number) {
        this._pointDeVie = value;
    }
    protected get degats(): number {
        return this._degats;
    }
    protected set degats(value: number) {
        this._degats = value;
    }

}