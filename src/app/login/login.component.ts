import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ""
  password = ""
  login = false


  constructor(private router: Router, private auth: AuthenticationService) {

  }

  ngOnInit(): void {
  }
  handel(): void {
    if (this.auth.authenticate(this.username, this.password)) {
      this.router.navigate(["welcome"])
    }
    else {
      this.login = true
    }
  }
}
