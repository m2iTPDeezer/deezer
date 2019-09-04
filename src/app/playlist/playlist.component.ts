import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
  nouveauPlaylist = false;
  playlist;
  added = false;
  novo: boolean;
  tabPlaylist; // tableau des noms playlist
  add = 0;
  tabAlbumPlaylist; // tableau de tous les album par playlist
  clicPlaylist = false;


  constructor(private data: DataService) { }

  ngOnInit() {
    this.tabPlaylist = this.data.myPlaylist;
    this.tabAlbumPlaylist = this.data.albumPlaylist;
  }

  ajout() {

    this.novo = false;
    this.nouveauPlaylist = true;
    this.add++;
  }

  ajouter() {

    this.added = true;
    this.novo = true;
    this.tabPlaylist.push(this.playlist);
    this.add++;
  }

  maPlaylist() {

    this.clicPlaylist = true;
    
  }

  afficher() {
    this.added = true;
  }
}
