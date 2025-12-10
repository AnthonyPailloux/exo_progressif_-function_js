/**
 * ====================================================================
 * EXERCICE 1 : LES BASES DES FONCTIONS
 * ====================================================================
 * 
 * BUT : Comprendre les concepts fondamentaux des fonctions JavaScript
 *       - Déclarer une fonction
 *       - Utiliser des paramètres
 *       - Retourner des valeurs
 * 
 * CONCEPTS ABORDÉS :
 * - Déclaration de fonction (function declaration)
 * - Paramètres et arguments
 * - Valeurs de retour (return)
 * - Portée des variables
 * - Appel de fonction
 * 
 * TEMPS ESTIMÉ : 30-45 minutes
 * NIVEAU : Débutant
 */

console.log("=== EXERCICE 1 : LES BASES DES FONCTIONS ===\n");

// ============================================================
// ÉTAPE 1.1 : Créer une fonction simple
// ============================================================
console.log("--- Étape 1.1 : Fonction simple ---\n");

/**
 * TODO 1.1 : Déclarer une fonction nommée "direBonjour"
 * 
 * Instructions détaillées :
 * 1. Utilisez la syntaxe : function nomDeLaFonction() { ... }
 * 2. À l'intérieur, utilisez console.log() pour afficher "Bonjour !"
 * 3. La fonction ne prend aucun paramètre (parenthèses vides)
 * 4. La fonction ne retourne rien (pas de return nécessaire)
 */

// VOTRE CODE ICI :
function hello() {
    console.log("Hello !");
}


/**
 * TODO 1.2 : Appeler la fonction direBonjour()
 * 
 * Instructions :
 * 1. Après avoir créé la fonction, appelez-la avec : direBonjour();
 * 2. Vous devriez voir "Bonjour !" s'afficher dans la console
 * 
 * VOTRE CODE ICI :*/
hello("");

// ============================================================
// ÉTAPE 1.2 : Fonction avec paramètre
// ============================================================
console.log("\n--- Étape 1.2 : Fonction avec paramètre ---\n");

/**
 * TODO 2.1 : Créer une fonction "direBonjourA" qui prend un paramètre "nom"
 * 
 * Instructions détaillées :
 * 1. La fonction doit accepter un paramètre appelé "nom"
 * 2. Elle doit afficher "Bonjour [nom] !" dans la console
 * 3. Pour concaténer (joindre) deux chaînes, utilisez l'opérateur +
 * 
 * Exemple :
 * direBonjourA("Alice") devrait afficher "Bonjour Alice !"
 * direBonjourA("Bob") devrait afficher "Bonjour Bob !"
 * 
 * Syntaxe : function nomFonction(parametre) { ... }
 * 
 * VOTRE CODE ICI :
 */
function hello(name) {
    console.log("Hello " + name);
}
hello("Tony");


/**
 * TODO 2.2 : Tester la fonction avec différents noms
 * 
 * Instructions :
 * Appelez la fonction direBonjourA() avec :
 * 1. "Alice"
 * 2. "Bob"
 * 3. Votre propre prénom
 * 
 * VOTRE CODE ICI :
 */
hello("Estelle");
hello("Aaron");
hello("Shawn");




// ============================================================
// ÉTAPE 1.3 : Fonction avec valeur de retour
// ============================================================
console.log("\n--- Étape 1.3 : Fonction avec valeur de retour ---\n");

/**
 * TODO 3.1 : Créer une fonction "additionner" qui retourne la somme
 * 
 * Instructions détaillées :
 * 1. La fonction prend deux paramètres : "a" et "b"
 * 2. Elle retourne la somme de a + b
 * 3. Utilisez le mot-clé "return" pour retourner la valeur
 * 4. La fonction ne doit PAS afficher avec console.log(), seulement retourner
 * 
 * Exemple :
 * const resultat = additionner(5, 3);  // resultat = 8
 * 
 * Syntaxe :
 * function nomFonction(param1, param2) {
 *     return valeur;
 * }
 * 
 * VOTRE CODE ICI :
 */
function addition(a, b) {
    return (a + b)
}
console.log("Mon resultat est de : ", addition(5, 33));

/**
 * TODO 3.2 : Tester la fonction additionner
 * 
 * Instructions :
 * 1. Appelez additionner(10, 5) et stockez le résultat dans une variable
 * 2. Affichez le résultat avec console.log()
 * 3. Testez avec d'autres nombres : (7, 3), (100, 50)
 * 
 * Exemple :
 * const somme = additionner(10, 5);
 * console.log("La somme est :", somme);
 * 
 * VOTRE CODE ICI :
 */
console.log("Mon resultat est de : ", addition(10, 5));
console.log("Mon resultat est de : ", addition(7, 3));
console.log("Mon resultat est de : ", addition(100, 50 ));




// ============================================================
// ÉTAPE 1.4 : Fonction avec plusieurs paramètres
// ============================================================
console.log("\n--- Étape 1.4 : Fonction avec plusieurs paramètres ---\n");

/**
 * TODO 4.1 : Créer une fonction "calculerMoyenne" de 3 nombres
 * 
 * Instructions détaillées :
 * 1. La fonction prend 3 paramètres : "nombre1", "nombre2", "nombre3"
 * 2. Elle calcule la moyenne : (nombre1 + nombre2 + nombre3) / 3
 * 3. Elle retourne le résultat
 * 
 * Exemple :
 * calculerMoyenne(10, 20, 30) devrait retourner 20
 * calculerMoyenne(5, 10, 15) devrait retourner 10
 * 
 * VOTRE CODE ICI :
 */
function moyenne(nbr1, nbr2, nbr3) {
    return (nbr1 + nbr2 + nbr3) / 3 
}
console.log("Mon resultat est de : ", moyenne(10, 20, 30));
console.log("Mon resultat est de : ", moyenne(5, 10, 15));



// function calculerMoyenne(nombre1, nombre2, nombre3) {
//     ...
// }


/**
 * TODO 4.2 : Tester calculerMoyenne
 * 
 * Testez avec :
 * - (10, 20, 30) → devrait donner 20
 * - (5, 5, 5) → devrait donner 5
 * - (0, 10, 20) → devrait donner 10
 * 
 * VOTRE CODE ICI :
 */
console.log("Mon resultat est de : ", moyenne(10, 20, 30));
console.log("Mon resultat est de : ", moyenne(5, 5, 5));
console.log("Mon resultat est de : ", moyenne(0, 10, 20));



// ============================================================
// ÉTAPE 1.5 : Fonction avec logique conditionnelle
// ============================================================
console.log("\n--- Étape 1.5 : Fonction avec condition ---\n");

/**
 * TODO 5.1 : Créer une fonction "estMajeur" qui vérifie l'âge
 * 
 * Instructions détaillées :
 * 1. La fonction prend un paramètre "age"
 * 2. Si l'âge est >= 18, retournez true
 * 3. Sinon, retournez false
 * 4. Utilisez une structure if/else
 * 
 * Exemple :
 * estMajeur(20) → true
 * estMajeur(15) → false
 * estMajeur(18) → true
 * 
 * Syntaxe if/else :
 * if (condition) {
 *     return true;
 * } else {
 *     return false;
 * }
 * 
 * VOTRE CODE ICI :
 */
function estMajeur(age) {
    if (age >= 18) {
        return true
    } else {
        return false
    }
}

console.log("Tu as 20 ans tu es majeur :", estMajeur(20));
console.log("Tu as 15 ans tu n'es  pas majeur :", estMajeur(15));
console.log("Tu as 18 ans tu es majeur :", estMajeur(18));



// ============================================================
// ÉTAPE 1.6 : Fonction combinée (plusieurs concepts)
// ============================================================
console.log("\n--- Étape 1.6 : Fonction combinée ---\n");

/**
 * TODO 6.1 : Créer une fonction "afficherInfoPersonne"
 * 
 * Instructions détaillées :
 * Cette fonction combine plusieurs concepts :
 * 1. Prend 2 paramètres : "nom" (texte) et "age" (nombre)
 * 2. Affiche dans la console : "[nom] a [age] ans"
 * 3. Utilise estMajeur() (que vous avez créée) pour vérifier si majeur
 * 4. Affiche aussi si la personne est majeure ou mineure
 * 
 * Exemple d'affichage attendu :
 * "Alice a 25 ans"
 * "Alice est majeure"
 * 
 * ou
 * 
 * "Bob a 16 ans"
 * "Bob est mineur"
 * 
 * Pour appeler une fonction dans une autre :
 * const resultat = nomAutreFonction(valeur);
 * 
 * VOTRE CODE ICI :
 */
function data1(name, age) {
    const result = console.log("Je m'appelle " + name + " et j'ai " + age + "ans");
    return result;
}

data1("Tony", 39);


    

// function afficherInfoPersonne(nom, age) {
//     // Afficher "[nom] a [age] ans"
//     ...
//     
//     // Vérifier si majeur et afficher le statut
//     ...
// }


/**
 * TODO 6.2 : Tester afficherInfoPersonne
 * 
 * Testez avec kd'autres données:
 * 
 * VOTRE CODE ICI :
 */
function data2(name, age) {
    const result = console.log("Elle s'appelle " + name + " et elle a " + age + "ans");
    return result;
}
data2("Estelle", 34)




// ============================================================
// VÉRIFICATIONS FINALES
// ============================================================
console.log("\n=== VÉRIFICATIONS ===");
console.log("✅ Vérifiez que toutes les fonctions fonctionnent");
console.log("✅ Assurez-vous d'avoir testé chaque fonction");
console.log("✅ Vérifiez que les résultats sont corrects\n");

console.log("=== EXERCICE 1 TERMINÉ ===");
console.log("Si tout fonctionne, passez à l'exercice 2 ! 🎉\n");


