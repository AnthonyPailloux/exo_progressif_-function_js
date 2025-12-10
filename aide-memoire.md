# 🧠 Aide-Mémoire : Les Fonctions JavaScript

## 📝 TABLE DES MATIÈRES

1. [Déclaration de fonctions](#1-déclaration-de-fonctions)
2. [Paramètres et arguments](#2-paramètres-et-arguments)
3. [Valeurs de retour](#3-valeurs-de-retour)
4. [Variantes de syntaxe](#4-variantes-de-syntaxe)
5. [Concepts avancés](#5-concepts-avancés)
6. [Fonctions d'ordre supérieur](#6-fonctions-dordre-supérieur)

---

## 1. DÉCLARATION DE FONCTIONS

### Fonction déclarée (Function Declaration)
```javascript
function maFonction() {
    return "Hello";
}
```
- **Hoisting** : Peut être appelée avant sa déclaration
- **Portée** : Fonction ou globale

### Expression de fonction (Function Expression)
```javascript
const maFonction = function() {
    return "Hello";
};
```
- **Pas de hoisting** : Doit être déclarée avant l'appel
- **Portée** : Dépend de `const/let/var`

### Fonction fléchée (Arrow Function)
```javascript
const maFonction = () => {
    return "Hello";
};

// Version courte (une seule ligne)
const maFonction = () => "Hello";
```
- **Pas de hoisting**
- **Pas de `this` propre**
- **Pas de `arguments`**

---

## 2. PARAMÈTRES ET ARGUMENTS

### Paramètre simple
```javascript
function direBonjour(nom) {
    console.log("Bonjour " + nom);
}
```

### Paramètres multiples
```javascript
function addition(a, b) {
    return a + b;
}
```

### Paramètre par défaut
```javascript
function direBonjour(nom = "Invité") {
    console.log("Bonjour " + nom);
}
```

### Rest Parameter (`...`)
```javascript
function addition(...nombres) {
    return nombres.reduce((a, b) => a + b, 0);
}
```

### Déstructuration de paramètres
```javascript
function afficherUser({nom, age}) {
    console.log(`${nom} a ${age} ans`);
}
```

---

## 3. VALEURS DE RETOUR

### Return explicite
```javascript
function double(x) {
    return x * 2;
}
```

### Return implicite (fléchée)
```javascript
const double = (x) => x * 2;
```

### Sans return (undefined)
```javascript
function afficher(x) {
    console.log(x);
    // Retourne undefined
}
```

### Retourner plusieurs valeurs
```javascript
function calculer(a, b) {
    return {
        somme: a + b,
        produit: a * b,
        difference: a - b
    };
}
```

---

## 4. VARIANTES DE SYNTAXE

### IIFE (Immediately Invoked Function Expression)
```javascript
(function() {
    console.log("Exécutée immédiatement");
})();

// Avec paramètres
(function(nom) {
    console.log("Bonjour " + nom);
})("Alice");
```

### Fonction anonyme
```javascript
setTimeout(function() {
    console.log("Après 1 seconde");
}, 1000);
```

### Méthode d'objet
```javascript
const objet = {
    nom: "Test",
    direBonjour: function() {
        return "Bonjour " + this.nom;
    }
};
```

---

## 5. CONCEPTS AVANCÉS

### Closure (Fermeture)
```javascript
function creerCompteur() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const compteur = creerCompteur();
console.log(compteur()); // 1
console.log(compteur()); // 2
```

### Curry (Currying)
```javascript
function multiplier(a) {
    return function(b) {
        return a * b;
    };
}

const multiplierPar2 = multiplier(2);
console.log(multiplierPar2(5)); // 10
```

### Spread Operator
```javascript
function addition(a, b, c) {
    return a + b + c;
}

const nombres = [1, 2, 3];
addition(...nombres); // 6
```

---

## 6. FONCTIONS D'ORDRE SUPÉRIEUR

### Callback
```javascript
function traiter(nombre, callback) {
    return callback(nombre);
}

traiter(5, (x) => x * 2); // 10
```

### Map
```javascript
const nombres = [1, 2, 3];
const doubles = nombres.map(n => n * 2);
// [2, 4, 6]
```

### Filter
```javascript
const nombres = [1, 2, 3, 4, 5];
const pairs = nombres.filter(n => n % 2 === 0);
// [2, 4]
```

### Reduce
```javascript
const nombres = [1, 2, 3, 4];
const somme = nombres.reduce((acc, n) => acc + n, 0);
// 10
```

### ForEach
```javascript
const nombres = [1, 2, 3];
nombres.forEach(n => console.log(n));
// 1
// 2
// 3
```

---

## 7. RÉCURSIVITÉ

### Factorial
```javascript
function factorielle(n) {
    if (n <= 1) return 1;
    return n * factorielle(n - 1);
}
```

### Fibonacci
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

---

## 8. BONNES PRATIQUES

### ✅ À FAIRE
- Donner des noms explicites à vos fonctions
- Utiliser des fonctions pures quand possible
- Limiter le nombre de paramètres (< 3-4)
- Documenter avec des commentaires
- Une fonction = une responsabilité

### ❌ À ÉVITER
- Fonctions trop longues (> 20-30 lignes)
- Effets de bord imprévus
- Variables globales
- Code dupliqué
- Noms de fonctions vagues (`func1`, `test`)

---

## 9. EXEMPLES PRATIQUES

### Valider un email
```javascript
function validerEmail(email) {
    return email.includes('@') && email.includes('.');
}
```

### Formater une date
```javascript
function formaterDate(date) {
    return date.toLocaleDateString('fr-FR');
}
```

### Calculer la moyenne
```javascript
function moyenne(...nombres) {
    const somme = nombres.reduce((a, b) => a + b, 0);
    return somme / nombres.length;
}
```

---

**Bon apprentissage ! 🎓**


