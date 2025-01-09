import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomTariffsModalComponent } from './create-custom-tariffs-modal.component';

describe('CreateCustomTariffsModalComponent', () => {
  let component: CreateCustomTariffsModalComponent;
  let fixture: ComponentFixture<CreateCustomTariffsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCustomTariffsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomTariffsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
