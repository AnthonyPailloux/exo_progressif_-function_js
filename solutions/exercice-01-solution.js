/**
 * ====================================================================
 * SOLUTION EXERCICE 1 : LES BASES DES FONCTIONS
 * ====================================================================
 * 
 * Ce fichier contient les solutions complètes de l'exercice 1.
 * 
 * ATTENTION : Ne regardez ces solutions qu'après avoir essayé vous-même !
 * 
 * Comparez votre code avec ces solutions pour apprendre des différences.
 */

console.log("=== SOLUTION EXERCICE 1 ===\n");

// ============================================================
// ÉTAPE 1.1 : Fonction simple
// ============================================================
console.log("--- Étape 1.1 : Fonction simple ---\n");

// Solution 1.1
function direBonjour() {
    console.log("Bonjour !");
}

// Solution 1.2
direBonjour();

// ============================================================
// ÉTAPE 1.2 : Fonction avec paramètre
// ============================================================
console.log("\n--- Étape 1.2 : Fonction avec paramètre ---\n");

// Solution 2.1
function direBonjourA(nom) {
    console.log("Bonjour " + nom + " !");
}

// Ou avec template literals (ES6) :
// function direBonjourA(nom) {
//     console.log(`Bonjour ${nom} !`);
// }

// Solution 2.2
direBonjourA("Alice");
direBonjourA("Bob");
direBonjourA("Charlie");

// ============================================================
// ÉTAPE 1.3 : Fonction avec valeur de retour
// ============================================================
console.log("\n--- Étape 1.3 : Fonction avec valeur de retour ---\n");

// Solution 3.1
function additionner(a, b) {
    return a + b;
}

// Solution 3.2
const somme1 = additionner(10, 5);
console.log("La somme est :", somme1);

const somme2 = additionner(7, 3);
console.log("La somme est :", somme2);

const somme3 = additionner(100, 50);
console.log("La somme est :", somme3);

// ============================================================
// ÉTAPE 1.4 : Fonction avec plusieurs paramètres
// ============================================================
console.log("\n--- Étape 1.4 : Fonction avec plusieurs paramètres ---\n");

// Solution 4.1
function calculerMoyenne(nombre1, nombre2, nombre3) {
    return (nombre1 + nombre2 + nombre3) / 3;
}

// Solution 4.2
const moyenne1 = calculerMoyenne(10, 20, 30);
console.log("La moyenne est :", moyenne1); // 20

const moyenne2 = calculerMoyenne(5, 5, 5);
console.log("La moyenne est :", moyenne2); // 5

const moyenne3 = calculerMoyenne(0, 10, 20);
console.log("La moyenne est :", moyenne3); // 10

// ============================================================
// ÉTAPE 1.5 : Fonction avec logique conditionnelle
// ============================================================
console.log("\n--- Étape 1.5 : Fonction avec condition ---\n");

// Solution 5.1
function estMajeur(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Version courte (équivalente) :
// function estMajeur(age) {
//     return age >= 18;
// }

// Solution 5.2
console.log("Est-ce que 15 ans est majeur ?", estMajeur(15)); // false
console.log("Est-ce que 18 ans est majeur ?", estMajeur(18)); // true
console.log("Est-ce que 20 ans est majeur ?", estMajeur(20)); // true
console.log("Est-ce que 25 ans est majeur ?", estMajeur(25)); // true

// ============================================================
// ÉTAPE 1.6 : Fonction combinée
// ============================================================
console.log("\n--- Étape 1.6 : Fonction combinée ---\n");

// Solution 6.1
function afficherInfoPersonne(nom, age) {
    console.log(nom + " a " + age + " ans");
    
    const majeur = estMajeur(age);
    if (majeur) {
        console.log(nom + " est majeure");
    } else {
        console.log(nom + " est mineure");
    }
}

// Solution 6.2
afficherInfoPersonne("Alice", 25);
afficherInfoPersonne("Bob", 16);
afficherInfoPersonne("Charlie", 18);

console.log("\n=== FIN DE LA SOLUTION ===");


