import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateZipCodeModalComponent } from './update-zip-code-modal.component';

describe('UpdateZipCodeModalComponent', () => {
  let component: UpdateZipCodeModalComponent;
  let fixture: ComponentFixture<UpdateZipCodeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateZipCodeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateZipCodeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
