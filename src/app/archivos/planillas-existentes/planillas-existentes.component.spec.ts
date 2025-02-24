import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanillasExistentesComponent } from './planillas-existentes.component';

describe('PlanillasExistentesComponent', () => {
  let component: PlanillasExistentesComponent;
  let fixture: ComponentFixture<PlanillasExistentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanillasExistentesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanillasExistentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
