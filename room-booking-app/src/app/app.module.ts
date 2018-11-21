import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomSelectComponent } from './room-select/room-select.component';
import { RoomDashboardComponent } from './room-dashboard/room-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomSelectComponent,
    RoomDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
