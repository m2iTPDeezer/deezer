import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiService} from '../api.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLogged = true;
  token
  constructor(private api:ApiService) { }
  tokensave = (localStorage.getItem('token'));
  

  ngOnInit() {
    // alert(this.tokensave)
  }

  logOut(){

    // alert(this.tokensave)

    this.api.apiPost('logOut', {token:this.tokensave}).subscribe((res:any)=> {
      if(res.allowd) {
        alert('Déco OK, token :' + res.token);
        this.isLogged = false;
        console.log(this.api.isLogged)
      }
      else {
        alert('erreur de déconnexion');
        this.isLogged = true;
      }
    })
  }
}


