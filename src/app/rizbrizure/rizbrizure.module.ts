import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RizbrizurePageRoutingModule } from './rizbrizure-routing.module';

import { RizbrizurePage } from './rizbrizure.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RizbrizurePageRoutingModule
  ],
  declarations: [RizbrizurePage]
})
export class RizbrizurePageModule {}
