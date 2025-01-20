import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCurrencieModalComponent } from './create-currencie-modal.component';

describe('CreateCurrencieModalComponent', () => {
  let component: CreateCurrencieModalComponent;
  let fixture: ComponentFixture<CreateCurrencieModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCurrencieModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCurrencieModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
