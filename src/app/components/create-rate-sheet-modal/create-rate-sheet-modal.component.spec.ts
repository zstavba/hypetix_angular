import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRateSheetModalComponent } from './create-rate-sheet-modal.component';

describe('CreateRateSheetModalComponent', () => {
  let component: CreateRateSheetModalComponent;
  let fixture: ComponentFixture<CreateRateSheetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRateSheetModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRateSheetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
