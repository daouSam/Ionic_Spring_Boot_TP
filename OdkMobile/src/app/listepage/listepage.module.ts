import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListepagePageRoutingModule } from './listepage-routing.module';

import { ListepagePage } from './listepage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListepagePageRoutingModule
  ],
  declarations: [ListepagePage]
})
export class ListepagePageModule {}
