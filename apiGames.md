### Exercice : Utilisation de l'API Rawg pour Afficher une Liste de Jeux

#### Objectif

Utiliser l'API Rawg pour créer une application web qui affiche une liste de jeux vidéo et permet à l'utilisateur de rechercher des jeux par genre.

#### Instructions

1. **Initialisation du Projet**

   - Créer un projet Nextjs.
   - Installer Axios pour les requêtes HTTP.

2. **Création des Services API**

   - Créer un fichier `fetchapiGames.ts` pour encapsuler les appels API à Rawg.
   - Implémenter les fonctions suivantes :
     - `getAllGames`: Récupérer tous les jeux depuis l'API.
     - `getGenresList`: Récupérer la liste des genres de jeux depuis l'API.
     - `getGamesByGenre`: Récupérer les jeux d'un genre spécifique depuis l'API.
     - `searchGames`: Rechercher des jeux par nom depuis l'API.

3. **Composant React Principal (`Listing.tsx`)**

   - Importer les composants nécessaires comme `Header`, `Banner`, `GenreList`, `TrendingGames`, et `GamesList`.
   - Utiliser `useState` pour gérer les états des jeux, des genres sélectionnés, et des résultats de recherche.
   - Utiliser `useEffect` pour charger les jeux et les genres au chargement de la page.
   - Définir des fonctions pour gérer la sélection de genre et la recherche de jeux.
   - -Utiliser UseContext si nécessaire( 2 enfant)
   - Afficher les jeux dans des composants tels que `Banner` pour le jeu principal, `TrendingGames` pour les jeux populaires, et `GamesList` pour les résultats de recherche ou les jeux par genre.

4. **Styling et Mise en Page**

   - Utiliser Tailwind CSS ou un autre framework CSS pour styliser votre application.
   - Créer une mise en page responsive avec une grille pour afficher les différents composants.

5. **Tests et Validation**
   - Tester l'application pour s'assurer que les jeux sont correctement chargés et affichés.
   - Vérifier que la recherche et le filtrage par genre fonctionnent comme prévu.

#### Ressources

- API Rawg : [Documentation API Rawg](https://api.rawg.io/docs/)

- Axios : [Documentation Axios](https://axios-http.com/docs/intro)