import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Paso6Component } from './paso6.component';

describe('Paso6Component', () => {
  let component: Paso6Component;
  let fixture: ComponentFixture<Paso6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Paso6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Paso6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
