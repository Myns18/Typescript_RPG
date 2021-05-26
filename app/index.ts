import { Combattant } from "./combattants/Combattant";
import { Monde } from "./Monde";
import { Monstre } from "./combattants/Monstre";
import { Groupe } from "./combattants/Groupe";

//1 créer les classes
Monde.creationDesClasses();

let groupeDepersonne : Groupe = Monde.groupePersonnageFactory(2);
let groupeDeMonstre : Groupe = Monde.groupeMonstreFactory(2);

Monde.combatGroupe(groupeDepersonne, groupeDeMonstre);
