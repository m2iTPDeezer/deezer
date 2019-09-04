import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup = this.fb.group({
    mail:      ['', ] ,//[Validators.required, Validators.pattern("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/")]]
    password : ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")] ]

  })
  constructor(private fb: FormBuilder ,private api:ApiService) { }

  ngOnInit() {
  }

  validerLogin(){
  this.api.apiPost('login', {mail:this.formLogin.value.mail, password: this.formLogin.value.password}).subscribe((res:any)=> {
    if(res.allowd) {
      alert('connection OK, token :' + res.token);
      localStorage.setItem('token', res.token);
      this.api.isLogged = true;
      console.log(this.api.isLogged)
    }
    else {
      alert('erreur de connexion');
    }
  })
}
}
