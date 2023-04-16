import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GamesService {

  head=new HttpHeaders({
   
      'X-RapidAPI-Key': '19c27816c4msh907b6be1b25a6a1p14c5c5jsnc503f2f06659',
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'

  })
  
  constructor(private _HttpClient:HttpClient) { }

  

  getGames():Observable<any>
  {
    return this._HttpClient.get("https://free-to-play-games-database.p.rapidapi.com/api/games",{
      headers:this.head
      
  })
  }

  getGamesDetails(GameID:string):Observable<any>
  {
    return this._HttpClient.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${GameID}`,{
      headers:this.head
      
  })
  }
}
