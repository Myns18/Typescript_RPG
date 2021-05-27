import  * as read  from "readline-sync";
import { Classe } from "./classes/Classe";
import { God } from "./classes/God";
import { Mage } from "./classes/Mage";
import { Paladin } from "./classes/Paladin";
import { Combattant } from "./combattants/Combattant";
import { Groupe } from "./combattants/Groupe";
import { Monstre } from "./combattants/Monstre";
import { Personnage } from "./combattants/Personnage";

export class Monde{

    public static classes: Classe[] = [];
    public static classesNom: string[] = ["Paladin", "Mage", "God"];

    /**
     * Création d'un nouveau personnage
     * retourne un personnage
     * @returns 
     */
    public static personnagesFactory(): Personnage{
        console.log("------------- Personnage ---------------");
        let nom : string = read.question("Quel est le nom de votre personnage ? ");
        let chooseClasse: number = read.keyInSelect(Monde.classesNom, "Choisisez une classe", {cancel:false});
        console.log("------------------------------------");
        const newPersonnage : Personnage = new Personnage(nom, this.choisirClasse(chooseClasse));
        return newPersonnage;
    }
    /**
     * Crée un groupe de personnage
     * @param nombreDuGroupe 
     * @returns 
     */
    public static groupePersonnageFactory(nombreDuGroupe: number): Groupe{
        let personnage : Groupe = new Groupe();
        for(let i=0; i < nombreDuGroupe; i++){
            personnage.addCombattant(this.personnagesFactory());
        }
        return personnage;
    }
    /**
     * Crée un groupe de nombre
     * @param nombreDuGroupe 
     * @returns 
     */
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
        let vie : number = Math.floor(Math.random() * 100);
        let degats: number = 50;
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
    /**
     * Combat à mort entre deux groupes de combattants
     * @param personnage 
     * @param monstre 
     */
    public static combatGroupe(personnage: Groupe, monstre: Groupe){   
        let tour = 1;     
        while(!personnage.estMort() && !monstre.estMort()){
            console.log(`-------------------- Tour ${tour} --------------------`);
            if(tour%2 == 0){
                personnage.attaquer(monstre);
            }else{
                monstre.attaquer(personnage);
            }
            tour++;
            if(personnage.estMort() == false && monstre.estMort() == true){
                console.log("Tous les monstres sont morts, les personnages ont gagnés");                
                break;
            }else if(personnage.estMort() == true && monstre.estMort() == false){
                console.log("Tous les personnages sont morts, les monstres ont gagnés");  
                break;
            }
        }
    }
    /**
     * Génération des classes
     */
    public static creationDesClasses(){
        Monde.classes.push(new Paladin("Paladin", 200));
        Monde.classes.push(new Mage("Mage", 100));
        Monde.classes.push(new God("God", 1000));
    }

    /**
     * Vérifie si une classe existe
     * @param nomDeLaClasse 
     * @returns 
     */
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
    /**
     * Démarre le jeu
     * @param mode 
     */
    public static startGameMode(mode: number){
        switch(mode) { 
            case 0: { 
                let personnage1 : Combattant = Monde.personnagesFactory();
                let monstre1 : Monstre = Monde.montresFactory();
                Monde.combat(personnage1, monstre1); 
                break; 
            } 
            case 1: { 
                let groupeDepersonne : Groupe = Monde.groupePersonnageFactory(2);
                let groupeDeMonstre : Groupe = Monde.groupeMonstreFactory(2);
                Monde.combatGroupe(groupeDepersonne, groupeDeMonstre);
                break; 
            } 
            case 2: { 
                // A faire
                break; 
            } 
            case 3: { 
                // A faire
                break; 
            } 
            default: { 
               break; 
            } 
         } 
    }
    /**
     * Choisir une classe
     * @param classe 
     * @returns 
     */
    public static choisirClasse(classe: number): Classe{
        switch(classe) { 
            case 0: { 
                return this.getClasses("Paladin");
            } 
            case 1: { 
                return this.getClasses("Mage");
            } 
            case 2: { 
                return this.getClasses("God");
            }
            default: { 
               break; 
            } 
         }
         return this.getClasses("0"); 
    }
}