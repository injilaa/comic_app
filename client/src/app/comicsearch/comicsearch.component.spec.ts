import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsearchComponent } from './comicsearch.component';

describe('ComicsearchComponent', () => {
  let component: ComicsearchComponent;
  let fixture: ComponentFixture<ComicsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComicsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
