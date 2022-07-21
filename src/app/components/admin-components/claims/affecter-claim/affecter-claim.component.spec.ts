import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterClaimComponent } from './affecter-claim.component';

describe('AffecterClaimComponent', () => {
  let component: AffecterClaimComponent;
  let fixture: ComponentFixture<AffecterClaimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffecterClaimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
