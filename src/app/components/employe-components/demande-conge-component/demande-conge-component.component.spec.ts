import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeCongeComponentComponent } from './demande-conge-component.component';

describe('DemandeCongeComponentComponent', () => {
  let component: DemandeCongeComponentComponent;
  let fixture: ComponentFixture<DemandeCongeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeCongeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeCongeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
