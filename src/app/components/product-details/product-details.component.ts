import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 constructor(private _ActivatedRoute:ActivatedRoute,private _GamesService:GamesService){}
   gamesId:any;
   productDetails:any={}
   imageSrc:any[]=[]

   customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
    
    },
    nav: false
  }
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>
    {
      console.log(params.get('id'));
      this.gamesId=params.get('id');
      
    })
    this._GamesService.getGamesDetails(this.gamesId).subscribe({
      next:(res)=>
      {
        console.log("games Details",res)
        this.productDetails=res
        this.imageSrc=res.screenshots
        console.log("images",this.imageSrc);
        
          // this.productDetails.slice(0,3)
        // console.log("mmm",this.productDetails);
        
      
      },
      error:(err)=>console.log(err)
      
      
    })
  }

  

}
