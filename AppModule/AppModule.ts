import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './AppModuleRouting';
import { AppComponent } from './Components/AppComponent/AppComponent';
import { SideMenuComponent } from './Components/SideMenuComponent/SideMenuComponent';
import { HeaderComponent } from './Components/HeaderComponent/HeaderComponent';
import { FormsModule } from '@angular/forms';
import { GlobalStoreService } from './Services/SlobalStoreService/GlobalsStoreService';
import { ContentComponent } from './Components/ContentComponent/ContentComponent';
import { UserMenuComponent } from './Components/UserMenuComponent/UserMenuComponent';
@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    HeaderComponent,
    ContentComponent,
    UserMenuComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [GlobalStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
