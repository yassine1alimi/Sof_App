import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeRequestComponent } from './demande-request.component';

describe('DemandeRequestComponent', () => {
  let component: DemandeRequestComponent;
  let fixture: ComponentFixture<DemandeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
