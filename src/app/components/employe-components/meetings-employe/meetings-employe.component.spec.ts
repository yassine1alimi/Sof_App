import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingsEmployeComponent } from './meetings-employe.component';

describe('MeetingsEmployeComponent', () => {
  let component: MeetingsEmployeComponent;
  let fixture: ComponentFixture<MeetingsEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingsEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingsEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
