import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class OdkserviceService {

  constructor(
    private http: HttpClient,
    private router: Router,
    public toastController: ToastController) { }
  apiUrl(username, password){
    return this.http.get('http://localhost:8083/user/'+username+'&'+password);
  }

  getList(){
    return this.http.get('http://localhost:8083/liste');
  }

  async presentToast(infoMessage: string){
    const toast = await this.toastController.create({
      message: infoMessage,
      duration: 2000
    });
    toast.present();
  }

}
