import  * as read  from "readline-sync";
import { Combattant } from "./combattants/Combattant";
import { Monstre } from "./combattants/Monstre";
import { Personnage } from "./combattants/Personnage";

export class Monde{

    /**
     * Création d'un nouveau personnage
     * retourne un personnage
     * @returns 
     */
    public static personnagesFactory(): Personnage{
        console.log("------------- Personnage ---------------");
        let nom : string = read.question("Quel est le nom de votre personnage ? ");
        let vie : number = +read.question("Combien de vies avez-vous ? ");
        let degats: number = +read.question("Combien de dégats faites-vous ? ")
        console.log("------------------------------------");
        const newPersonnage : Personnage = new Personnage(nom, vie, degats);
        return newPersonnage;
    }

    /**
     * Création d'un nouveau monstre
     * retourne un monstre
     * @returns 
     */
    public static montresFactory(): Monstre{
        console.log("------------- Monstre ---------------");
        let vie : number = +read.question("Combien de vies avez-vous ? ");
        let degats: number = +read.question("Combien de dégats faites-vous ? ")
        console.log("------------------------------------");
        const newMonstre : Monstre = new Monstre(this.genererNom(), vie, degats);
        return newMonstre;
    }

    /**
     * Génère un nom aléatoire de monstre
     * @returns 
     */
    public static genererNom(): string{
        let nomDeMonstre : string = "";
        let debutNom : string[] = ["Chat", "Chien", "Oiseau"];
        let finNom : string[] = [" mechant", " de feu", " de la mort"];
        let RamdomDebutDeNomTAB = Math.floor(Math.random() * 2);
        let RamdomFinDeNomTAB = Math.floor(Math.random() * 2);
        nomDeMonstre = debutNom[RamdomDebutDeNomTAB] + finNom[RamdomFinDeNomTAB];
        return nomDeMonstre;
    }

    /**
     * Combat à mort entre deux Combattants
     * @param personnage 
     * @param monstre 
     */
    public static combat(personnage: Combattant, monstre: Combattant){        
        while((personnage.pointDeVie && monstre.pointDeVie)){
            console.log(personnage.pointDeVie);
            console.log("-------");
            console.log(monstre.pointDeVie);
            console.log("-------");
            personnage.attaquer(monstre);
            monstre.attaquer(personnage);
        }
    }

    public static afficherInformations(): void{
        console.log("Rien");
        
    }

}