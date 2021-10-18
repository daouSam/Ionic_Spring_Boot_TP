import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { OdkserviceService } from '../odkservice.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  public localData: any;
  public user: any;
  public logTime;
  constructor(
    private storage: Storage,
    private storageService: OdkserviceService,
    private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('data'));
    this.logTime = localStorage.getItem('date');
  }
  moveuse(user){
    return this.user = localStorage.removeItem('data');
  }

  logout() {
    this.moveuse(this.user);
    this.router.navigateByUrl('/home');
  }

}
