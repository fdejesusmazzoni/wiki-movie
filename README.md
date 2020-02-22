# wiki-movie (wikimovie-frontend)

This web app show you a list with all the films that exist in "The Movie Database API".

The application has been developed with React / Redux / Saga. It is a good example to understand how develop a basic web application with this libraries.

It's necessary create a file to set the api key. You need register in https://www.themoviedb.org/, and generate your own api key. Then create a file in wikimovie-frontend/src/api/rest/apikey.ts with this content:

```
export const apikey = '<your key>';
```