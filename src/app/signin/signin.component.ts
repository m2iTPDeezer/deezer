import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formSignin: FormGroup = this.fb.group({
    nom: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    prenom: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    mail: ['', ] ,//[Validators.required, Validators.pattern("/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/")]]
    password : ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")] ]

  })
  
  constructor(private fb: FormBuilder ,private api:ApiService) { }

  ngOnInit() {
    console.log("coucou")
  }

  validerSignin = () =>{
    console.log(this.formSignin.value.nom)
    this.api.apiPost('signin', {nom: this.formSignin.value.nom, prenom : this.formSignin.value.prenom, email: this.formSignin.value.mail, password: this.formSignin.value.password}).subscribe((res:any)=> {
      if(res.allowd) {
        console.log("Utilisateur ajouté!")
      }
      else {
        console.log('ERREUR');
      }
    })

  }

}
