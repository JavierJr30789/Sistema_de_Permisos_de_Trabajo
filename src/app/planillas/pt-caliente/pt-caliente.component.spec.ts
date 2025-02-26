import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtCalienteComponent } from './pt-caliente.component';

describe('PtCalienteComponent', () => {
  let component: PtCalienteComponent;
  let fixture: ComponentFixture<PtCalienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtCalienteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtCalienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
