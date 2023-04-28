import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  public fullnameForm = new FormControl(null, Validators.required);
  public emailForm = new FormControl(null, [Validators.required, Validators.email]);
  public passwordForm = new FormControl(null, [Validators.required, Validators.minLength(4)]);

  public signupForm!: FormGroup;

  constructor(){}

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      fullname: this.fullnameForm,
      email: this.emailForm,
      password: this.passwordForm,
    });
  }

  submit(){
    console.log(this.signupForm.value);
  }
}
