import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesPostsComponent } from './les-posts.component';

describe('LesPostsComponent', () => {
  let component: LesPostsComponent;
  let fixture: ComponentFixture<LesPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
