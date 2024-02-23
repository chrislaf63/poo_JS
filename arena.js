import { Warrior, WarriorAxe, WarriorSpear, WarriorSword } from "/warriors.js";

// CREATION DES INSTANCES DE CLASSES
const joan = new WarriorSword("Joan", 25, 100);
const leon = new WarriorSpear("Leon", 25, 100);

// RECUPERATION DE LA PUISSANCE DE BASE POUR PREVENIR LA MULTIPLICATION SUCCESSIVE
const joanPowerBasis = joan.power;
const leonPowerBasis = leon.power;

// AFFICHAGE DES CONSTANTES AVANT COMBAT
console.log(`Life Leon : ${leon.life}`);
console.log(`Power Leon : ${leon.power}`);
console.log(`life Joan : ${joan.life}`);
console.log(`Power Joan : ${joan.power}`);

// COMBAT AVEC AFFICHAGE DE L'EVOLUTION DES CONSTANTES
for (let i = 0; i < 10; i++) {
    joan.power = joanPowerBasis;
    leon.power = leonPowerBasis;
    console.log(`Power Joan : ${joan.power}`);
    joan.attack(leon);
    console.log(`Attack ${i}`);
    console.log(`Power Joan after : ${joan.power}`);
    console.log(`Power Leon : ${leon.power}`);
    console.log(`Life Leon : ${leon.life}`);
    leon.attack(joan);
    console.log(`Power Leon after: ${leon.power}`);
    console.log(`life Joan : ${joan.life}`);

    if (!joan.isAlive() && leon.isAlive()) {
        console.log(`${leon.name} win !!!`);
        break;
    } else if (!leon.isAlive() && joan.isAlive()) {
        console.log(`${joan.name} win !!!`);
        break;
    } else if (!joan.isAlive() && !leon.isAlive()) {
        console.log(`I's a draw !!`);
        break;
    }
}
