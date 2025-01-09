import { TestBed } from '@angular/core/testing';

import { ArticleTypeService } from './article-type.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ArticleTypeService', () => {
  let service: ArticleTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(ArticleTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have get function', () => {
    expect(service.get).toBeTruthy();
  });

  it('should have getNumber function', () => {
    expect(service.getNumber).toBeTruthy();
  })

  it('should have getInformation function', () => {
    expect(service.getInformation).toBeTruthy();
  })

  it('should have getGroupType function', () => {
    expect(service.getGroupType).toBeTruthy();
  });

  it('should have getGroupName function', () => {
    expect(service.getGroupName).toBeTruthy();
  })

  it('should have upload function', () => {
    expect(service.upload).toBeTruthy();
  })

});
