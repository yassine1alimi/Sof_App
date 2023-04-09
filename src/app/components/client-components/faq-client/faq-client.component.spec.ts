import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqClientComponent } from './faq-client.component';

describe('FaqClientComponent', () => {
  let component: FaqClientComponent;
  let fixture: ComponentFixture<FaqClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
