import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWorkorderModalComponent } from './create-workorder-modal.component';

describe('CreateWorkorderModalComponent', () => {
  let component: CreateWorkorderModalComponent;
  let fixture: ComponentFixture<CreateWorkorderModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateWorkorderModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWorkorderModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
