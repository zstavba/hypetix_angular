import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaGroupsComponent } from './ca-groups.component';

describe('CaGroupsComponent', () => {
  let component: CaGroupsComponent;
  let fixture: ComponentFixture<CaGroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CaGroupsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
