import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-sing-in-page',
	templateUrl: './sign-in-page.component.html'
})
export class SignInPageComponent implements OnInit {

	loginError: string;
	router: Router;
	signInForm: FormGroup;
	usersService: UsersService;

	constructor() { }

	ngOnInit() {
	}

	doLogin() {
		this.usersService.login(
			this.signInForm.get('username').value,
			this.signInForm.get('password').value).subscribe(loginResponse => {
				this.router.navigate(['tasks']);
			}, error => {
				this.loginError = 'Error Signing in: ' + (error && error.message ? error.message : '');
			})
	}
}