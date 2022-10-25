import { Component } from '@angular/core';
import { GlobalStoreService } from 'AppModule/Services/SlobalStoreService/GlobalsStoreService';

@Component({
  selector: 'Header',
  templateUrl: './HeaderComponent.html',
  styleUrls: ['./HeaderComponent.sass'],
})
export class HeaderComponent {
  constructor(public GlobalStoreObject: GlobalStoreService) {}
}
