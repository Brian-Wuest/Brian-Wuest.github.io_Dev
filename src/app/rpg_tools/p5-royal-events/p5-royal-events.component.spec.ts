import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { P5RoyalEventsComponent } from './p5-royal-events.component';

describe('P5RoyalEventsComponent', () => {
  let component: P5RoyalEventsComponent;
  let fixture: ComponentFixture<P5RoyalEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P5RoyalEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P5RoyalEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
