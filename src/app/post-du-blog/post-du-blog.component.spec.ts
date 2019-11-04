import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDuBlogComponent } from './post-du-blog.component';

describe('PostDuBlogComponent', () => {
  let component: PostDuBlogComponent;
  let fixture: ComponentFixture<PostDuBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDuBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDuBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
