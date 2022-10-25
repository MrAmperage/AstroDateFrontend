import { Component, ElementRef, HostListener } from '@angular/core';
import { GlobalStoreService } from 'AppModule/Services/SlobalStoreService/GlobalsStoreService';

@Component({
  selector: 'UserMenu',
  templateUrl: './UserMenuComponent.html',
  styleUrls: ['./UserMenuComponent.sass'],
})
export class UserMenuComponent {
  constructor(public GlobalStoreObject: GlobalStoreService) {}
}
