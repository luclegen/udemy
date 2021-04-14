import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showOutline() {
    (document.querySelector('.search-in') as HTMLElement).style.setProperty('outline', '4px solid #e59819', 'important');
  }

  hideOutline() {
    (document.querySelector('.search-in') as HTMLElement).style.setProperty('outline', 'none', 'important');
  }

}
