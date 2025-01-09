import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCountryModalComponent } from './update-country-modal.component';

describe('UpdateCountryModalComponent', () => {
  let component: UpdateCountryModalComponent;
  let fixture: ComponentFixture<UpdateCountryModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCountryModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCountryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
