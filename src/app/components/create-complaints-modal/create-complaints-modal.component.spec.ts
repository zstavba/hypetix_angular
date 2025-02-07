import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComplaintsModalComponent } from './create-complaints-modal.component';

describe('CreateComplaintsModalComponent', () => {
  let component: CreateComplaintsModalComponent;
  let fixture: ComponentFixture<CreateComplaintsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateComplaintsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComplaintsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
