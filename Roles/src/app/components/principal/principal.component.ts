import { Component } from '@angular/core';
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
export class PrincipalComponent {

  
}
