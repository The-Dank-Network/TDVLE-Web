import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {MatSnackBar} from '@angular/material';
import {Constants} from '../shared/constants';
import {UserService} from '../user/user.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'register';

  userRegister: User = new User();

  constructor (private userService: UserService, private snackBar: MatSnackBar, private router: Router) {
  }

  register() {
    this.userService.registerUser(this.userRegister).subscribe(user => {
      this.snackBar.open('Registered user successfully', 'Dismiss', {duration: 2000});
      this.router.navigate(['/login']);

    }, (error: any) => {
      this.snackBar.open('User already exists', 'Dismiss', {duration: 2000});

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
