import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimRequestClientComponent } from './claim-request-client.component';

describe('ClaimRequestClientComponent', () => {
  let component: ClaimRequestClientComponent;
  let fixture: ComponentFixture<ClaimRequestClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClaimRequestClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClaimRequestClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
