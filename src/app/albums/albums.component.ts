import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album;
  tabAlbPlaylist; //tableau des music ajoutés dans playlist
  tabMyPlaylist;

  constructor(private data: DataService) { }

  ngOnInit() {

    this.album = this.data.albums;
    this.tabMyPlaylist = this.data.myPlaylist;
    this.tabAlbPlaylist = this.data.albumPlaylist;

    console.dir(this.tabAlbPlaylist)
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

  ajoutInPlaylist = (id) => {
    console.log(id)
    let elt = this.album.find((u => u.id == id));
    let confirmer = prompt('Dans quelle playlist voulez vous ajouter cet album ?');
    console.log(this.tabAlbPlaylist)
    this.tabAlbPlaylist.forEach((x) => {
      console.log(x)

      if (x.title == confirmer) {

        x.albums.push(elt);

      }
    })
  }
}


