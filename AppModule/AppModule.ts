import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './AppModuleRouting';
import { AppComponent } from './Components/AppComponent/AppComponent';
import { SideMenuComponent } from './Components/SideMenuComponent/SideMenuComponent';

@NgModule({
  declarations: [AppComponent, SideMenuComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
