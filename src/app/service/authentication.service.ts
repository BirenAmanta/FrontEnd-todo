import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private router:Router) { }
  
  authenticate(username: string,password: string):boolean
  {
    if(password==="biren" && username==="Biren")
    {
    
      sessionStorage.setItem("username",username);
      return true;
    }
    return false;
  }
  isLogedIn():boolean{
    if(sessionStorage.getItem("username")==null)
    return false

    return true;
  }
  logout()
  {
    sessionStorage.removeItem("username");
  }
}
