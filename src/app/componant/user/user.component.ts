import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  myFormValidation = new FormGroup({
    name: new FormControl("marwan",Validators.required),
    age: new FormControl(25,[Validators.min(20), Validators.max(40),Validators.required]),
    email: new FormControl("marwan@gmail.com",Validators.required),

  })

  get NameValid(){
    return this.myFormValidation.controls["name"].valid
  }

  get AgeValid(){
    return this.myFormValidation.controls["age"].valid
  }
  get EmailValid(){
    return this.myFormValidation.controls["email"].valid
  }

  checkvals(){
    console.log("All: ", this.myFormValidation);
    console.log("Value: ", this.myFormValidation.value);
    console.log("ValidAll: ", this.myFormValidation.valid);
    console.log("Name Valid: ", this.myFormValidation.controls["name"].valid);
    console.log("Age Valid", this.myFormValidation.controls["age"].valid);
    if (this.myFormValidation.controls["name"].valid &&this.myFormValidation.controls["age"].valid&&this.myFormValidation.controls["email"].valid) {
           alert("your data is valid")
    }else{
      alert("your data is not valid")

    }
  }





}
