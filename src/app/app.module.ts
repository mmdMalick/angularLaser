import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PopupModule } from '@progress/kendo-angular-popup';
import { ExcelExportModule } from '@progress/kendo-angular-excel-export';
import { IconsModule } from '@progress/kendo-angular-icons';
import { MapModule } from '@progress/kendo-angular-map';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './layout/footer/footer.component';









@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    BrowserAnimationsModule,
    PDFExportModule,
    PopupModule,
    ExcelExportModule,
    IconsModule,
    MapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
