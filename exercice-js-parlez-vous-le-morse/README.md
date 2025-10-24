# 🔤 Encodeur & Décodeur Morse

## 🎯 Objectif du projet

Créer une application web en **JavaScript** permettant de **convertir du texte en code Morse** et inversement.  
L’utilisateur peut saisir un message en alphabet latin ou en morse, puis obtenir instantanément sa traduction via des champs de saisie interactifs.

---

## 💡 Utilité du projet

Ce projet permet de :

- Manipuler des **chaînes de caractères** et des **tableaux** en JavaScript.
- Travailler avec des **fonctions modulaires** et des **dictionnaires de correspondance**.
- Comprendre la **logique de traduction** entre deux systèmes d’écriture (texte ↔ morse).
- Mettre en place une **interface utilisateur simple en HTML/CSS/JS**.

C’est un excellent exercice de consolidation des bases du langage JavaScript.

---

## 🚧 Statut du projet

🟡 **En cours de développement**  
Les fonctions principales (`encode` et `decode`) sont fonctionnelles.  
L’interface utilisateur HTML/CSS est en cours d’amélioration pour une meilleure expérience.

---

## 💻 Langages et technologies utilisés

- **HTML5** → structure de la page
- **CSS3** → mise en forme de l’interface
- **JavaScript (ES6)** → logique d’encodage et de décodage

Aucune bibliothèque ou framework externe n’est requis.

---

## ⚙️ Installation

1. **Télécharge** ou **clone** le dépôt :
   ```bash
   git clone https://github.com/<ton-utilisateur>/morse-encoder-decoder.git
   cd morse-encoder-decoder
   ```
2. Ouvre le projet dans ton éditeur (ex. Visual Studio Code).

---

## 🚀 Lancer le projet

Ouvre le fichier index.html dans ton navigateur.

L’interface te proposera deux champs :

- Un pour saisir du texte normal et obtenir sa traduction en morse.
- Un pour saisir du morse et obtenir sa traduction en texte latin.

Clique sur les boutons correspondants :

- Encoder → pour convertir le texte en morse.
- Décoder → pour convertir du morse en texte.

---

## 🧩 Fonctionnalités principales

getLatinCharacterList(text) → transforme une chaîne de caractères en tableau.

translateLatinCharacter(char) → traduit un caractère en morse.

encode(text) → traduit une phrase complète en morse.

getMorseCharacterList(code) → sépare une chaîne morse en symboles individuels.

translateMorseCharacter(symbol) → traduit un symbole morse en caractère latin.

decode(code) → traduit un message morse complet en texte.

📁 Structure du projet
morse-encoder-decoder/
│
├── index.html # Structure de la page web (champs, boutons, zones d’affichage)
├── style.css # Mise en forme du projet
├── script.js # Contient toutes les fonctions de logique (encode, decode, etc.)
├── /assets/ # (optionnel) Images ou ressources complémentaires
└── README.md # Documentation du projet

---

## 📄 Fichiers importants

index.html → contient la structure de l’interface utilisateur.

style.css → gère le design de la page.

script.js → contient :

Le dictionnaire latin → morse (Annexe 1)

Le dictionnaire morse → latin (Annexe 2)

Les fonctions principales (encode, decode, etc.)

---

## 🧠 Interaction avec le projet

L’utilisateur saisit du texte ou du morse dans des champs de saisie (input ou textarea).

Les boutons déclenchent les fonctions JavaScript pour effectuer la traduction.

Le résultat s’affiche dynamiquement sur la page.

---

## 🪪 Licence

Ce projet est librement utilisable à des fins éducatives et personnelles.
Aucune licence spécifique n’est appliquée.

---

## 👨‍💻 Auteur

Lucie Seng - Git : LucieSng
