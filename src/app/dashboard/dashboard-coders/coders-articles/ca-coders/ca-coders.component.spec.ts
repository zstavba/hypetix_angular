import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaCodersComponent } from './ca-coders.component';

describe('CaCodersComponent', () => {
  let component: CaCodersComponent;
  let fixture: ComponentFixture<CaCodersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaCodersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaCodersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
