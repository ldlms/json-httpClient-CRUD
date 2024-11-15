# Un bon vieux CRUD

Ton objectif est de réussir à faire un CRUD complet avec Angular 🐙


## Lancer le projet

Lance le projet avec `npm run start` plutôt que `ng serve`. \
En observant le terminal ainsi que le package.json, comprends-tu pourquoi ?

## Ce que tu dois faire

- Créer 4 composants. Chacun sera responsable d'une action du CRUD et y encapsulera les actions "templates" liées à l'utilisateur.
- Créer un service `UserApiService` qui aura 4 méthodes HTTP pour faire un CRUD complet : `GET` `POST` `PUT` `DELETE`. Tu dois effectuer ce CRUD sur le fichier `db.json` servi avec `json-server`.
- La [Documentation json-server](https://www.npmjs.com/package/json-server) te donnes un exemple d'endpoints pour ces 4 types de requêtes.
- Les requêtes de type `POST` ou `PUT` nécessitent que ta requête HTTP ait un `body`. La [Doc officielle du HttpClient](https://angular.dev/guide/http/making-requests#fetching-json-data) t'en parle.


## Structure des fichiers

```
angular-full-crud/
├── src/
│   ├── app/
│   │   ├── users/
│   │   │   ├── components/
│   │   │   │   ├── user-list/
│   │   │   │   ├── create-user/
│   │   │   │   ├── update-user/
│   │   │   │   ├── delete-user/
│   │   │   ├── services/
│   │   │   │   ├── user-api-service
│   │   │   ├── pages/
├── package.json
├── angular.json
├── README.md

```