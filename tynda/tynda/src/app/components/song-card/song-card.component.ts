import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit{
  @Input() public image!: string;
  @Input() public title!: string;
  @Input() public description!: string;
  @Input() public song_id!: number;
  @Input() public song!: string;

  constructor(private router: Router){}
  ngOnInit(): void {}

  onNavigateToSong(){
    this.router.navigateByUrl(`/song/${this.song_id}`);
    
  }
  
}
