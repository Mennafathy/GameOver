import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl:string='https://route-ecommerce.onrender.com/'
  userData=new BehaviorSubject(null);

  constructor(private _httpClient:HttpClient,private _Router:Router) {
    this.DecodeUserData()
   }

  register(userData:object):Observable<any>
  {
    return this._httpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signup',userData)
  }
  
  login(userData:object):Observable<any>
  {
    return this._httpClient.post('https://route-ecommerce.onrender.com/api/v1/auth/signin',userData)
  }
  DecodeUserData()
  {
    if(localStorage.getItem('token')) {
       let encodedToken=JSON.stringify(localStorage.getItem('token'))
    let decodedToken:any=jwtDecode(encodedToken)
    console.log(decodedToken);
    this.userData.next(decodedToken)
    }
   
  }
  logOut()
  {
    localStorage.removeItem("token");
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }
}
