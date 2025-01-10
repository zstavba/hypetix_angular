import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSectorModalComponent } from './create-sector-modal.component';

describe('CreateSectorModalComponent', () => {
  let component: CreateSectorModalComponent;
  let fixture: ComponentFixture<CreateSectorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSectorModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateSectorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
