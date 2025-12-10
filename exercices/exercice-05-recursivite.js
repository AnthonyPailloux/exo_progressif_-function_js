/**
 * ====================================================================
 * EXERCICE 5 : RÉCURSIVITÉ
 * ====================================================================
 * 
 * BUT : Comprendre et maîtriser les fonctions récursives
 *       - Comprendre le concept de récursivité
 *       - Identifier les cas de base
 *       - Éviter les boucles infinies
 *       - Résoudre des problèmes complexes avec la récursivité
 * 
 * CONCEPTS ABORDÉS :
 * - Fonction récursive (qui s'appelle elle-même)
 * - Cas de base (base case)
 * - Cas récursif (recursive case)
 * - Stack overflow (débordement de pile)
 * - Récursivité vs itération
 * 
 * TEMPS ESTIMÉ : 60-90 minutes
 * NIVEAU : Avancé
 */

console.log("=== EXERCICE 5 : RÉCURSIVITÉ ===\n");

// ============================================================
// ÉTAPE 5.1 : Introduction à la récursivité
// ============================================================
console.log("--- Étape 5.1 : Introduction ---\n");

/**
 * TODO 1.1 : Comprendre la structure d'une fonction récursive
 * 
 * Instructions détaillées :
 * Une fonction récursive est une fonction qui s'appelle elle-même.
 * 
 * Structure typique :
 * function fonctionRecursive(parametre) {
 *     // 1. CAS DE BASE : condition d'arrêt
 *     if (conditionArrêt) {
 *         return valeur;
 *     }
 *     
 *     // 2. CAS RÉCURSIF : appel à soi-même avec valeur modifiée
 *     return fonctionRecursive(parametreModifié);
 * }
 * 
 * IMPORTANT : Sans cas de base, la fonction tournera à l'infini !
 * 
 * Créez une fonction "compter" qui compte de n jusqu'à 0 de manière récursive.
 * 
 * Exemple :
 * compter(5) devrait afficher :
 * 5
 * 4
 * 3
 * 2
 * 1
 * 0
 * 
 * VOTRE CODE ICI :
 */

// function compter(n) {
//     // Cas de base : si n < 0, on s'arrête
//     if (n < 0) {
//         return;
//     }
//     
//     // Afficher le nombre actuel
//     console.log(n);
//     
//     // Cas récursif : appeler compter avec n-1
//     ...
// }


/**
 * TODO 1.2 : Compter en montant
 * 
 * Créez une fonction "compterJusqua" qui compte de 0 jusqu'à n
 * 
 * Exemple :
 * compterJusqua(5) devrait afficher :
 * 0
 * 1
 * 2
 * 3
 * 4
 * 5
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 5.2 : Factorielle
// ============================================================
console.log("\n--- Étape 5.2 : Factorielle ---\n");

/**
 * TODO 2.1 : Implémenter la factorielle de manière récursive
 * 
 * Instructions détaillées :
 * La factorielle de n (écrit n!) est le produit de tous les entiers de 1 à n.
 * 
 * Exemples :
 * 0! = 1 (par définition)
 * 1! = 1
 * 2! = 2 * 1 = 2
 * 3! = 3 * 2 * 1 = 6
 * 4! = 4 * 3 * 2 * 1 = 24
 * 5! = 5 * 4 * 3 * 2 * 1 = 120
 * 
 * Relation récursive :
 * n! = n * (n-1)!
 * 
 * Cas de base : 0! = 1 ou 1! = 1
 * 
 * Créez une fonction "factorielle" qui calcule n! de manière récursive.
 * 
 * VOTRE CODE ICI :
 */

// function factorielle(n) {
//     // Cas de base
//     if (n <= 1) {
//         return 1;
//     }
//     
//     // Cas récursif
//     return n * factorielle(n - 1);
// }


/**
 * TODO 2.2 : Tester la factorielle
 * 
 * Testez avec :
 * - factorielle(0) → 1
 * - factorielle(1) → 1
 * - factorielle(5) → 120
 * - factorielle(10) → 3628800
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 5.3 : Suite de Fibonacci
// ============================================================
console.log("\n--- Étape 5.3 : Suite de Fibonacci ---\n");

/**
 * TODO 3.1 : Implémenter Fibonacci récursif
 * 
 * Instructions détaillées :
 * La suite de Fibonacci est : 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * 
 * Chaque nombre est la somme des deux précédents :
 * fib(0) = 0
 * fib(1) = 1
 * fib(n) = fib(n-1) + fib(n-2)
 * 
 * Cas de base : fib(0) = 0, fib(1) = 1
 * Cas récursif : fib(n) = fib(n-1) + fib(n-2)
 * 
 * Créez une fonction "fibonacci" qui retourne le n-ième nombre de Fibonacci.
 * 
 * VOTRE CODE ICI :
 */

// function fibonacci(n) {
//     // Cas de base
//     ...
//     
//     // Cas récursif
//     ...
// }


/**
 * TODO 3.2 : Tester Fibonacci
 * 
 * Testez avec :
 * fibonacci(0) → 0
 * fibonacci(1) → 1
 * fibonacci(2) → 1
 * fibonacci(3) → 2
 * fibonacci(4) → 3
 * fibonacci(5) → 5
 * fibonacci(10) → 55
 * 
 * ATTENTION : Cette version récursive est très lente pour n > 30 !
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 5.4 : Puissance récursive
// ============================================================
console.log("\n--- Étape 5.4 : Puissance ---\n");

/**
 * TODO 4.1 : Calculer a puissance n de manière récursive
 * 
 * Créez une fonction "puissance" qui calcule a^n de manière récursive.
 * 
 * Relation récursive :
 * a^0 = 1 (cas de base)
 * a^n = a * a^(n-1) (cas récursif)
 * 
 * Exemples :
 * puissance(2, 3) → 8 (2 * 2 * 2)
 * puissance(5, 2) → 25 (5 * 5)
 * puissance(10, 0) → 1
 * 
 * VOTRE CODE ICI :
 */

// function puissance(a, n) {
//     // Cas de base
//     ...
//     
//     // Cas récursif
//     ...
// }


/**
 * TODO 4.2 : Version optimisée avec puissance paire
 * 
 * Pour optimiser, on peut utiliser :
 * - Si n est pair : a^n = (a^(n/2))^2
 * - Si n est impair : a^n = a * a^(n-1)
 * 
 * Créez "puissanceOptimisee" avec cette optimisation.
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 5.5 : Parcours de structures
// ============================================================
console.log("\n--- Étape 5.5 : Parcours de structures ---\n");

/**
 * TODO 5.1 : Calculer la somme d'un tableau récursivement
 * 
 * Créez une fonction "sommeTableau" qui calcule la somme des éléments
 * d'un tableau de manière récursive.
 * 
 * Approche :
 * - Cas de base : tableau vide → retourner 0
 * - Cas récursif : premier élément + somme du reste du tableau
 * 
 * Pour obtenir le reste du tableau : tableau.slice(1)
 * 
 * Exemple :
 * sommeTableau([1, 2, 3, 4]) → 10
 * 
 * VOTRE CODE ICI :
 */

// function sommeTableau(tableau) {
//     // Cas de base
//     if (tableau.length === 0) {
//         return 0;
//     }
//     
//     // Cas récursif
//     return tableau[0] + sommeTableau(tableau.slice(1));
// }


/**
 * TODO 5.2 : Inverser une chaîne récursivement
 * 
 * Créez une fonction "inverserChaine" qui inverse une chaîne de caractères.
 * 
 * Approche :
 * - Cas de base : chaîne vide ou un seul caractère → retourner la chaîne
 * - Cas récursif : dernier caractère + inversion du reste
 * 
 * Exemple :
 * inverserChaine("hello") → "olleh"
 * 
 * Pour obtenir le dernier caractère : chaine[chaine.length - 1]
 * Pour obtenir le reste sans le dernier : chaine.slice(0, -1)
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 5.3 : Vérifier si une chaîne est un palindrome
 * 
 * Un palindrome se lit de la même manière dans les deux sens.
 * Exemples : "radar", "kayak", "level"
 * 
 * Créez une fonction "estPalindrome" qui vérifie récursivement.
 * 
 * Approche :
 * - Cas de base : 0 ou 1 caractère → true
 * - Si premier != dernier → false
 * - Sinon, vérifier le milieu récursivement
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 5.6 : Parcours d'arbre
// ============================================================
console.log("\n--- Étape 5.6 : Parcours d'arbre ---\n");

/**
 * TODO 6.1 : Structure d'arbre
 * 
 * Un arbre est une structure de données où chaque nœud peut avoir des enfants.
 * 
 * Exemple de structure :
 * const arbre = {
 *     valeur: "A",
 *     enfants: [
 *         {valeur: "B", enfants: []},
 *         {
 *             valeur: "C",
 *             enfants: [
 *                 {valeur: "D", enfants: []},
 *                 {valeur: "E", enfants: []}
 *             ]
 *         }
 *     ]
 * };
 * 
 * Créez un arbre simple pour tester.
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 6.2 : Parcourir un arbre récursivement
 * 
 * Créez une fonction "parcourirArbre" qui affiche toutes les valeurs
 * de l'arbre de manière récursive.
 * 
 * Approche :
 * - Afficher la valeur du nœud actuel
 * - Parcourir récursivement chaque enfant
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 6.3 : Compter les nœuds d'un arbre
 * 
 * Créez une fonction "compterNoeuds" qui compte le nombre total
 * de nœuds dans un arbre.
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 5.7 : Recherche récursive
// ============================================================
console.log("\n--- Étape 5.7 : Recherche récursive ---\n");

/**
 * TODO 7.1 : Recherche binaire récursive
 * 
 * La recherche binaire est très efficace sur un tableau trié.
 * 
 * Principe :
 * 1. Prendre l'élément du milieu
 * 2. Si c'est la cible → retourner l'index
 * 3. Si la cible est plus petite → chercher dans la moitié gauche
 * 4. Si la cible est plus grande → chercher dans la moitié droite
 * 
 * Créez une fonction "rechercheBinaire" qui trouve un élément dans un tableau trié.
 * 
 * VOTRE CODE ICI :
 */

// function rechercheBinaire(tableau, cible, debut = 0, fin = tableau.length - 1) {
//     // Cas de base : pas trouvé
//     if (debut > fin) {
//         return -1;
//     }
//     
//     const milieu = Math.floor((debut + fin) / 2);
//     
//     if (tableau[milieu] === cible) {
//         return milieu;
//     }
//     
//     if (tableau[milieu] > cible) {
//         // Chercher à gauche
//         ...
//     } else {
//         // Chercher à droite
//         ...
//     }
// }


// ============================================================
// ÉTAPE 5.8 : Exercice de synthèse - Tours de Hanoï
// ============================================================
console.log("\n--- Étape 5.8 : Exercice de synthèse ---\n");

/**
 * TODO 8.1 : Comprendre le problème des Tours de Hanoï
 * 
 * C'est un problème classique de récursivité.
 * Objectif : Déplacer n disques d'une tour à une autre en respectant les règles :
 * 1. On ne peut déplacer qu'un disque à la fois
 * 2. On ne peut placer un disque que sur un disque plus grand
 * 
 * Créez une fonction "hanoi" qui résout ce problème.
 * 
 * Paramètres :
 * - n : nombre de disques
 * - source : nom de la tour source
 * - destination : nom de la tour destination
 * - intermediaire : nom de la tour intermédiaire
 * 
 * La fonction doit afficher les mouvements à effectuer.
 * 
 * Algorithme :
 * 1. Si n == 1 : déplacer directement
 * 2. Sinon :
 *    - Déplacer n-1 disques de source vers intermédiaire
 *    - Déplacer le disque restant de source vers destination
 *    - Déplacer n-1 disques de intermédiaire vers destination
 * 
 * VOTRE CODE ICI :
 */

// function hanoi(n, source, destination, intermediaire) {
//     if (n === 1) {
//         console.log(`Déplacer le disque de ${source} vers ${destination}`);
//         return;
//     }
//     
//     // Déplacer n-1 disques vers l'intermédiaire
//     hanoi(n - 1, source, intermediaire, destination);
//     
//     // Déplacer le plus grand disque
//     console.log(`Déplacer le disque de ${source} vers ${destination}`);
//     
//     // Déplacer n-1 disques de l'intermédiaire vers la destination
//     hanoi(n - 1, intermediaire, destination, source);
// }


/**
 * TODO 8.2 : Tester avec 3 disques
 * 
 * Testez : hanoi(3, "A", "C", "B")
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// VÉRIFICATIONS FINALES
// ============================================================
console.log("\n=== VÉRIFICATIONS ===");
console.log("✅ Vous comprenez le concept de récursivité");
console.log("✅ Vous identifiez les cas de base et récursifs");
console.log("✅ Vous pouvez implémenter des algorithmes récursifs");
console.log("✅ Vous savez éviter les boucles infinies\n");

console.log("⚠️ RAPPEL IMPORTANT :");
console.log("La récursivité peut être plus lente que l'itération");
console.log("et peut causer des débordements de pile pour de grandes valeurs.\n");

console.log("=== EXERCICE 5 TERMINÉ ===");
console.log("Excellent ! Vous êtes prêt pour le projet final ! 🎉\n");


