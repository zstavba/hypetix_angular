import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArticleTypeModalComponent } from './upload-article-type-modal.component';

describe('UploadArticleTypeModalComponent', () => {
  let component: UploadArticleTypeModalComponent;
  let fixture: ComponentFixture<UploadArticleTypeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadArticleTypeModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadArticleTypeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
