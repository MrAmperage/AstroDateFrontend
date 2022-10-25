import { Component } from '@angular/core';
import { GlobalStoreService } from 'AppModule/Services/SlobalStoreService/GlobalsStoreService';

@Component({
  selector: 'SideMenu',
  templateUrl: './SideMenuComponent.html',
  styleUrls: ['./SideMenuComponent.sass'],
})
export class SideMenuComponent {
  constructor(public GlobalStoreObject: GlobalStoreService) {}
}
