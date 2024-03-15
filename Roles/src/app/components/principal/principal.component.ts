import { Component, AfterViewInit, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(50px)' }),
        animate('2s ease', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})  

export class PrincipalComponent implements OnInit, AfterViewInit {
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initSwiper();
  }

  private initSwiper() {
    const swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 350,
        modifier: 1,
        slideShadows: true
      }
    });
  }
  
}