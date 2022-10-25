import { Component, ElementRef } from '@angular/core';
import { GlobalStoreService } from 'AppModule/Services/SlobalStoreService/GlobalsStoreService';

@Component({
  selector: 'App',
  templateUrl: './AppComponent.html',
  styleUrls: ['./AppComponent.sass'],
})
export class AppComponent {
  constructor(
    public GlobalStoreObject: GlobalStoreService,
    private ComponentRef: ElementRef
  ) {}
}
