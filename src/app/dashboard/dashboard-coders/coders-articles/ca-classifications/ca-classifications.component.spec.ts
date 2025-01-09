import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaClassificationsComponent } from './ca-classifications.component';

describe('CaClassificationsComponent', () => {
  let component: CaClassificationsComponent;
  let fixture: ComponentFixture<CaClassificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaClassificationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaClassificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
