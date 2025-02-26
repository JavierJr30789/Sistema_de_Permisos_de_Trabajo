import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PtFrioComponent } from './pt-frio.component';

describe('PtFrioComponent', () => {
  let component: PtFrioComponent;
  let fixture: ComponentFixture<PtFrioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PtFrioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PtFrioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
