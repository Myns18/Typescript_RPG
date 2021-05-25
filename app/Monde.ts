import  * as read  from "readline-sync";
import { Monstre } from "./Monstre";
import { Personnage } from "./Personnage";

export class Monde{

    /**
     * Création d'un nouveau personnage
     * retourne un personnage
     * @returns 
     */
    public static personnagesFactory(): Personnage{
        let nom = read.question("Quel est le nom de votre personnage ? ");
        const newPersonnage : Personnage = new Personnage(nom, 100, 20);
        return newPersonnage;
    }

    /**
     * Création d'un nouveau monstre
     * retourne un monstre
     * @returns 
     */
    public static montresFactory(): Monstre{
        let nom = read.question("Quel est le nom de votre monstre ? ");
        const newMonstre : Monstre = new Monstre(nom, 50, 10);
        return newMonstre;
    }

    public static genererNom(): string{
        let nomDeMonstre : string = "";
        let debutNom : string[] = ["Chat", "Chient", "Oiseau"];
        let finNom : string[] = [" mechant", " de feu", " de la mort"];
        let RamdomDebutDeNomTAB = Math.floor(Math.random() * 2);
        let RamdomFinDeNomTAB = Math.floor(Math.random() * 2);
        nomDeMonstre = debutNom[RamdomDebutDeNomTAB] + finNom[RamdomFinDeNomTAB];
        return nomDeMonstre;
    }

    public static afficherInformations(): void{
        console.log("Rien");
        
    }

}