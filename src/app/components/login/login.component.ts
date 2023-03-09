import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  hidePassword = true;
  mensajeError=''
  constructor(private _auth: LoginService, private _router:Router) { }

  ngOnInit(): void {

    this.formLogin = new FormGroup(
      {
      username: new FormControl('',
        {
          validators:[Validators.required],
        }),

      password: new FormControl('',
      {
        validators:[Validators.required],
      })
      }
    )

  }

  response= {title:'', message:''}

  login(formValue: any){
    console.log('sjksdkjdskjskdj')
    const {username, password} = formValue;

    this._auth.login(username, password).subscribe({
      next: rpta=>{
        localStorage.setItem('token', rpta.token)
      },
      error: err=>{
        this.mensajeError = err;
      }
    })


  }

}
