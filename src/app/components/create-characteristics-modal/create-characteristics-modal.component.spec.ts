import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacteristicsModalComponent } from './create-characteristics-modal.component';

describe('CreateCharacteristicsModalComponent', () => {
  let component: CreateCharacteristicsModalComponent;
  let fixture: ComponentFixture<CreateCharacteristicsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacteristicsModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacteristicsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
