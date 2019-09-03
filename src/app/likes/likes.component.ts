import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
tabLikes;

  constructor(private data: DataService) { }

  ngOnInit() {
    //on importe le tableau du service qui contient les likes
    this.tabLikes = this.data.mesLikes;
  }

}
