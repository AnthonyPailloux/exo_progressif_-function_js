/**
 * ====================================================================
 * EXERCICE 4 : FONCTIONS D'ORDRE SUPÉRIEUR
 * ====================================================================
 * 
 * BUT : Maîtriser les fonctions qui travaillent avec d'autres fonctions
 *       - Callbacks
 *       - Méthodes array : map, filter, reduce, forEach
 *       - Composition de fonctions
 * 
 * CONCEPTS ABORDÉS :
 * - Callback (fonction passée en paramètre)
 * - Fonctions d'ordre supérieur (Higher-Order Functions)
 * - map() : transformer chaque élément
 * - filter() : filtrer les éléments
 * - reduce() : réduire à une valeur unique
 * - forEach() : exécuter pour chaque élément
 * - find() : trouver un élément
 * - Composition de fonctions
 * 
 * TEMPS ESTIMÉ : 60-90 minutes
 * NIVEAU : Intermédiaire
 */

console.log("=== EXERCICE 4 : FONCTIONS D'ORDRE SUPÉRIEUR ===\n");

// ============================================================
// ÉTAPE 4.1 : Callbacks
// ============================================================
console.log("--- Étape 4.1 : Callbacks ---\n");

/**
 * TODO 1.1 : Créer une fonction qui prend un callback
 * 
 * Instructions détaillées :
 * Un callback est une fonction passée en argument à une autre fonction.
 * 
 * Créez une fonction "traiterNombre" qui prend :
 * - un nombre
 * - une fonction callback
 * 
 * La fonction applique le callback au nombre et retourne le résultat.
 * 
 * Exemple :
 * const double = (x) => x * 2;
 * traiterNombre(5, double); // → 10
 * 
 * Syntaxe :
 * function traiterNombre(nombre, callback) {
 *     return callback(nombre);
 * }
 * 
 * VOTRE CODE ICI :
 */

// function traiterNombre(nombre, callback) {
//     ...
// }


/**
 * TODO 1.2 : Utiliser différents callbacks
 * 
 * Créez plusieurs fonctions :
 * - "carre" : retourne x * x
 * - "triple" : retourne x * 3
 * - "ajouter10" : retourne x + 10
 * 
 * Testez traiterNombre(5, carre) → 25
 * Testez traiterNombre(5, triple) → 15
 * Testez traiterNombre(5, ajouter10) → 15
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 1.3 : Fonction avec callback et plusieurs paramètres
 * 
 * Créez une fonction "appliquerOperation" qui prend :
 * - a (nombre)
 * - b (nombre)
 * - operation (callback qui prend 2 paramètres)
 * 
 * Exemple :
 * const additionner = (a, b) => a + b;
 * appliquerOperation(5, 3, additionner); // → 8
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 4.2 : forEach() - Parcourir un tableau
// ============================================================
console.log("\n--- Étape 4.2 : forEach() ---\n");

/**
 * TODO 2.1 : Utiliser forEach pour afficher chaque élément
 * 
 * Instructions détaillées :
 * forEach() exécute une fonction pour chaque élément du tableau.
 * 
 * Syntaxe :
 * tableau.forEach(function(element) {
 *     // code
 * });
 * 
 * Ou avec fonction fléchée :
 * tableau.forEach(element => {
 *     // code
 * });
 * 
 * Créez un tableau de noms : ["Alice", "Bob", "Charlie"]
 * Utilisez forEach pour afficher chaque nom avec "Bonjour [nom] !"
 * 
 * VOTRE CODE ICI :
 */

// const noms = ["Alice", "Bob", "Charlie"];
// noms.forEach(...);


/**
 * TODO 2.2 : forEach avec index
 * 
 * forEach peut recevoir 3 paramètres : (element, index, tableau)
 * 
 * Utilisez forEach pour afficher :
 * "1. Alice"
 * "2. Bob"
 * "3. Charlie"
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 2.3 : Créer une fonction personnalisée forEach
 * 
 * Créez votre propre fonction "monForEach" qui imite le comportement
 * de forEach.
 * 
 * Syntaxe :
 * function monForEach(tableau, callback) {
 *     for (let i = 0; i < tableau.length; i++) {
 *         callback(tableau[i], i, tableau);
 *     }
 * }
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 4.3 : map() - Transformer un tableau
// ============================================================
console.log("\n--- Étape 4.3 : map() ---\n");

/**
 * TODO 3.1 : Utiliser map() pour doubler chaque nombre
 * 
 * Instructions détaillées :
 * map() crée un nouveau tableau en appliquant une fonction à chaque élément.
 * 
 * Syntaxe :
 * const nouveauTableau = tableau.map(element => transformation);
 * 
 * Créez un tableau [1, 2, 3, 4, 5]
 * Utilisez map() pour créer un tableau avec chaque nombre doublé
 * Résultat attendu : [2, 4, 6, 8, 10]
 * 
 * VOTRE CODE ICI :
 */

// const nombres = [1, 2, 3, 4, 5];
// const doubles = nombres.map(...);


/**
 * TODO 3.2 : Transformer des objets avec map()
 * 
 * Créez un tableau d'objets :
 * const personnes = [
 *     {nom: "Alice", age: 25},
 *     {nom: "Bob", age: 30},
 *     {nom: "Charlie", age: 20}
 * ];
 * 
 * Utilisez map() pour créer un tableau de chaînes :
 * ["Alice a 25 ans", "Bob a 30 ans", "Charlie a 20 ans"]
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 3.3 : Créer une fonction personnalisée map
 * 
 * Créez votre propre fonction "monMap" qui imite map().
 * 
 * function monMap(tableau, callback) {
 *     const resultat = [];
 *     for (let i = 0; i < tableau.length; i++) {
 *         resultat.push(callback(tableau[i], i, tableau));
 *     }
 *     return resultat;
 * }
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 4.4 : filter() - Filtrer un tableau
// ============================================================
console.log("\n--- Étape 4.4 : filter() ---\n");

/**
 * TODO 4.1 : Filtrer les nombres pairs
 * 
 * Instructions détaillées :
 * filter() crée un nouveau tableau avec les éléments qui passent un test.
 * 
 * Syntaxe :
 * const nouveauTableau = tableau.filter(element => condition);
 * 
 * Créez un tableau [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * Utilisez filter() pour garder seulement les nombres pairs
 * Résultat attendu : [2, 4, 6, 8, 10]
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 4.2 : Filtrer des objets
 * 
 * Avec le tableau de personnes de l'exercice 3.2 :
 * Utilisez filter() pour garder seulement les personnes majeures (age >= 18)
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 4.3 : Créer une fonction personnalisée filter
 * 
 * Créez votre propre fonction "monFilter" qui imite filter().
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 4.5 : reduce() - Réduire à une valeur
// ============================================================
console.log("\n--- Étape 4.5 : reduce() ---\n");

/**
 * TODO 5.1 : Utiliser reduce() pour calculer une somme
 * 
 * Instructions détaillées :
 * reduce() réduit un tableau à une valeur unique.
 * 
 * Syntaxe :
 * const resultat = tableau.reduce((accumulateur, element) => {
 *     return nouvelleValeur;
 * }, valeurInitiale);
 * 
 * Utilisez reduce() pour calculer la somme de [1, 2, 3, 4, 5]
 * Résultat attendu : 15
 * 
 * VOTRE CODE ICI :
 */

// const nombres = [1, 2, 3, 4, 5];
// const somme = nombres.reduce(...);


/**
 * TODO 5.2 : Utiliser reduce() pour trouver le maximum
 * 
 * Utilisez reduce() pour trouver le plus grand nombre dans un tableau
 * 
 * Astuce : comparer chaque élément avec l'accumulateur
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 5.3 : Utiliser reduce() pour compter les occurrences
 * 
 * Créez une fonction "compterOccurrences" qui prend un tableau de mots
 * et retourne un objet avec le nombre de fois que chaque mot apparaît.
 * 
 * Exemple :
 * compterOccurrences(["pomme", "banane", "pomme", "orange", "banane"])
 * → {pomme: 2, banane: 2, orange: 1}
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 4.6 : find() et autres méthodes
// ============================================================
console.log("\n--- Étape 4.6 : find() et autres méthodes ---\n");

/**
 * TODO 6.1 : Utiliser find()
 * 
 * find() retourne le premier élément qui passe un test.
 * 
 * Avec le tableau de personnes :
 * Utilisez find() pour trouver la personne avec le nom "Bob"
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 6.2 : Utiliser some() et every()
 * 
 * - some() : retourne true si au moins un élément passe le test
 * - every() : retourne true si tous les éléments passent le test
 * 
 * Vérifiez :
 * 1. Si au moins une personne a moins de 25 ans (some)
 * 2. Si toutes les personnes sont majeures (every)
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 4.7 : Composition de fonctions
// ============================================================
console.log("\n--- Étape 4.7 : Composition de fonctions ---\n");

/**
 * TODO 7.1 : Enchaîner map, filter, reduce
 * 
 * Créez un tableau de nombres : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * 
 * Enchaînez les opérations suivantes :
 * 1. Filtrer les nombres pairs
 * 2. Multiplier chaque nombre par 3
 * 3. Calculer la somme
 * 
 * Résultat attendu : (2+4+6+8+10) * 3 = 90
 * 
 * Syntaxe :
 * const resultat = tableau
 *     .filter(...)
 *     .map(...)
 *     .reduce(...);
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 7.2 : Fonction de composition
 * 
 * Créez une fonction "composer" qui prend plusieurs fonctions
 * et retourne une fonction composée.
 * 
 * Exemple :
 * const ajouter1 = x => x + 1;
 * const multiplierPar2 = x => x * 2;
 * const composer = (f, g) => x => f(g(x));
 * 
 * const ajouter1EtMultiplier = composer(multiplierPar2, ajouter1);
 * ajouter1EtMultiplier(5); // → 12 (5+1=6, 6*2=12)
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 4.8 : Exercice de synthèse - Manipulation de données
// ============================================================
console.log("\n--- Étape 4.8 : Exercice de synthèse ---\n");

/**
 * TODO 8.1 : Traiter une liste de tâches
 * 
 * Créez un tableau de tâches :
 * const taches = [
 *     {id: 1, titre: "Apprendre JavaScript", terminee: false, priorite: 3},
 *     {id: 2, titre: "Faire les courses", terminee: true, priorite: 2},
 *     {id: 3, titre: "Appeler maman", terminee: false, priorite: 1},
 *     {id: 4, titre: "Lire un livre", terminee: false, priorite: 2},
 *     {id: 5, titre: "Faire du sport", terminee: true, priorite: 3}
 * ];
 * 
 * Utilisez les méthodes array pour :
 * 1. Filtrer les tâches non terminées
 * 2. Trier par priorité (du plus important au moins important)
 * 3. Extraire seulement les titres
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 8.2 : Statistiques sur les tâches
 * 
 * À partir du même tableau de tâches :
 * 
 * 1. Compter le nombre de tâches terminées (filter + length)
 * 2. Calculer la moyenne des priorités (reduce)
 * 3. Trouver la tâche la plus prioritaire (reduce)
 * 4. Créer un objet avec les statistiques :
 *    {
 *        total: 5,
 *        terminees: 2,
 *        nonTerminees: 3,
 *        moyennePriorite: 2.2
 *    }
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// VÉRIFICATIONS FINALES
// ============================================================
console.log("\n=== VÉRIFICATIONS ===");
console.log("✅ Vous comprenez les callbacks");
console.log("✅ Vous maîtrisez forEach, map, filter, reduce");
console.log("✅ Vous pouvez enchaîner les méthodes array");
console.log("✅ Vous créez vos propres fonctions d'ordre supérieur\n");

console.log("=== EXERCICE 4 TERMINÉ ===");
console.log("Bravo ! Passez à l'exercice 5 (Récursivité) ! 🎉\n");


