Movie Stats

Movie stats er en nettside hvor man kan oppdage filmer, søke etter filmer og se detaljerte innformasjon om filmene de liker

Prosjektet er utviklet som et svar til arbeidskrav 2 med Nest.js og Typescript. Filmdata er  hentet fra The Movie Database (TMDB) API.

Funksjoner
Viser populære filmer fra TMDB. Søk etter filmer ved hjelp av TMDB API. Detaljside med innformasjon om hver film. Som vurdering. Kort handling om filmne, sjanger. Spilletid og budsjett. Det vises også anbefalte filmer på detaljsiden for hver film. 

Siden har en egen Om oss side. Siden er tilpasset mobil og større skjermer. Egne 404- og feilsider.

Teknologier
Next.js (app router). React, Typescript, CSS Modules, TMDB API

Kom i gang
1. Klon prosjektet
git clone https://github.com/DanielBaro98/dbMoovie.git
cd dbMoovie/movie-stats
2. installer avhengigheter
npm install
3. Oprett miljøvariabler
Oprettet fil .env.local og legg inn: TMDB_ACCESS_TOKEN= din egen token
4. Start prosjektet
npm run dev

Kjente feil og begrensninger
Filmoversikten og søket viser kun første side fra TMDB. Vanligivs 20 filmer
Søkeresultatene er begrenset til de første 20 filmene fra TMDB. Det er foreløpig ikke mulig å bla vider til flere resultater. 
Nettsiden er avhengig av at TMDB er tilgjengelig og at en gyldig api token er konfigurert
Noen filmer kan mangle plakat, beksirvelse eller annen innformasjon i TMDB

API og kreditering

Filmdata hentes fra The Movie Database (TMDB).

This product uses the TMDB API but is not endorsed or certified by TMDB.