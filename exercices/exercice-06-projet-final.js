/**
 * ====================================================================
 * EXERCICE 6 : PROJET FINAL - GESTIONNAIRE DE TÂCHES
 * ====================================================================
 * 
 * BUT : Créer une application complète en utilisant toutes les compétences acquises
 *       - Toutes les syntaxes de fonctions
 *       - Fonctions avancées (closures, callbacks)
 *       - Fonctions d'ordre supérieur
 *       - Architecture modulaire avec fonctions
 * 
 * CONCEPTS ABORDÉS :
 * - Architecture d'application avec fonctions
 * - Création, lecture, mise à jour, suppression (CRUD)
 * - Filtrage et recherche
 * - Statistiques et agrégations
 * - Manipulation d'objets et tableaux
 * - Validation de données
 * 
 * TEMPS ESTIMÉ : 90-120 minutes
 * NIVEAU : Avancé - Projet Complet
 */

console.log("=== EXERCICE 6 : GESTIONNAIRE DE TÂCHES ===\n");

// ============================================================
// STRUCTURE DE DONNÉES
// ============================================================
/**
 * Une tâche aura cette structure :
 * {
 *     id: nombre unique,
 *     titre: "texte",
 *     description: "texte",
 *     terminee: true/false,
 *     priorite: 1-5 (1 = faible, 5 = urgente),
 *     dateCreation: Date,
 *     dateEcheance: Date (optionnel)
 * }
 */

// Tableau pour stocker toutes les tâches
let taches = [];
let prochainId = 1; // Pour générer des ID uniques

// ============================================================
// ÉTAPE 6.1 : Fonctions de création et génération d'ID
// ============================================================
console.log("--- Étape 6.1 : Création de tâches ---\n");

/**
 * TODO 1.1 : Créer une fonction pour générer un ID unique
 * 
 * Créez une fonction "genererId" qui retourne un ID unique
 * et incrémente prochainId pour le prochain appel.
 * 
 * Utilisez une closure pour gérer prochainId de manière sécurisée.
 * 
 * Exemple :
 * genererId() → 1
 * genererId() → 2
 * genererId() → 3
 * 
 * VOTRE CODE ICI :
 */

// function creerGenerateurId() {
//     let id = 1;
//     return function() {
//         return id++;
//     };
// }
// const genererId = creerGenerateurId();

// Ou version simple :
// function genererId() {
//     return prochainId++;
// }


/**
 * TODO 1.2 : Créer une fonction "creerTache"
 * 
 * Cette fonction prend les paramètres suivants :
 * - titre (obligatoire)
 * - description (par défaut : "")
 * - priorite (par défaut : 3)
 * - dateEcheance (par défaut : null)
 * 
 * Elle retourne un objet tâche avec :
 * - id : généré automatiquement
 * - titre, description, priorite, dateEcheance : comme fourni
 * - terminee : false par défaut
 * - dateCreation : Date actuelle
 * 
 * Exemple :
 * creerTache("Apprendre JavaScript", "Compléter les exercices", 5)
 * 
 * VOTRE CODE ICI :
 */

// function creerTache(titre, description = "", priorite = 3, dateEcheance = null) {
//     return {
//         id: genererId(),
//         titre: titre,
//         description: description,
//         terminee: false,
//         priorite: priorite,
//         dateCreation: new Date(),
//         dateEcheance: dateEcheance
//     };
// }


/**
 * TODO 1.3 : Fonction "ajouterTache"
 * 
 * Créez une fonction qui :
 * 1. Crée une tâche avec creerTache()
 * 2. L'ajoute au tableau taches
 * 3. Retourne la tâche créée
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 1.4 : Tester la création de tâches
 * 
 * Créez quelques tâches pour tester :
 * - "Apprendre JavaScript" (priorité 5)
 * - "Faire les courses" (priorité 2)
 * - "Appeler maman" (priorité 1)
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 6.2 : Fonctions de lecture (affichage)
// ============================================================
console.log("\n--- Étape 6.2 : Affichage des tâches ---\n");

/**
 * TODO 2.1 : Fonction "afficherTache"
 * 
 * Créez une fonction qui prend une tâche et l'affiche de manière lisible.
 * 
 * Format d'affichage :
 * "[ID] Titre
 *  Description: ...
 *  Priorité: ⭐⭐⭐ (selon la priorité)
 *  Statut: ✓ Terminée ou ✗ Non terminée
 *  Créée le: [date]"
 * 
 * VOTRE CODE ICI :
 */

// function afficherTache(tache) {
//     console.log(`[${tache.id}] ${tache.titre}`);
//     if (tache.description) {
//         console.log(`   Description: ${tache.description}`);
//     }
//     console.log(`   Priorité: ${"⭐".repeat(tache.priorite)}`);
//     console.log(`   Statut: ${tache.terminee ? "✓ Terminée" : "✗ Non terminée"}`);
//     console.log(`   Créée le: ${tache.dateCreation.toLocaleDateString()}`);
//     console.log("");
// }


/**
 * TODO 2.2 : Fonction "afficherToutesLesTaches"
 * 
 * Affiche toutes les tâches du tableau taches.
 * Si le tableau est vide, affichez un message approprié.
 * 
 * Utilisez forEach() ou une boucle for...of.
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 2.3 : Fonction "afficherTachesParStatut"
 * 
 * Prend un paramètre "terminee" (boolean)
 * Affiche seulement les tâches avec ce statut.
 * 
 * Utilisez filter() pour filtrer les tâches.
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 6.3 : Fonctions de recherche
// ============================================================
console.log("\n--- Étape 6.3 : Recherche de tâches ---\n");

/**
 * TODO 3.1 : Fonction "trouverTacheParId"
 * 
 * Prend un id et retourne la tâche correspondante.
 * Retourne null si aucune tâche n'est trouvée.
 * 
 * Utilisez find().
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 3.2 : Fonction "rechercherTaches"
 * 
 * Prend un terme de recherche (texte)
 * Retourne toutes les tâches dont le titre ou la description
 * contient ce terme (insensible à la casse).
 * 
 * Astuce : utilisez toLowerCase() et includes()
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 3.3 : Fonction "filtrerTachesParPriorite"
 * 
 * Prend un niveau de priorité minimum
 * Retourne toutes les tâches avec une priorité >= à ce niveau.
 * 
 * Utilisez filter().
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 6.4 : Fonctions de mise à jour
// ============================================================
console.log("\n--- Étape 6.4 : Modification de tâches ---\n");

/**
 * TODO 4.1 : Fonction "marquerCommeTerminee"
 * 
 * Prend un id
 * Marque la tâche correspondante comme terminée.
 * Retourne true si succès, false si tâche non trouvée.
 * 
 * VOTRE CODE ICI :
 */

// function marquerCommeTerminee(id) {
//     const tache = trouverTacheParId(id);
//     if (tache) {
//         tache.terminee = true;
//         return true;
//     }
//     return false;
// }


/**
 * TODO 4.2 : Fonction "modifierPriorite"
 * 
 * Prend un id et une nouvelle priorité
 * Modifie la priorité de la tâche.
 * Validez que la priorité est entre 1 et 5.
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 4.3 : Fonction "modifierTache"
 * 
 * Prend un id et un objet avec les propriétés à modifier.
 * Modifie uniquement les propriétés fournies.
 * 
 * Exemple :
 * modifierTache(1, {titre: "Nouveau titre", priorite: 4})
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 6.5 : Fonctions de suppression
// ============================================================
console.log("\n--- Étape 6.5 : Suppression de tâches ---\n");

/**
 * TODO 5.1 : Fonction "supprimerTache"
 * 
 * Prend un id
 * Supprime la tâche correspondante du tableau.
 * Retourne true si succès, false si tâche non trouvée.
 * 
 * Utilisez filter() pour créer un nouveau tableau sans la tâche.
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 5.2 : Fonction "supprimerTachesTerminees"
 * 
 * Supprime toutes les tâches terminées.
 * Retourne le nombre de tâches supprimées.
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 6.6 : Statistiques et agrégations
// ============================================================
console.log("\n--- Étape 6.6 : Statistiques ---\n");

/**
 * TODO 6.1 : Fonction "obtenirStatistiques"
 * 
 * Retourne un objet avec les statistiques suivantes :
 * {
 *     total: nombre total de tâches,
 *     terminees: nombre de tâches terminées,
 *     nonTerminees: nombre de tâches non terminées,
 *     moyennePriorite: moyenne des priorités,
 *     parPriorite: {1: nombre, 2: nombre, ...}
 * }
 * 
 * Utilisez reduce() pour les calculs complexes.
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 6.2 : Fonction "afficherStatistiques"
 * 
 * Affiche les statistiques de manière lisible.
 * 
 * Format :
 * "=== STATISTIQUES ===
 *  Total: X tâches
 *  Terminées: Y
 *  Non terminées: Z
 *  Priorité moyenne: X.X"
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 6.7 : Trier et organiser
// ============================================================
console.log("\n--- Étape 6.7 : Tri des tâches ---\n");

/**
 * TODO 7.1 : Fonction "trierTachesParPriorite"
 * 
 * Retourne un nouveau tableau trié par priorité (du plus important au moins important).
 * N'utilisez PAS sort() directement sur taches (ça modifierait l'original).
 * 
 * Utilisez spread operator pour créer une copie : [...taches]
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 7.2 : Fonction "trierTachesParDate"
 * 
 * Trie les tâches par date de création (du plus récent au plus ancien).
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 7.3 : Fonction "trierTaches"
 * 
 * Fonction générique qui prend un critère de tri ("priorite", "date", "titre")
 * et retourne un tableau trié.
 * 
 * Utilisez un objet avec des fonctions de comparaison.
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 6.8 : Fonctions utilitaires avancées
// ============================================================
console.log("\n--- Étape 6.8 : Fonctions utilitaires ---\n");

/**
 * TODO 8.1 : Fonction "exporterTaches"
 * 
 * Retourne une représentation JSON des tâches.
 * 
 * Utilisez JSON.stringify()
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 8.2 : Fonction "importerTaches"
 * 
 * Prend une chaîne JSON et importe les tâches.
 * Valide que les données sont correctes avant d'importer.
 * 
 * Utilisez JSON.parse() et validez la structure.
 * 
 * VOTRE CODE ICI :
 */




/**
 * TODO 8.3 : Fonction "reinitialiser"
 * 
 * Supprime toutes les tâches et remet prochainId à 1.
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// ÉTAPE 6.9 : Démonstration complète
// ============================================================
console.log("\n--- Étape 6.9 : Démonstration ---\n");

/**
 * TODO 9.1 : Créer un scénario de démonstration
 * 
 * Créez plusieurs tâches, testez toutes les fonctionnalités :
 * 1. Créer 5-6 tâches avec différents statuts et priorités
 * 2. Afficher toutes les tâches
 * 3. Rechercher une tâche
 * 4. Marquer une tâche comme terminée
 * 5. Modifier une tâche
 * 6. Filtrer par priorité
 * 7. Afficher les statistiques
 * 8. Trier les tâches
 * 9. Supprimer une tâche
 * 10. Afficher à nouveau les statistiques
 * 
 * VOTRE CODE ICI :
 */




// ============================================================
// VÉRIFICATIONS FINALES
// ============================================================
console.log("\n=== VÉRIFICATIONS ===");
console.log("✅ Vous avez créé toutes les fonctions CRUD");
console.log("✅ Vous avez implémenté recherche et filtrage");
console.log("✅ Vous avez créé des fonctions de statistiques");
console.log("✅ Vous avez implémenté le tri");
console.log("✅ Votre gestionnaire de tâches est fonctionnel !\n");

console.log("=== FÉLICITATIONS ! ===");
console.log("Vous avez terminé le projet final ! 🎉🎉🎉");
console.log("Vous maîtrisez maintenant les fonctions JavaScript !\n");


