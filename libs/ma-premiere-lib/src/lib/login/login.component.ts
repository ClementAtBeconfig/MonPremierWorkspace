import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';

@Component({ 
  standalone:true,
  selector: 'mon-premier-workspace-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports:[InputTextModule , ButtonModule ,PasswordModule ]
})
export class LoginComponent {

  CallPassword(){
  const password = document.getElementById("PasswordContainer") as HTMLBaseElement;
  password.style.display="block";
  const login = document.getElementById("loginMainContainer") as HTMLBaseElement;
  login.style.display="none";
  const submit = document.getElementById("buttonSubmit") as HTMLBaseElement;
  submit.style.display="block";
  const firstStep = document.getElementById("passwordStep") as HTMLBaseElement;
  firstStep.style.display="none";
  const ReturnAtLogin = document.getElementById("returnLogin") as HTMLBaseElement;
  ReturnAtLogin.style.display="block";
  

  }
  ReturnAtLogin(){
  const password = document.getElementById("PasswordContainer") as HTMLBaseElement;
  password.style.display="none";
  const submit = document.getElementById("buttonSubmit") as HTMLBaseElement;
  submit.style.display="none";
  const login = document.getElementById("loginMainContainer") as HTMLBaseElement;
  login.style.display="block";
  const ReturnAtLogin = document.getElementById("returnLogin") as HTMLBaseElement;
  ReturnAtLogin.style.display="none";
  const firstStep = document.getElementById("passwordStep") as HTMLBaseElement;
  firstStep.style.display="block";
  }
}


