import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAreasModalComponent } from './create-areas-modal.component';

describe('CreateAreasModalComponent', () => {
  let component: CreateAreasModalComponent;
  let fixture: ComponentFixture<CreateAreasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAreasModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAreasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
