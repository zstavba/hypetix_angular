import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAreasModalComponent } from './update-areas-modal.component';

describe('UpdateAreasModalComponent', () => {
  let component: UpdateAreasModalComponent;
  let fixture: ComponentFixture<UpdateAreasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAreasModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAreasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
