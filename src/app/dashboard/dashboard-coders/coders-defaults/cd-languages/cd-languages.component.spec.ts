import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CdLanguagesComponent } from './cd-languages.component';

describe('CdLanguagesComponent', () => {
  let component: CdLanguagesComponent;
  let fixture: ComponentFixture<CdLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CdLanguagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CdLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
