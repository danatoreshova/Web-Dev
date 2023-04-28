import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { SearchBarService } from 'src/app/services/searchbar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit{
  public isSearchVisible: boolean = false;
  public isLoginVisible: boolean = true;

  constructor(private router: Router, private sb: SearchBarService, private log: HomeService){}
  ngOnInit(): void {
    this.sb.isSearchVisible.subscribe(status => {
      this.isSearchVisible = status;
    });
    this.log.isLoginVisible.subscribe(status1 => {
      this.isLoginVisible = status1;
    });
  }
  onNavigateToLogin() {
    this.router.navigate(['/login']);
  }
  onNavigateToSignUp() {
    this.router.navigate(['/signup']);
  }

}
