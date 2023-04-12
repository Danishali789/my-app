import { Component,OnInit} from '@angular/core';
import{FormGroup,FormBuilder,Validators} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'my-app';
  registration:any=FormGroup;

  constructor(private re:FormBuilder){}

    ngOnInit(): void {
      this.registration=this.re.group({
        fname:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$'),Validators.minLength(3)]],
        lname:['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        repass:['',[Validators.required]]
      },
      {
        validators:this.mustMatch('password','repass')
      }
      )
    }
    
  mustMatch(password:any,repass:any){
    return(fg:FormGroup)=>{
      const passwordControl=fg.controls[password];
      const cnfpasswordControl=fg.controls[repass];
      if(cnfpasswordControl.errors && !cnfpasswordControl.errors['mustMatch']){
         return;
      }
      if(passwordControl.value !== cnfpasswordControl.value){ 
        cnfpasswordControl.setErrors({mustMatch:true});
      }else{
        cnfpasswordControl.setErrors(null);
      }
    } 
  }

  onSubmit(){
    console.log(this.registration);
  }
}
