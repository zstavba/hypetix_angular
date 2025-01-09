import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptUploadUserComponent } from './cpt-upload-user.component';

describe('CptUploadUserComponent', () => {
  let component: CptUploadUserComponent;
  let fixture: ComponentFixture<CptUploadUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CptUploadUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptUploadUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
