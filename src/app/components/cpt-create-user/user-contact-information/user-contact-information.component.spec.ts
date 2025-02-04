import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactInformationComponent } from './user-contact-information.component';

describe('UserContactInformationComponent', () => {
  let component: UserContactInformationComponent;
  let fixture: ComponentFixture<UserContactInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserContactInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserContactInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
