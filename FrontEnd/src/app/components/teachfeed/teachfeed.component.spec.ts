import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachfeedComponent } from './teachfeed.component';

describe('TeachfeedComponent', () => {
  let component: TeachfeedComponent;
  let fixture: ComponentFixture<TeachfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
