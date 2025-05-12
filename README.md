# exos_tests

## Tests du projet

Ce README documente les différents types de tests utilisés dans le projet.

## Structure des tests

Le projet comprend trois niveaux de tests :

1. **Tests unitaires** - Dans le répertoire `tests/unit/`
2. **Tests d'intégration** - Dans le répertoire `tests/integration/`
3. **Tests end-to-end (E2E)** - Dans le répertoire `cypress/e2e/`

## Tests unitaires

Les tests unitaires vérifient le bon fonctionnement de composants individuels de l'application.

**Localisation :** `tests/unit/`

**Exemple :** `tests/unit/server.test.js` - Teste les endpoints API de façon isolée :
- GET /api/users - Récupération des utilisateurs
- POST /api/users - Création d'un nouvel utilisateur
- DELETE /api/users/:id - Suppression d'un utilisateur

**Commande d'exécution :**
```bash
npm run test:unit
```

## Tests d'intégration

Les tests d'intégration vérifient que différentes parties de l'application fonctionnent correctement ensemble.

**Localisation :** `tests/integration/`

**Exemple :** `tests/integration/server.test.js`

**Commande d'exécution :**
```bash
npm run test:int
```

## Tests End-to-End (E2E)

Les tests E2E vérifient le fonctionnement complet de l'application du point de vue de l'utilisateur final.

**Localisation :** `cypress/e2e/`

**Exemple :** `cypress/e2e/create-user.cy.js` - Teste la navigation sur la page d'accueil

**Commande d'exécution :**
```bash
npm run test:e2e
```

Cela ouvrira l'interface Cypress pour exécuter les tests E2E dans un navigateur.

## Configuration

- **Jest** est utilisé pour les tests unitaires et d'intégration
- **Cypress** est utilisé pour les tests E2E
- Configuration Cypress : `cypress.config.js`
- Configuration Jest pour les tests d'intégration : `jest.integration.config.js`

## Dépendances de test

Les dépendances principales pour les tests sont :
- Jest - Framework de test JavaScript
- Supertest - Bibliothèque pour tester les API HTTP
- Cypress - Outil de test E2E

## Documentation API (Swagger)

Le projet dispose d'une documentation API interactive générée par Swagger.

**Accès à la documentation :**
- Portail Swagger : `http://localhost:3000/swagger-portal`
- Documentation API directe : `http://localhost:3000/api-docs`
- Routes d'accès raccourcies : `/swagger` (redirige vers le portail)

**Pages disponibles :**
1. **Portail Swagger** - Une page d'accueil personnalisée expliquant les fonctionnalités de l'API
2. **Documentation API** - L'interface Swagger UI standard pour explorer et tester les endpoints

**Fonctionnalités :**
- Exploration interactive de tous les endpoints API
- Test direct des requêtes depuis l'interface Swagger
- Visualisation des formats de requête et de réponse
- Détails sur les codes de statut HTTP

**Configuration :**
- Fichier de spécification Swagger : `src/swagger.js`
- Les routes sont documentées avec des commentaires JSDoc dans `src/server.js`
- Interface personnalisée : `public/swagger.html`
