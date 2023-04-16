import { Component, OnInit } from '@angular/core';
import { Games } from 'src/app/modules/games.module.';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  games:Games[]=[];
constructor(private _GamesService:GamesService){}
  ngOnInit(): void {
   
    this._GamesService.getGames().subscribe({
      next:(res)=>
      {
        this.games=res
       this.games= this.games.slice(0,3)
        console.log("ayhaga", this.games);
        
        console.log("response",res)
      },
      error:(err)=>console.log(err)
      
      
    })
  }

}
