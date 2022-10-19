import { Component, OnInit } from '@angular/core';
import { GlobalStore } from 'AppModule/Services/SlobalStoreService/GlobalsStoreService';

@Component({
  selector: 'SideMenu',
  templateUrl: './SideMenuComponent.html',
  styleUrls: ['./SideMenuComponent.sass'],
})
export class SideMenuComponent implements OnInit {
  constructor(private GlobalStoreObject: GlobalStore) {}
  ApplicationMenu: string[] = [];

  ngOnInit(): void {
    this.ApplicationMenu = this.GlobalStoreObject.getApplicationMenu;
  }
}
