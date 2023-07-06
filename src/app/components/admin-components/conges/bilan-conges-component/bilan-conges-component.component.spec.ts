import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanCongesComponentComponent } from './bilan-conges-component.component';

describe('BilanCongesComponentComponent', () => {
  let component: BilanCongesComponentComponent;
  let fixture: ComponentFixture<BilanCongesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanCongesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanCongesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
