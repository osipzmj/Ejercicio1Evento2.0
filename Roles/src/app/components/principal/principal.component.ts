<<<<<<< Updated upstream
import { Component, AfterViewInit, OnInit } from '@angular/core';
import Swiper from 'swiper';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> Stashed changes
import { trigger, transition, style, animate } from '@angular/animations';
import Swiper from 'swiper';
//import { SwiperOptions } from 'swiper/types';

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
<<<<<<< Updated upstream
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
=======
})
export class PrincipalComponent implements OnInit {

  private swiper: Swiper | undefined;

  constructor() { }

  ngOnInit(): void {

    // const swiperParams: Swiper = {
    //   effect: "EffectCoverflow",
    //   grabCursor: true,
    //   centeredSlides: true,
    //   slidesPerView: "auto",
    //   coverflowEffect: {
    //     rotate: 20,
    //     stretch: 0,
    //     depth: 30,
    //     modifier: 1,
    //     slideShadows: true
    //   },
    //   pagination: {
    //     el: ".swiper-pagination"
    //   }
    // };
    
    // const swiper = new Swiper('.swiper', swiperParams);
  }
}
>>>>>>> Stashed changes
