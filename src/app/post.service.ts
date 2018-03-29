import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { IPost } from './post';

import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  result:any;

  constructor(private _http: Http) { }

  getPosts(): Observable<IPost[]> {
   return this._http
      .get("/api/posts")
      .map((response: Response) => <IPost[]>response.json());
  }

}


