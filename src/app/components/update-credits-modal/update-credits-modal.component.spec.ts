import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCreditsModalComponent } from './update-credits-modal.component';

describe('UpdateCreditsModalComponent', () => {
  let component: UpdateCreditsModalComponent;
  let fixture: ComponentFixture<UpdateCreditsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCreditsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCreditsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
