import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/api/api.service';
import { LoginI } from 'src/app/Modelos/login.interface';
import { Router } from '@angular/router';
import { ResponseI } from 'src/app/Modelos/response.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  
  errorStatus: boolean = false;
  errorMsg: any = '';

    loginForm = new FormGroup({
        email: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor(private api: ApiService, private router : Router) { }

    ngOnInit(): void {
    }

    login(form : any) {
      this.api.onLogin(form).subscribe(data => {
        let dataResponse: ResponseI = data;
        if(dataResponse.token != null){
          localStorage.setItem('token', dataResponse.token);
          this.router.navigate(['inicio']);
        }
      } , error => {
        console.log(error);
        this.errorMsg = error.error.message;
        this.errorStatus = true;
      });
      
    }
}
