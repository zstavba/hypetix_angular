import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGroupTypeModalComponent } from './update-group-type-modal.component';

describe('UpdateGroupTypeModalComponent', () => {
  let component: UpdateGroupTypeModalComponent;
  let fixture: ComponentFixture<UpdateGroupTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateGroupTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGroupTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
