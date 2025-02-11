import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamPartnersComponent } from './cam-partners.component';

describe('CamPartnersComponent', () => {
  let component: CamPartnersComponent;
  let fixture: ComponentFixture<CamPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamPartnersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
