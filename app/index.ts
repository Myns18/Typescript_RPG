import { Combattant } from "./combattants/Combattant";
import { Monde } from "./Monde";
import { Monstre } from "./combattants/Monstre";

let personnage1 : Combattant = Monde.personnagesFactory();
let monstre1 : Monstre = Monde.montresFactory();

Monde.combat(personnage1, monstre1);