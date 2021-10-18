import { Component, OnInit } from '@angular/core';
import { OdkserviceService } from '../odkservice.service';

@Component({
  selector: 'app-listepage',
  templateUrl: './listepage.page.html',
  styleUrls: ['./listepage.page.scss'],
})
export class ListepagePage implements OnInit {

  public liste: any;

  constructor(private odkService: OdkserviceService) { }

  ngOnInit() {
    this.odkService.getList().subscribe(
      (data) => {
        this.liste = data;
      }
    );
  }

}
