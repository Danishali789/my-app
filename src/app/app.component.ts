import { Component } from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'my-app';
  registration:FormGroup;

  constructor(private re:FormBuilder){
    this.registration=this.re.group({
      fname:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      lname:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })
  }
  // onSubmit(){
  //   console.log(this.registration);
  // }
}
