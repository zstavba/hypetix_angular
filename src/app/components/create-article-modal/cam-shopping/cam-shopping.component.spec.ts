import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamShoppingComponent } from './cam-shopping.component';

describe('CamShoppingComponent', () => {
  let component: CamShoppingComponent;
  let fixture: ComponentFixture<CamShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamShoppingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
