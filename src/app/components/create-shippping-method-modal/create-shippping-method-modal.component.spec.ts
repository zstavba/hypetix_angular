import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateShipppingMethodModalComponent } from './create-shippping-method-modal.component';

describe('CreateShipppingMethodModalComponent', () => {
  let component: CreateShipppingMethodModalComponent;
  let fixture: ComponentFixture<CreateShipppingMethodModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateShipppingMethodModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateShipppingMethodModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
