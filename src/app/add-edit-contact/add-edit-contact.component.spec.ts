import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditContactComponent } from './add-edit-contact.component';

describe('AddEditContactComponent', () => {
  let component: AddEditContactComponent;
  let fixture: ComponentFixture<AddEditContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
