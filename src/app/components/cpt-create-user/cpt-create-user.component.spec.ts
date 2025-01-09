import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CptCreateUserComponent } from './cpt-create-user.component';

describe('CptCreateUserComponent', () => {
  let component: CptCreateUserComponent;
  let fixture: ComponentFixture<CptCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CptCreateUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CptCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
