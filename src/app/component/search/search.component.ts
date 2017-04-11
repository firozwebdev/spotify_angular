import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../../../Artist';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchStr:string;
  searchRes:Artist[];


  constructor(private _spotifyServic:SpotifyService) { }

  searchMusic(){
    this._spotifyServic.searchMusic(this.searchStr).subscribe(res=>{
      this.searchRes = res.artists.items;
    });
  }
  ngOnInit() {
  }

}
