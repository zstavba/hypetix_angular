import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaxModalComponent } from './update-tax-modal.component';

describe('UpdateTaxModalComponent', () => {
  let component: UpdateTaxModalComponent;
  let fixture: ComponentFixture<UpdateTaxModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTaxModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTaxModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
