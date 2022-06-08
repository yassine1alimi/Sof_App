import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalimRequestComponent } from './calim-request.component';

describe('CalimRequestComponent', () => {
  let component: CalimRequestComponent;
  let fixture: ComponentFixture<CalimRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalimRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalimRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
