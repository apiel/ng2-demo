import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router }   from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
})
export class RegisterComponent { 
  form: FormGroup;
  submitAttempt: boolean = false;
    
  constructor(private router: Router,public formBuilder: FormBuilder) {
    this.form = formBuilder.group({
        username: ['', Validators.compose([Validators.required])],
        password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
    });    
  } 

  register() {
    this.submitAttempt = true;
    if (!this.form.valid) {
      console.log('form error');
    }
    else {
      console.log('register');
      this.gotoHome();
    }
  }    

  gotoHome() {
    this.router.navigate(['/']);
  }   
}