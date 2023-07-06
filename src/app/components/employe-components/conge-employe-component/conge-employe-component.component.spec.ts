import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeEmployeComponentComponent } from './conge-employe-component.component';

describe('CongeEmployeComponentComponent', () => {
  let component: CongeEmployeComponentComponent;
  let fixture: ComponentFixture<CongeEmployeComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeEmployeComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeEmployeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
