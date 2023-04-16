import { Component } from '@angular/core';
import { Games } from 'src/app/modules/games.module.';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent {
  games:Games[]=[];
  constructor(private _GamesService:GamesService){}
    ngOnInit(): void {
     
      this._GamesService.getGames().subscribe({
        next:(res)=>
        {
          this.games=res
          console.log("ayhaga", this.games);
          
          console.log("response",res)
        },
        error:(err)=>console.log(err)
        
        
      })
    }
  

}
