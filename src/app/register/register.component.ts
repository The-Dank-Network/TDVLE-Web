import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {MatSnackBar} from "@angular/material";
import {Constants} from "../shared/constants";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'register';

  userRegister: User = new User();

  constructor (private http: Http, private snackBar: MatSnackBar) {
  }

  register() {
    this.http
      .post(Constants.url + '/register', this.userRegister)
      .subscribe(data => {
      });
  }

  ngOnInit() {
  }

  onKeyPress($event) {
    if ($event.keyCode === 13) {
      this.register();
    }
  }
}
