import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'App',

  templateUrl: './AppComponent.html',
  styleUrls: ['./AppComponent.sass'],
})
export class AppComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    console.log('Компонент загрузился');
  }
}
