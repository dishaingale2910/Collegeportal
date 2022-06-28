import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudfeedComponent } from './studfeed.component';

describe('StudfeedComponent', () => {
  let component: StudfeedComponent;
  let fixture: ComponentFixture<StudfeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudfeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
