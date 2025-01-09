import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdZipCodeComponent } from './cd-zip-code.component';

describe('CdZipCodeComponent', () => {
  let component: CdZipCodeComponent;
  let fixture: ComponentFixture<CdZipCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdZipCodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdZipCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
