import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify Service Listo');
   }
// con este get query se centraliza toda la informacion de la api de spotify
   getQuery( query: string ) {

    const url = `https://api.spotify.com/v1/${ query }`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBqcPYKnGzM46-7VpQFET4OHptiGLTmFn0DdCPm9w2RNJd2gBD8Bvm_CrirWI6X2ZbHy-Vp3JOde3AVaq0'
     });

    return this.http.get(url, { headers });

   }


   getNewReleases() {

    return this.getQuery('browse/new-releases')
              .pipe( map( data => data['albums'].items));

   }

   getArtista(termino: string) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`)
              .pipe( map( data => data['artists'].items));
    }
}
