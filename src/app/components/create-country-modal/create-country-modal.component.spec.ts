import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCountryModalComponent } from './create-country-modal.component';

describe('CreateCountryModalComponent', () => {
  let component: CreateCountryModalComponent;
  let fixture: ComponentFixture<CreateCountryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCountryModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCountryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
