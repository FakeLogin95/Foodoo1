import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaRistorantiPageRoutingModule } from './lista-ristoranti-routing.module';

import { ListaRistorantiPage } from './lista-ristoranti.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaRistorantiPageRoutingModule
  ],
  declarations: [ListaRistorantiPage]
})
export class ListaRistorantiPageModule {}
