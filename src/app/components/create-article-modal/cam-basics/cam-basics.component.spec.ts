import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamBasicsComponent } from './cam-basics.component';

describe('CamBasicsComponent', () => {
  let component: CamBasicsComponent;
  let fixture: ComponentFixture<CamBasicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamBasicsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CamBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
