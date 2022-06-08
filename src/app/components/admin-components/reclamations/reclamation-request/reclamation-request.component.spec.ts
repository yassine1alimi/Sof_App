import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationRequestComponent } from './reclamation-request.component';

describe('ReclamationRequestComponent', () => {
  let component: ReclamationRequestComponent;
  let fixture: ComponentFixture<ReclamationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclamationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclamationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
