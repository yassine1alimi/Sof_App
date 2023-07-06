import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CongeRequestComponentComponent } from './conge-request-component.component';

describe('CongeRequestComponentComponent', () => {
  let component: CongeRequestComponentComponent;
  let fixture: ComponentFixture<CongeRequestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CongeRequestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CongeRequestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
