import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCustomTariffsModalComponent } from './update-custom-tariffs-modal.component';

describe('UpdateCustomTariffsModalComponent', () => {
  let component: UpdateCustomTariffsModalComponent;
  let fixture: ComponentFixture<UpdateCustomTariffsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCustomTariffsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCustomTariffsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
