import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  form = new FormGroup({
    usernameFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    passwordFormControl: new FormControl('', Validators.required)
  });

  constructor() {
  }

  get usernameValidator() {
    return this.form.get('usernameFormControl');
  }

  get passwordValidator() {
    return this.form.get('passwordFormControl');
  }
}
