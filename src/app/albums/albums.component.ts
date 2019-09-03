import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album;



  constructor(private data: DataService) { }

  ngOnInit() {

    this.album = this.data.albums;

  }

  //le clic sur le like déclenche la fonction like qui ajoutera la music favorite au composant likes
  like = (id) => {

    if (id != 0) {
      // On récupère l'élément cliqué dan sle tableau
      let elt = this.album.find((u => u.id == id));
      // On l'ajoute dans le tableau des favoris
      this.data.mesLikes.push(elt);
    }
  }
}


