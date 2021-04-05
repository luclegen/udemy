import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smart-bar',
  templateUrl: './smart-bar.component.html',
  styleUrls: ['./smart-bar.component.sass']
})
export class SmartBarComponent implements OnInit {

  h = -2;
  m = -2;
  s = -2;
  title = 'New student deal';
  subtitle = 'Sign up now to get courses for as low as $12.99 each. New users only.';
  expired = false;

  constructor() { }

  ngOnInit(): void {
    this.initTimer();
  }

  initTimer() {
    const countDownDate = new Date().getTime() + 6 * 60 * 60 * 1000;

    const x = setInterval(() => {
      const distance = countDownDate - new Date().getTime();

      this.h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.s = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        this.expired = true;
        this.title = 'Anytime, anywhere';
        this.subtitle = 'Learn on your schedule from any device';
        clearInterval(x);
      }
    }, 1000);
  }

}
