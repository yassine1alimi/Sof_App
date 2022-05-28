import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeRequestEmployeComponent } from './demande-request-employe.component';

describe('DemandeRequestEmployeComponent', () => {
  let component: DemandeRequestEmployeComponent;
  let fixture: ComponentFixture<DemandeRequestEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeRequestEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeRequestEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
