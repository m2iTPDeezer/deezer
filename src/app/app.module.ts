import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AlbumsComponent } from './albums/albums.component';
import { DataService } from './data.service';
import { SearchComponent } from './search/search.component';
import { TracksComponent } from './tracks/tracks.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { UseritemmenuComponent } from './useritemmenu/useritemmenu.component';
import { ItemmenuComponent } from './itemmenu/itemmenu.component';
import { LikesComponent } from './likes/likes.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AlbumsComponent,
    SearchComponent,
    TracksComponent,
    SigninComponent,
    LoginComponent,
    UseritemmenuComponent,
    ItemmenuComponent,
    LikesComponent,
    PlaylistComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
