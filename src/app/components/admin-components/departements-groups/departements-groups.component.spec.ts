import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartementsGroupsComponent } from './departements-groups.component';

describe('DepartementsGroupsComponent', () => {
  let component: DepartementsGroupsComponent;
  let fixture: ComponentFixture<DepartementsGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartementsGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementsGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
