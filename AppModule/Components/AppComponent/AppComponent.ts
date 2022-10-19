import { Component, OnInit } from '@angular/core';
import { GlobalStore } from '../../Services/SlobalStoreService/GlobalsStoreService';
@Component({
  selector: 'App',
  providers: [GlobalStore],
  templateUrl: './AppComponent.html',
  styleUrls: ['./AppComponent.sass'],
})
export class AppComponent {}
