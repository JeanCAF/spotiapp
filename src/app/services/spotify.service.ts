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

   getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBqcPYKnGzM46-7VpQFET4OHptiGLTmFn0DdCPm9w2RNJd2gBD8Bvm_CrirWI6X2ZbHy-Vp3JOde3AVaq0'
     });

    return this.http.get( 'https://api.spotify.com/v1/browse/new-releases', { headers } )
              .pipe( map( data => data['albums'].items));

   }

   getArtista(termino: string) {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBqcPYKnGzM46-7VpQFET4OHptiGLTmFn0DdCPm9w2RNJd2gBD8Bvm_CrirWI6X2ZbHy-Vp3JOde3AVaq0'
     });

    return this.http.get( `https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`, { headers } )
              .pipe( map( data => data['artists'].items));

    }
}
