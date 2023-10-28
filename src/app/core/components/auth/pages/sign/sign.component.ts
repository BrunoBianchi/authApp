import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent {
  constructor(private formBuilder:FormBuilder,private authService:AuthService) {}
  public formAuth: FormGroup = this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
   password:['',[Validators.required]],
  })
  public msgError!:string;
  public submitForm() {
    if(this.formAuth.valid) {
      this.authService.sign({
        email:this.formAuth.value.email,
        password:this.formAuth.value.password,
      }).subscribe({next:(res)=>res,error:(e)=>this.msgError=e});
    }
  }
}
