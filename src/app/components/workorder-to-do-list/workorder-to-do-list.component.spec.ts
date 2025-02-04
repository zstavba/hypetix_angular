import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkorderToDoListComponent } from './workorder-to-do-list.component';

describe('WorkorderToDoListComponent', () => {
  let component: WorkorderToDoListComponent;
  let fixture: ComponentFixture<WorkorderToDoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkorderToDoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkorderToDoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
