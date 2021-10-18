import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListepagePage } from './listepage.page';

const routes: Routes = [
  {
    path: '',
    component: ListepagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListepagePageRoutingModule {}
