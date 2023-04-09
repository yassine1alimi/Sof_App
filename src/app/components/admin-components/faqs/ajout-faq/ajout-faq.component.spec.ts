import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutFaqComponent } from './ajout-faq.component';

describe('AjoutFaqComponent', () => {
  let component: AjoutFaqComponent;
  let fixture: ComponentFixture<AjoutFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
