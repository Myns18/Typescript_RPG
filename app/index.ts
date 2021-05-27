import  * as read  from "readline-sync";
import { Monde } from "./Monde";

let menu : string[] = ["Lancer un combat 1v1", "Lancer un combat de groupe"]; 

// - 1 création des classes
Monde.creationDesClasses();

// - 2 Génération du menu
console.log("---***--- Bonjour ---***---");
console.log("-- Choisir une option --");
let mode = read.keyInSelect(menu, "", {cancel:false});
console.log("---***---         ---***---");

Monde.startGameMode(mode);









