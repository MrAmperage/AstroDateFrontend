import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './AppModuleRouting';
import { AppComponent } from './Components/AppComponent/AppComponent';
import { SideMenuComponent } from './Components/SideMenuComponent/SideMenuComponent';
import { HeaderComponent } from './Components/HeaderComponent/HeaderComponent';
import { FormsModule } from '@angular/forms';
import { GlobalStore } from './Services/SlobalStoreService/GlobalsStoreService';
@NgModule({
  declarations: [AppComponent, SideMenuComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GlobalStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
