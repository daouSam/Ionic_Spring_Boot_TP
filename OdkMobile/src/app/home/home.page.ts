import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OdkserviceService } from '../odkservice.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  public user: any = {};
  private login: string;
  private password: string;
  private date;
  constructor(
    private odkserv: OdkserviceService,
    private router: Router,
    private storage: Storage) {}

  public checkAuth(donnee){
    this.login = donnee.value.login;
    this.password = donnee.value.password;
    this.odkserv.apiUrl(this.login, this.password).subscribe(
      (data) => {
        this.user = data;
        if(data != null){
          this.date = new Date();
          localStorage.setItem('data',JSON.stringify(this.user));
          localStorage.setItem('date', this.date);
          this.router.navigateByUrl('/welcome');
        }else{
          this.odkserv.presentToast('information incorrect');
        }
      },
      (error: any) => {
        this.odkserv.presentToast('error de réseau ');
        }
      );

    }


  }
