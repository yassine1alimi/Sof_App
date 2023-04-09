import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesFaqsComponent } from './notes-faqs.component';

describe('NotesFaqsComponent', () => {
  let component: NotesFaqsComponent;
  let fixture: ComponentFixture<NotesFaqsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotesFaqsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
