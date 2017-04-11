import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  searchStr:string;


  constructor(private _spotifyServic:SpotifyService) { }

  searchMusic(){
    this._spotifyServic.searchMusic(this.searchStr).subscribe(res=>{
      console.log(res);
    });
  }
  ngOnInit() {
  }

}
