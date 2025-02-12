import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCharacteristicsModalComponent } from './update-characteristics-modal.component';

describe('UpdateCharacteristicsModalComponent', () => {
  let component: UpdateCharacteristicsModalComponent;
  let fixture: ComponentFixture<UpdateCharacteristicsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCharacteristicsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCharacteristicsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
