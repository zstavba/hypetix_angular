import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSectorModalComponent } from './update-sector-modal.component';

describe('UpdateSectorModalComponent', () => {
  let component: UpdateSectorModalComponent;
  let fixture: ComponentFixture<UpdateSectorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSectorModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
