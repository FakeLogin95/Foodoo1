import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaRistorantiPage } from './lista-ristoranti.page';

const routes: Routes = [
  {
    path: '',
    component: ListaRistorantiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRistorantiPageRoutingModule {}
