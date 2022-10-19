import { Component, OnInit } from '@angular/core';
import { GlobalStore } from 'AppModule/Services/SlobalStoreService/GlobalsStoreService';

@Component({
  selector: 'SideMenu',
  templateUrl: './SideMenuComponent.html',
  styleUrls: ['./SideMenuComponent.sass'],
  providers: [GlobalStore],
})
export class SideMenuComponent implements OnInit {
  ApplicationMenu: string[] = [];
  constructor(private GlobalStoreObject: GlobalStore) {}
  ngOnInit(): void {
    this.ApplicationMenu = this.GlobalStoreObject.getApplicationMenu;
  }
}
