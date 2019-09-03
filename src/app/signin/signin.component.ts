import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  formSignin: FormGroup = this.fb.group({
    nom: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    prenom: ['', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
    mail: ['', [Validators.required, Validators.pattern("^([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})")]]

  })
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  validerSignin = () =>{


  }

}
