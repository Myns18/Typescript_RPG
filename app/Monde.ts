import  * as read  from "readline-sync";
import { BasicAttaque } from "./attaques/BasicAttaque";
import { Classe } from "./classes/Classe";
import { Mage } from "./classes/Mage";
import { Paladin } from "./classes/Paladin";
import { Combattant } from "./combattants/Combattant";
import { Groupe } from "./combattants/Groupe";
import { Monstre } from "./combattants/Monstre";
import { Personnage } from "./combattants/Personnage";

export class Monde{

    public static classes: Classe[] = [];

    /**
     * Création d'un nouveau personnage
     * retourne un personnage
     * @returns 
     */
    public static personnagesFactory(): Personnage{
        console.log("------------- Personnage ---------------");
        let nom : string = read.question("Quel est le nom de votre personnage ? ");
        let chooseClasse: string = read.question("Choissisez votre classe : ");
        console.log("------------------------------------");
        const newPersonnage : Personnage = new Personnage(nom, this.getClasses(chooseClasse));
        return newPersonnage;
    }

    public static groupePersonnageFactory(nombreDuGroupe: number): Groupe{
        let personnage : Groupe = new Groupe();
        for(let i=0; i < nombreDuGroupe; i++){
            personnage.addCombattant(this.personnagesFactory());
        }
        return personnage;
    }

    public static groupeMonstreFactory(nombreDuGroupe: number): Groupe{
        let monstre : Groupe = new Groupe();
        for(let i=0; i < nombreDuGroupe; i++){
            monstre.addCombattant(this.montresFactory());
        }
        return monstre;
    }

    /**
     * Création d'un nouveau monstre
     * retourne un monstre
     * @returns 
     */
    public static montresFactory(): Monstre{
        console.log("------------- Monstre ---------------");
        let vie : number = +read.question("Combien de vies avez-vous ? ");
        let degats: number = +read.question("Combien de dégats faites-vous ? ");
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
        let debutNom : string[] = ["Ogre", "Dragon", "Squelette"];
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
        let tour = 0;     
        while(personnage.pointDeVie > 0 && monstre.pointDeVie > 0){
            console.log(personnage.pointDeVie);
            console.log("-------");
            console.log(monstre.pointDeVie);
            console.log("-------");
            console.log(`-------------------- Tour ${tour} --------------------`);
            if(tour%2 == 0){
                personnage.attaquer(monstre);
            }else{
                monstre.attaquer(personnage);
            }
            tour++;
        }
    }

    public static combatGroupe(personnage: Groupe, monstre: Groupe){   
        let tour = 0;     
        while(!personnage.estMort() && !monstre.estMort()){
            console.log(`-------------------- Tour ${tour} --------------------`);
            if(tour%2 == 0){
                personnage.attaquer(monstre);
            }else{
                monstre.attaquer(personnage);
            }
            tour++;
        }
    }

    public static creationDesClasses(){
        Monde.classes.push(new Paladin("Paladin", 200));
        Monde.classes.push(new Mage("Mage", 100));
    }

    public static getClasses(nomDeLaClasse: string): Classe{
        let classeQuiexiste: boolean = false;
        while(classeQuiexiste == false){
            for(let i: number=0; i < this.classes.length; i++){
                if(nomDeLaClasse == this.classes[i].nom){
                    classeQuiexiste = true;
                    return this.classes[i];
                }if(classeQuiexiste == false && i+1 == this.classes.length){
                    console.log("Cette classe n'existe pas.");
                    nomDeLaClasse = read.question("Veuillez reselectionner votre classe : ");
                }
            }
        }
        return this.classes[0];
    }   
}