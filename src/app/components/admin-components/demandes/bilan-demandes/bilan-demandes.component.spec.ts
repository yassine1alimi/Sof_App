import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BilanDemandesComponent } from './bilan-demandes.component';

describe('BilanDemandesComponent', () => {
  let component: BilanDemandesComponent;
  let fixture: ComponentFixture<BilanDemandesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BilanDemandesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BilanDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
