import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidators} from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent {
  /*****
   * Built In, Custom & Aysnc Validation
   * Built In =  Validators.required, Validators.minLength(3),
   * Custom = UsernameValidators.cannotContainSpace
   * Aynsc = UsernameValidators.shouldBeUnique
   */
  form = new FormGroup({
    usernameFormControl: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ], UsernameValidators.shouldBeUnique),
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
