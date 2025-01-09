import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateArticleTypeModalComponent } from './update-article-type-modal.component';

describe('UpdateArticleTypeModalComponent', () => {
  let component: UpdateArticleTypeModalComponent;
  let fixture: ComponentFixture<UpdateArticleTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateArticleTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateArticleTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
