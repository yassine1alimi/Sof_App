import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoReclamationClientComponent } from './info-reclamation-client.component';

describe('InfoReclamationClientComponent', () => {
  let component: InfoReclamationClientComponent;
  let fixture: ComponentFixture<InfoReclamationClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoReclamationClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoReclamationClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
