import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-sing-in-page',
	templateUrl: './sign-in-page.component.html'
})
export class SignInPageComponent implements OnInit {

	public signInForm: FormGroup;	
	public loginError: string;

	constructor(
		public usersService: UsersService,
		public formBuilder: FormBuilder,
		public router: Router		
	){  }

	ngOnInit() {
		this.signInForm = this.formBuilder.group({
			username: '',
			password: ''			
		});
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