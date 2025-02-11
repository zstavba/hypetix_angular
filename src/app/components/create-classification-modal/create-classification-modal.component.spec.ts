import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClassificationModalComponent } from './create-classification-modal.component';

describe('CreateClassificationModalComponent', () => {
  let component: CreateClassificationModalComponent;
  let fixture: ComponentFixture<CreateClassificationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateClassificationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateClassificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
