import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FavoritePageRoutingModule } from './favourite-routing.module';
import { FavouritePage } from './favourite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritePageRoutingModule
  ],
  declarations: [FavouritePage]
})
export class FavoritePageModule { }
