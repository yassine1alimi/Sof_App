import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffecterGroupeADepartementComponent } from './affecter-groupe-adepartement.component';

describe('AffecterGroupeADepartementComponent', () => {
  let component: AffecterGroupeADepartementComponent;
  let fixture: ComponentFixture<AffecterGroupeADepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffecterGroupeADepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffecterGroupeADepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
