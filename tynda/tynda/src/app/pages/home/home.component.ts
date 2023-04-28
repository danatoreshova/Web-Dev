import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/services/searchbar.service';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  public songCards = [
    {
      song_id: 1,
      image: '/assets/img1.jpg',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas',
      song: '/musics/obito_theme.mp3'
    },
    {
      song_id: 2,
      image: 'https://ru.wikipedia.org/wiki/Adobe_Photoshop#/media/%D0%A4%D0%B0%D0%B9%D0%BB:Adobe_Photoshop_CC_icon.svg',
      title: 'My Universe',
      description: 'Kairat Nurtas, Zangar Nurtas',
      song: '/musics/Sasuke_theme.mp3'
    },
    // {
    //   song_id: 3,
    //   thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
    //   title: 'My Universe',
    //   description: 'Kairat Nurtas, Zangar Nurtas'
    // },
    // {
    //   song_id: 4,
    //   thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
    //   title: 'My Universe',
    //   description: 'Kairat Nurtas, Zangar Nurtas'
    // },
    // {
    //   song_id: 5,
    //   thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
    //   title: 'My Universe',
    //   description: 'Kairat Nurtas, Zangar Nurtas'
    // },
    // {
    //   song_id: 6,
    //   thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
    //   title: 'My Universe',
    //   description: 'Kairat Nurtas, Zangar Nurtas'
    // },
    // {
    //   song_id: 7,
    //   thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
    //   title: 'My Universe',
    //   description: 'Kairat Nurtas, Zangar Nurtas'
    // },
    // {
    //   song_id: 8,
    //   thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
    //   title: 'My Universe',
    //   description: 'Kairat Nurtas, Zangar Nurtas'
    // },
    // {
    //   song_id: 9,
    //   thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
    //   title: 'My Universe',
    //   description: 'Kairat Nurtas, Zangar Nurtas'
    // },
    // {
    //   song_id: 10,
    //   thumbnail: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.soundcloud.com%2Fb6uhbuzviwo2%2Fmy-universe&psig=AOvVaw0iYZR801ccvrOGmH8vwsl6&ust=1682609145311000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKi18dftx_4CFQAAAAAdAAAAABAD',
    //   title: 'My Universe',
    //   description: 'Kairat Nurtas, Zangar Nurtas'
    // },
  ]

  constructor(private sb: SearchBarService, private log: HomeService) {

  }
  ngOnInit(): void {}

  onNavigate(pagename: String){
    if (pagename === 'search'){
      this.sb.isSearchVisible.next(true);
      this.log.isLoginVisible.next(false);
    } else {
      this.sb.isSearchVisible.next(false);
      this.log.isLoginVisible.next(true);
    }
  }
  
}
