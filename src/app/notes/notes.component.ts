import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../customValidators/userName.validator';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  Product: any = ['Product1','Product2' ,'Product3'];

  flag=false;
  notesForm=this.fb.group({
    Name :['',[Validators.required,ForbiddenNameValidator(/user/)]],
    productName: [''],
    check:[''],
  })
  get productName() {
    return this.notesForm.get('productName');
  }


    constructor(private fb:FormBuilder) { }

    ngOnInit(): void {
    }
    get Name ()
    {
      return this.notesForm.get('Name');
    }
    changeProduct(e) {
      this.productName.setValue(e.target.value, {
        onlySelf: true
      })
    }


  get check()
  {
    return this.notesForm.get('check')
  }
get comments()
{
      return this.notesForm.get('comments') as FormArray
}


  Add()
  {
   this.comments.push(this.fb.control(''));
  }
  giveDiscount(state){
    if(state.currentTarget.checked)
    this.flag=false;
    else{
      this.flag==true;
    }

  }

  }
