import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboBoxMenuComponent } from './combo-box-menu.component';

describe('ComboBoxMenuComponent', () => {
  let component: ComboBoxMenuComponent;
  let fixture: ComponentFixture<ComboBoxMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComboBoxMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComboBoxMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
