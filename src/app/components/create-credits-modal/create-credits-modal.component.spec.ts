import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCreditsModalComponent } from './create-credits-modal.component';

describe('CreateCreditsModalComponent', () => {
  let component: CreateCreditsModalComponent;
  let fixture: ComponentFixture<CreateCreditsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCreditsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCreditsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
