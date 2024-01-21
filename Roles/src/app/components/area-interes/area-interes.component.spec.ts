import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaInteresComponent } from './area-interes.component';

describe('AreaInteresComponent', () => {
  let component: AreaInteresComponent;
  let fixture: ComponentFixture<AreaInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaInteresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreaInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
