import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCurrencieModalComponent } from './update-currencie-modal.component';

describe('UpdateCurrencieModalComponent', () => {
  let component: UpdateCurrencieModalComponent;
  let fixture: ComponentFixture<UpdateCurrencieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCurrencieModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCurrencieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
