import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateClassificationModalComponent } from './update-classification-modal.component';

describe('UpdateClassificationModalComponent', () => {
  let component: UpdateClassificationModalComponent;
  let fixture: ComponentFixture<UpdateClassificationModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateClassificationModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateClassificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
