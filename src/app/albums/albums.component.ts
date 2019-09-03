import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  album;
  id;
  tab: Array<any> = new Array<any>();

  constructor(private data: DataService) { }

  ngOnInit() {

    this.album = this.data.albums;

  }

  like = () => {
    console.dir(this.album)
    // if (this.id != 0) {

    //   let elt = this.album.find((u => u.id == this.album.id));

    //   this.tab.push(this.album.id);
    //   console.log(this.tab)

    // }

  }

}
