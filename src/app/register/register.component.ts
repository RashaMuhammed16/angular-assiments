import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmPasswordValidator } from '../customValidators/confirmPassword.validator';
import { ForbiddenNameValidator } from '../customValidators/userName.validator';


import { User } from '../User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 Sites: any = ['facebook','twitter ','google']

  /*userModel=new User('','',"","","");*/

  registerForm=this.fb.group({
    userName :['',[Validators.required,ForbiddenNameValidator(/user/)]],
    email:[''],
    password:[''],
    confirmPassword:[''],
    siteName: [''],
  },{validators:[ConfirmPasswordValidator]})





  get userName ()
  {
    return this.registerForm.get('userName');
  }
  get email()
  {
    return this.registerForm.get('email');

  }
  // Getter method to access formcontrols
get siteName() {
  return this.registerForm.get('siteName');
}


  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  changeSite(e) {
    this.siteName.setValue(e.target.value, {
      onlySelf: true
    })
  }

}
