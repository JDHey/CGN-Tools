import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheetComponent } from './sheet/sheet.component';
import { GraphComponent } from './graph/graph.component';
import { PacketComponent } from './packet/packet.component';

@NgModule({
  declarations: [
    AppComponent,
    SheetComponent,
    GraphComponent,
    PacketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
