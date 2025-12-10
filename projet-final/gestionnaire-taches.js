/**
 * GESTIONNAIRE DE TÂCHES - VERSION AVEC INTERFACE
 * 
 * Ce fichier utilise toutes les fonctions créées dans l'exercice 6
 * et les connecte à l'interface HTML.
 * 
 * INSTRUCTIONS :
 * Ce fichier est un exemple de solution. 
 * Pour apprendre, complétez d'abord exercice-06-projet-final.js
 * puis adaptez les fonctions ici pour créer cette interface.
 */

// État global
let taches = [];
let prochainId = 1;

// ============================================================
// FONCTIONS CORE (à créer d'abord dans exercice-06)
// ============================================================

function genererId() {
    return prochainId++;
}

function creerTache(titre, description = "", priorite = 3, dateEcheance = null) {
    return {
        id: genererId(),
        titre: titre,
        description: description,
        terminee: false,
        priorite: priorite,
        dateCreation: new Date(),
        dateEcheance: dateEcheance ? new Date(dateEcheance) : null
    };
}

function ajouterTache(titre, description, priorite, dateEcheance) {
    const tache = creerTache(titre, description, priorite, dateEcheance);
    taches.push(tache);
    return tache;
}

function trouverTacheParId(id) {
    return taches.find(t => t.id === id);
}

function marquerCommeTerminee(id) {
    const tache = trouverTacheParId(id);
    if (tache) {
        tache.terminee = !tache.terminee; // Toggle
        return true;
    }
    return false;
}

function supprimerTache(id) {
    const index = taches.findIndex(t => t.id === id);
    if (index !== -1) {
        taches.splice(index, 1);
        return true;
    }
    return false;
}

function obtenirStatistiques() {
    const total = taches.length;
    const terminees = taches.filter(t => t.terminee).length;
    const nonTerminees = total - terminees;
    const moyennePriorite = total > 0 
        ? taches.reduce((sum, t) => sum + t.priorite, 0) / total 
        : 0;

    return {
        total,
        terminees,
        nonTerminees,
        moyennePriorite: moyennePriorite.toFixed(1)
    };
}

// ============================================================
// FONCTIONS DE FILTRAGE ET RECHERCHE
// ============================================================

function filtrerTaches(recherche, statut, prioriteMin) {
    let resultat = [...taches];

    // Recherche par texte
    if (recherche) {
        const terme = recherche.toLowerCase();
        resultat = resultat.filter(t => 
            t.titre.toLowerCase().includes(terme) ||
            t.description.toLowerCase().includes(terme)
        );
    }

    // Filtre par statut
    if (statut === "terminees") {
        resultat = resultat.filter(t => t.terminee);
    } else if (statut === "non-terminees") {
        resultat = resultat.filter(t => !t.terminee);
    }

    // Filtre par priorité
    if (prioriteMin > 0) {
        resultat = resultat.filter(t => t.priorite >= prioriteMin);
    }

    return resultat;
}

function trierTaches(taches, critere) {
    const tachesCopiees = [...taches];

    switch(critere) {
        case "date-desc":
            return tachesCopiees.sort((a, b) => b.dateCreation - a.dateCreation);
        case "date-asc":
            return tachesCopiees.sort((a, b) => a.dateCreation - b.dateCreation);
        case "priorite-desc":
            return tachesCopiees.sort((a, b) => b.priorite - a.priorite);
        case "priorite-asc":
            return tachesCopiees.sort((a, b) => a.priorite - b.priorite);
        case "titre-asc":
            return tachesCopiees.sort((a, b) => a.titre.localeCompare(b.titre));
        default:
            return tachesCopiees;
    }
}

// ============================================================
// FONCTIONS D'AFFICHAGE
// ============================================================

function afficherStatistiques() {
    const stats = obtenirStatistiques();
    document.getElementById("stat-total").textContent = stats.total;
    document.getElementById("stat-terminees").textContent = stats.terminees;
    document.getElementById("stat-non-terminees").textContent = stats.nonTerminees;
    document.getElementById("stat-priorite").textContent = stats.moyennePriorite;
}

function formaterDate(date) {
    if (!date) return "";
    return new Date(date).toLocaleDateString("fr-FR");
}

function creerElementTache(tache) {
    const div = document.createElement("div");
    div.className = `tache-card ${tache.terminee ? "terminee" : ""}`;
    div.innerHTML = `
        <div class="tache-header">
            <div>
                <div class="tache-titre">${tache.titre}</div>
                ${tache.description ? `<div class="tache-description">${tache.description}</div>` : ""}
            </div>
            <div class="tache-actions">
                <button class="btn-icon terminer" onclick="toggleTerminee(${tache.id})" title="Marquer comme ${tache.terminee ? 'non ' : ''}terminée">
                    ${tache.terminee ? "✓" : "○"}
                </button>
                <button class="btn-icon supprimer" onclick="supprimerTacheUI(${tache.id})" title="Supprimer">🗑️</button>
            </div>
        </div>
        <div class="tache-meta">
            <span>⭐ Priorité: ${"⭐".repeat(tache.priorite)}</span>
            <span>📅 Créée: ${formaterDate(tache.dateCreation)}</span>
            ${tache.dateEcheance ? `<span>⏰ Échéance: ${formaterDate(tache.dateEcheance)}</span>` : ""}
        </div>
    `;
    return div;
}

function afficherTaches() {
    const recherche = document.getElementById("recherche").value;
    const statut = document.getElementById("filtre-statut").value;
    const priorite = parseInt(document.getElementById("filtre-priorite").value);
    const tri = document.getElementById("tri").value;

    let tachesFiltrees = filtrerTaches(recherche, statut, priorite);
    tachesFiltrees = trierTaches(tachesFiltrees, tri);

    const container = document.getElementById("liste-taches");
    
    if (tachesFiltrees.length === 0) {
        container.innerHTML = '<p class="empty-message">Aucune tâche ne correspond aux filtres.</p>';
    } else {
        container.innerHTML = "";
        tachesFiltrees.forEach(tache => {
            container.appendChild(creerElementTache(tache));
        });
    }

    afficherStatistiques();
}

// ============================================================
// GESTION DES ÉVÉNEMENTS
// ============================================================

function toggleTerminee(id) {
    marquerCommeTerminee(id);
    afficherTaches();
}

function supprimerTacheUI(id) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette tâche ?")) {
        supprimerTache(id);
        afficherTaches();
    }
}

// Initialisation
document.addEventListener("DOMContentLoaded", function() {
    // Formulaire d'ajout
    document.getElementById("form-tache").addEventListener("submit", function(e) {
        e.preventDefault();
        
        const titre = document.getElementById("titre").value.trim();
        const description = document.getElementById("description").value.trim();
        const priorite = parseInt(document.getElementById("priorite").value);
        const dateEcheance = document.getElementById("date-echeance").value || null;

        if (titre) {
            ajouterTache(titre, description, priorite, dateEcheance);
            this.reset();
            document.getElementById("priorite").value = "3";
            afficherTaches();
        }
    });

    // Filtres
    document.getElementById("recherche").addEventListener("input", afficherTaches);
    document.getElementById("filtre-statut").addEventListener("change", afficherTaches);
    document.getElementById("filtre-priorite").addEventListener("change", afficherTaches);
    document.getElementById("tri").addEventListener("change", afficherTaches);

    // Affichage initial
    afficherTaches();

    // Données d'exemple (optionnel - à supprimer)
    if (taches.length === 0) {
        ajouterTache("Apprendre JavaScript", "Compléter les exercices sur les fonctions", 5);
        ajouterTache("Faire les courses", "Lait, pain, œufs", 2);
        ajouterTache("Appeler maman", "", 1);
        afficherTaches();
    }
});


