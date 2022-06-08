import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReclamations1Component } from './list-reclamations1.component';

describe('ListReclamations1Component', () => {
  let component: ListReclamations1Component;
  let fixture: ComponentFixture<ListReclamations1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReclamations1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReclamations1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
