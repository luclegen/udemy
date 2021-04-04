import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-bar',
  templateUrl: './smart-bar.component.html',
  styleUrls: ['./smart-bar.component.sass']
})
export class SmartBarComponent implements OnInit {

  h = 6;
  m = 0;
  s = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
