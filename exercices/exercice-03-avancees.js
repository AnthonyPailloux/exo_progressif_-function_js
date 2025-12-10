/**
 * ====================================================================
 * EXERCICE 3 : CONCEPTS AVANCÉS DES FONCTIONS
 * ====================================================================
 * 
 * BUT : Maîtriser les fonctionnalités avancées des fonctions JavaScript
 *       - Paramètres par défaut
 *       - Rest parameters (...)
 *       - Spread operator
 *       - Closures (fermetures)
 *       - Curry
 * 
 * CONCEPTS ABORDÉS :
 * - Paramètres par défaut (default parameters)
 * - Rest parameters (...param)
 * - Spread operator (...array)
 * - Closure (fermeture)
 * - Currying (fonctions partielles)
 * - Scope et portée des variables
 * 
 * TEMPS ESTIMÉ : 60-90 minutes
 * NIVEAU : Intermédiaire
 */

console.log("=== EXERCICE 3 : CONCEPTS AVANCÉS ===\n");

// ============================================================
// ÉTAPE 3.1 : Paramètres par défaut
// ============================================================
console.log("--- Étape 3.1 : Paramètres par défaut ---\n");

/**
 * TODO 1.1 : Fonction avec paramètre par défaut
 * 
 * Instructions détaillées :
 * On peut donner une valeur par défaut à un paramètre.
 * Si l'argument n'est pas fourni, la valeur par défaut est utilisée.
 * 
 * Syntaxe :
 * function nomFonction(parametre = valeurDefaut) {
 *     return resultat;
 * }
 * 
 * Créez une fonction "direBonjour" qui prend un paramètre "nom"
 * avec "Invité" comme valeur par défaut
 * Elle doit retourner "Bonjour [nom] !"
 * 
 * VOTRE CODE ICI :
 */

// function direBonjour(nom = "Invité") {
//     ...
// }


/**
 * TODO 1.2 : Tester avec et sans paramètre
 * 
 * Testez :
 * - direBonjour() → devrait donner "Bonjour Invité !"
 * - direBonjour("Alice") → devrait donner "Bonjour Alice !"
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 1.3 : Fonction avec plusieurs paramètres par défaut
 * 
 * Créez une fonction "creerEmail" qui prend :
 * - destinataire (par défaut : "client@exemple.com")
 * - sujet (par défaut : "Sans sujet")
 * - corps (par défaut : "Aucun contenu")
 * 
 * La fonction retourne un objet email :
 * {
 *     to: destinataire,
 *     subject: sujet,
 *     body: corps
 * }
 * 
 * VOTRE CODE ICI :
 */

// function creerEmail(destinataire = "client@exemple.com", sujet = "Sans sujet", corps = "Aucun contenu") {
//     ...
// }


/**
 * TODO 1.4 : Tester creerEmail avec différents cas
 * 
 * Testez :
 * 1. Sans aucun paramètre
 * 2. Avec seulement destinataire
 * 3. Avec destinataire et sujet
 * 4. Avec tous les paramètres
 * 
 * VOTRE CODE ICI :
 */





// ============================================================
// ÉTAPE 3.2 : Rest Parameters (...)
// ============================================================
console.log("\n--- Étape 3.2 : Rest Parameters ---\n");

/**
 * TODO 2.1 : Fonction avec Rest Parameter
 * 
 * Instructions détaillées :
 * Le rest parameter permet de recevoir un nombre variable d'arguments
 * sous forme de tableau.
 * 
 * Syntaxe :
 * function nomFonction(...parametres) {
 *     // parametres est un tableau contenant tous les arguments
 * }
 * 
 * Créez une fonction "additionnerTous" qui prend un nombre variable
 * d'arguments et retourne leur somme.
 * 
 * Exemple :
 * additionnerTous(1, 2, 3) → 6
 * additionnerTous(5, 10, 15, 20) → 50
 * 
 * Pour parcourir un tableau, utilisez une boucle for...of :
 * for (const nombre of nombres) { ... }
 * 
 * VOTRE CODE ICI :
 */

// function additionnerTous(...nombres) {
//     let somme = 0;
//     ...
//     return somme;
// }


/**
 * TODO 2.2 : Fonction qui trouve le maximum
 * 
 * Créez une fonction "trouverMaximum" qui prend un nombre variable
 * d'arguments et retourne le plus grand nombre.
 * 
 * Astuce : utilisez Math.max(...nombres) ou une boucle
 * 
 * Exemple :
 * trouverMaximum(5, 10, 3, 8) → 10
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 2.3 : Fonction avec paramètres normaux et rest
 * 
 * Le rest parameter doit toujours être en dernier !
 * 
 * Créez une fonction "creerMessage" qui prend :
 * - destinataire (paramètre normal)
 * - ...messages (rest parameter)
 * 
 * La fonction retourne un objet :
 * {
 *     to: destinataire,
 *     messages: [...] // tableau de tous les messages
 * }
 * 
 * Exemple :
 * creerMessage("Alice", "Salut", "Comment vas-tu ?", "À bientôt")
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 3.3 : Spread Operator
// ============================================================
console.log("\n--- Étape 3.3 : Spread Operator ---\n");

/**
 * TODO 3.1 : Utiliser le Spread Operator
 * 
 * Instructions détaillées :
 * Le spread operator (...) permet de "décomposer" un tableau ou un objet.
 * 
 * Exemples :
 * const nombres = [1, 2, 3];
 * console.log(...nombres); // équivalent à console.log(1, 2, 3)
 * 
 * Utilisez le spread operator avec additionnerTous :
 * const tab = [5, 10, 15];
 * additionnerTous(...tab); // équivalent à additionnerTous(5, 10, 15)
 * 
 * Testez :
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 3.2 : Fonction qui combine des tableaux
 * 
 * Créez une fonction "combinerTableaux" qui prend plusieurs tableaux
 * et les combine en un seul.
 * 
 * Utilisez le spread operator dans la fonction.
 * 
 * Exemple :
 * combinerTableaux([1, 2], [3, 4], [5, 6]) → [1, 2, 3, 4, 5, 6]
 * 
 * Astuce : return [...tab1, ...tab2, ...tab3]
 * Mais attention, vous avez un nombre variable de tableaux !
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 3.3 : Créer une copie de tableau
 * 
 * Le spread operator permet de créer une copie d'un tableau :
 * const copie = [...original];
 * 
 * Créez une fonction "copierTableau" qui prend un tableau
 * et retourne une copie.
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 3.4 : Closures (Fermetures)
// ============================================================
console.log("\n--- Étapes 3.4 : Closures ---\n");

/**
 * TODO 4.1 : Comprendre les Closures
 * 
 * Instructions détaillées :
 * Une closure est une fonction qui a accès aux variables de sa
 * portée externe, même après que la fonction externe ait terminé.
 * 
 * Créez une fonction "creerCompteur" qui retourne une fonction.
 * La fonction retournée doit incrémenter et retourner un compteur.
 * 
 * Exemple :
 * const compteur = creerCompteur();
 * console.log(compteur()); // 1
 * console.log(compteur()); // 2
 * console.log(compteur()); // 3
 * 
 * Structure :
 * function creerCompteur() {
 *     let count = 0;  // variable dans la portée externe
 *     return function() {
 *         count++;    // accède à count même après la fin de creerCompteur
 *         return count;
 *     };
 * }
 * 
 * VOTRE CODE ICI :
 */

// function creerCompteur() {
//     let count = 0;
//     return function() {
//         ...
//     };
// }


/**
 * TODO 4.2 : Créer plusieurs compteurs indépendants
 * 
 * Créez deux compteurs différents.
 * Chaque compteur doit avoir son propre état (count).
 * Testez-les pour vérifier qu'ils sont indépendants.
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 4.3 : Fonction qui crée un multiplicateur
 * 
 * Créez une fonction "creerMultiplicateur" qui prend un nombre "facteur"
 * et retourne une fonction qui multiplie un nombre par ce facteur.
 * 
 * Exemple :
 * const multiplierPar2 = creerMultiplicateur(2);
 * multiplierPar2(5); // → 10
 * 
 * const multiplierPar3 = creerMultiplicateur(3);
 * multiplierPar3(4); // → 12
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 4.4 : Générateur de mots de passe (closure avancée)
 * 
 * Créez une fonction "creerGenerateurMotDePasse" qui retourne
 * une fonction générant des mots de passe uniques.
 * 
 * La fonction externe prend un paramètre "longueur".
 * La fonction retournée génère un mot de passe aléatoire
 * de la longueur spécifiée.
 * 
 * Astuce pour générer un caractère aléatoire :
 * const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
 * caracteres[Math.floor(Math.random() * caracteres.length)];
 * 
 * Exemple :
 * const generer = creerGenerateurMotDePasse(8);
 * generer(); // → "a3b9c2d1"
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 3.5 : Currying
// ============================================================
console.log("\n--- Étape 3.5 : Currying ---\n");

/**
 * TODO 5.1 : Fonction curry simple
 * 
 * Instructions détaillées :
 * Le currying consiste à transformer une fonction à plusieurs paramètres
 * en une série de fonctions à un seul paramètre.
 * 
 * Créez une fonction "multiplier" curry qui fonctionne ainsi :
 * multiplier(2)(3) → 6
 * 
 * Syntaxe :
 * function multiplier(a) {
 *     return function(b) {
 *         return a * b;
 *     };
 * }
 * 
 * Ou avec fonction fléchée :
 * const multiplier = (a) => (b) => a * b;
 * 
 * VOTRE CODE ICI :
 */

// Version complète
// function multiplier(a) {
//     ...
// }

// Version fléchée
// const multiplier = (a) => (b) => ...;


/**
 * TODO 5.2 : Fonction curry à 3 paramètres
 * 
 * Créez une fonction "additionner" curry qui prend 3 paramètres :
 * additionner(1)(2)(3) → 6
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 5.3 : Utiliser le currying
 * 
 * Utilisez multiplier pour créer des fonctions spécialisées :
 * 
 * 1. Créez multiplierPar5 = multiplier(5)
 * 2. Utilisez multiplierPar5(10) → devrait donner 50
 * 3. Créez multiplierPar10 = multiplier(10)
 * 4. Utilisez multiplierPar10(7) → devrait donner 70
 * 
 * C'est le même principe que creerMultiplicateur, mais avec currying !
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 3.6 : Exercice de synthèse - Générateur d'ID
// ============================================================
console.log("\n--- Étape 3.6 : Exercice de synthèse ---\n");

/**
 * TODO 6.1 : Créer un générateur d'ID avec closure
 * 
 * Créez une fonction "creerGenerateurId" qui :
 * 1. Prend un préfixe (par défaut : "ID")
 * 2. Retourne une fonction qui génère des ID uniques
 * 3. Chaque ID doit être : préfixe + numéro séquentiel
 * 
 * Exemple :
 * const generer = creerGenerateurId("USER");
 * generer(); // → "USER1"
 * generer(); // → "USER2"
 * 
 * const generer2 = creerGenerateurId("TASK");
 * generer2(); // → "TASK1"
 * generer();  // → "USER3" (continue le premier compteur)
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 6.2 : Fonction qui crée plusieurs générateurs
 * 
 * Créez une fonction "creerGenerateurs" qui prend un tableau de préfixes
 * et retourne un objet avec un générateur pour chaque préfixe.
 * 
 * Exemple :
 * const gens = creerGenerateurs(["USER", "TASK", "ORDER"]);
 * gens.USER(); // → "USER1"
 * gens.TASK(); // → "TASK1"
 * gens.ORDER(); // → "ORDER1"
 * 
 * Utilisez reduce pour construire l'objet :
 * 
 * function creerGenerateurs(prefixes) {
 *     return prefixes.reduce((acc, prefixe) => {
 *         acc[prefixe] = creerGenerateurId(prefixe);
 *         return acc;
 *     }, {});
 * }
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// VÉRIFICATIONS FINALES
// ============================================================
console.log("\n=== VÉRIFICATIONS ===");
console.log("✅ Vous maîtrisez les paramètres par défaut");
console.log("✅ Vous comprenez les rest parameters");
console.log("✅ Vous utilisez le spread operator");
console.log("✅ Vous avez créé des closures");
console.log("✅ Vous comprenez le currying\n");

console.log("=== EXERCICE 3 TERMINÉ ===");
console.log("Excellent ! Passez à l'exercice 4 (Fonctions d'ordre supérieur) ! 🎉\n");


