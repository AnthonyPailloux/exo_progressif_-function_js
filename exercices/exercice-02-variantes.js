/**
 * ====================================================================
 * EXERCICE 2 : VARIANTES DE SYNTAXE DES FONCTIONS
 * ====================================================================
 * 
 * BUT : Découvrir les différentes façons de créer des fonctions en JavaScript
 *       - Expressions de fonctions
 *       - Fonctions fléchées (arrow functions)
 *       - IIFE (Immediately Invoked Function Expression)
 *       - Méthodes d'objets
 * 
 * CONCEPTS ABORDÉS :
 * - Function Expression vs Function Declaration
 * - Arrow Functions (fonctions fléchées)
 * - Hoisting (remontée des déclarations)
 * - IIFE
 * - Méthodes dans les objets
 * 
 * TEMPS ESTIMÉ : 45-60 minutes
 * NIVEAU : Débutant - Intermédiaire
 */

console.log("=== EXERCICE 2 : VARIANTES DE SYNTAXE ===\n");

// ============================================================
// ÉTAPE 2.1 : Expression de fonction
// ============================================================
console.log("--- Étape 2.1 : Expression de fonction ---\n");

/**
 * TODO 1.1 : Créer une fonction avec une expression
 * 
 * Instructions détaillées :
 * Au lieu de déclarer une fonction, on peut l'assigner à une variable.
 * C'est ce qu'on appelle une "expression de fonction".
 * 
 * Différence avec la déclaration :
 * - Déclaration : function nom() { ... }
 * - Expression : const nom = function() { ... }
 * 
 * Créez une fonction "multiplier" qui prend 2 paramètres (a, b)
 * et retourne a * b
 * 
 * Syntaxe :
 * const nomFonction = function(param1, param2) {
 *     return resultat;
 * };
 * 
 * VOTRE CODE ICI :
 */
const multiplier = function() {
}






// const multiplier = function(a, b) {
//     ...
// };


/**
 * TODO 1.2 : Tester la fonction multiplier
 * 
 * Testez avec : multiplier(5, 3) → devrait donner 15
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 2.2 : Fonctions fléchées (Arrow Functions)
// ============================================================
console.log("\n--- Étape 2.2 : Fonctions fléchées ---\n");

/**
 * TODO 2.1 : Créer une fonction fléchée "soustraire"
 * 
 * Instructions détaillées :
 * Les fonctions fléchées sont une syntaxe plus courte introduite en ES6.
 * 
 * Syntaxes possibles :
 * 1. Version complète : const nom = (param) => { return valeur; }
 * 2. Version courte (une ligne) : const nom = (param) => valeur;
 * 3. Un seul paramètre : const nom = param => valeur;
 * 4. Aucun paramètre : const nom = () => valeur;
 * 
 * Créez une fonction "soustraire" qui prend 2 paramètres (a, b)
 * et retourne a - b
 * 
 * Utilisez la version complète pour commencer :
 * const soustraire = (a, b) => {
 *     return a - b;
 * };
 * 
 * VOTRE CODE ICI :
 */

// const soustraire = (a, b) => {
//     ...
// };


/**
 * TODO 2.2 : Version courte de soustraire
 * 
 * Réécrivez soustraire en version courte (une seule ligne)
 * Quand il n'y a qu'une seule instruction return, on peut omettre
 * les accolades et le return.
 * 
 * Syntaxe courte :
 * const soustraire = (a, b) => a - b;
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 2.3 : Créer plusieurs fonctions fléchées
 * 
 * Créez ces fonctions en utilisant la syntaxe fléchée courte :
 * 
 * 1. "carré" : prend un nombre, retourne son carré (nombre * nombre)
 *    Exemple : carre(5) → 25
 * 
 * 2. "estPair" : prend un nombre, retourne true si pair, false sinon
 *    Rappel : un nombre est pair si nombre % 2 === 0
 *    Exemple : estPair(4) → true, estPair(5) → false
 * 
 * 3. "obtenirInitiale" : prend un prénom (texte), retourne la première lettre
 *    Exemple : obtenirInitiale("Alice") → "A"
 *    Astuce : utilisez nom[0] pour obtenir le premier caractère
 * 
 * VOTRE CODE ICI :
 */

// const carre = ...
// const estPair = ...
// const obtenirInitiale = ...


/**
 * TODO 2.4 : Tester toutes les fonctions fléchées
 * 
 * Testez chaque fonction que vous avez créée
 * 
 * VOTRE CODE ICI :
 */





// ============================================================
// ÉTAPE 2.3 : Comparaison des syntaxes
// ============================================================
console.log("\n--- Étape 2.3 : Comparaison des syntaxes ---\n");

/**
 * TODO 3.1 : Réécrire une fonction en 3 syntaxes différentes
 * 
 * Créez une fonction "diviser" qui prend 2 paramètres (a, b)
 * et retourne a / b
 * 
 * Créez-la en 3 versions :
 * 1. Déclaration de fonction : function diviser1(a, b) { ... }
 * 2. Expression de fonction : const diviser2 = function(a, b) { ... }
 * 3. Fonction fléchée : const diviser3 = (a, b) => { ... }
 * 
 * Toutes doivent faire exactement la même chose !
 * 
 * VOTRE CODE ICI :
 */

// function diviser1(a, b) {
//     ...
// }
// 
// const diviser2 = function(a, b) {
//     ...
// };
// 
// const diviser3 = (a, b) => {
//     ...
// };


/**
 * TODO 3.2 : Tester les 3 versions
 * 
 * Appelez diviser1(10, 2), diviser2(10, 2), diviser3(10, 2)
 * Tous devraient donner le même résultat : 5
 * 
 * VOTRE CODE ICI :
 */





// ============================================================
// ÉTAPE 2.4 : IIFE (Immediately Invoked Function Expression)
// ============================================================
console.log("\n--- Étape 2.4 : IIFE ---\n");

/**
 * TODO 4.1 : Comprendre les IIFE
 * 
 * Une IIFE est une fonction qui s'exécute immédiatement après sa création.
 * 
 * Syntaxe :
 * (function() {
 *     // code ici
 * })();
 * 
 * Ou avec une fonction fléchée :
 * (() => {
 *     // code ici
 * })();
 * 
 * Créez une IIFE qui affiche "Je m'exécute immédiatement !"
 * 
 * VOTRE CODE ICI :
 */

// (function() {
//     ...
// })();


/**
 * TODO 4.2 : IIFE avec paramètres
 * 
 * Créez une IIFE qui prend un paramètre "nom"
 * et affiche "Bonjour [nom] !"
 * 
 * Pour passer des arguments à une IIFE :
 * (function(param) {
 *     // code
 * })(valeur);
 * 
 * VOTRE CODE ICI :
 */

// (function(nom) {
//     ...
// })("Alice");


/**
 * TODO 4.3 : IIFE qui retourne une valeur
 * 
 * Créez une IIFE qui calcule et retourne le résultat de 5 + 3
 * Stockez le résultat dans une variable "resultatIIFE"
 * Affichez cette variable
 * 
 * Syntaxe :
 * const variable = (function() {
 *     return valeur;
 * })();
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 2.5 : Méthodes dans les objets
// ============================================================
console.log("\n--- Étape 2.5 : Méthodes dans les objets ---\n");

/**
 * TODO 5.1 : Créer un objet avec des méthodes
 * 
 * Dans un objet, les fonctions sont appelées "méthodes".
 * 
 * Créez un objet "calculatrice" avec 4 méthodes :
 * 1. "additionner" : prend (a, b), retourne a + b
 * 2. "multiplier" : prend (a, b), retourne a * b
 * 3. "diviser" : prend (a, b), retourne a / b
 * 4. "puissance" : prend (a, b), retourne a ** b
 * 
 * Syntaxe :
 * const objet = {
 *     propriete: valeur,
 *     methode: function(param) {
 *         return resultat;
 *     }
 * };
 * 
 * Ou avec fonction fléchée :
 * const objet = {
 *     methode: (param) => {
 *         return resultat;
 *     }
 * };
 * 
 * VOTRE CODE ICI :
 */

// const calculatrice = {
//     additionner: function(a, b) {
//         ...
//     },
//     multiplier: function(a, b) {
//         ...
//     },
//     diviser: function(a, b) {
//         ...
//     },
//     puissance: function(a, b) {
//         ...
//     }
// };


/**
 * TODO 5.2 : Utiliser les méthodes de l'objet
 * 
 * Appelez chaque méthode de la calculatrice :
 * - calculatrice.additionner(10, 5) → 15
 * - calculatrice.multiplier(4, 7) → 28
 * - calculatrice.diviser(20, 4) → 5
 * - calculatrice.puissance(2, 3) → 8
 * 
 * Pour appeler une méthode : objet.methode(argument1, argument2)
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 5.3 : Syntaxe courte (ES6) pour les méthodes
 * 
 * En ES6, on peut écrire les méthodes d'objet de manière plus courte :
 * 
 * Ancienne syntaxe :
 * const objet = {
 *     methode: function(param) { ... }
 * };
 * 
 * Nouvelle syntaxe :
 * const objet = {
 *     methode(param) { ... }
 * };
 * 
 * Réécrivez l'objet calculatrice avec cette syntaxe courte
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 2.6 : Exercice de synthèse
// ============================================================
console.log("\n--- Étape 2.6 : Exercice de synthèse ---\n");

/**
 * TODO 6.1 : Créer un objet "personnage" avec plusieurs méthodes
 * 
 * Créez un objet personnage avec :
 * - propriétés : nom (texte), vie (nombre), force (nombre)
 * - méthodes :
 *   1. "sePresenter" : affiche "Je suis [nom]"
 *   2. "attaquer" : prend un paramètre "cible", affiche "[nom] attaque [cible] pour [force] dégâts"
 *   3. "recevoirDegats" : prend un paramètre "degats", réduit la vie de ce montant
 *   4. "estVivant" : retourne true si vie > 0, false sinon
 * 
 * Utilisez la syntaxe courte pour les méthodes
 * 
 * VOTRE CODE ICI :
 */

// const personnage = {
//     nom: "Guerrier",
//     vie: 100,
//     force: 20,
//     sePresenter() {
//         ...
//     },
//     attaquer(cible) {
//         ...
//     },
//     recevoirDegats(degats) {
//         ...
//     },
//     estVivant() {
//         ...
//     }
// };


/**
 * TODO 6.2 : Faire combattre deux personnages
 * 
 * Créez deux personnages différents (copiez l'objet personnage)
 * Faites-les se présenter, puis combattre :
 * 1. Personnage1 attaque Personnage2
 * 2. Personnage2 reçoit des dégâts
 * 3. Vérifiez si Personnage2 est vivant
 * 4. Répétez dans l'autre sens
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// VÉRIFICATIONS FINALES
// ============================================================
console.log("\n=== VÉRIFICATIONS ===");
console.log("✅ Vous avez créé des fonctions avec différentes syntaxes");
console.log("✅ Vous comprenez la différence entre déclaration et expression");
console.log("✅ Vous maîtrisez les fonctions fléchées");
console.log("✅ Vous avez créé des IIFE");
console.log("✅ Vous avez créé des objets avec méthodes\n");

console.log("=== EXERCICE 2 TERMINÉ ===");
console.log("Excellent travail ! Passez à l'exercice 3 ! 🎉\n");


