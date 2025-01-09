import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateZipCodeModalComponent } from './create-zip-code-modal.component';

describe('CreateZipCodeModalComponent', () => {
  let component: CreateZipCodeModalComponent;
  let fixture: ComponentFixture<CreateZipCodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateZipCodeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateZipCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
