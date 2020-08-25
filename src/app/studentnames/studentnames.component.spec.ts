import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentnamesComponent } from './studentnames.component';

describe('StudentnamesComponent', () => {
  let component: StudentnamesComponent;
  let fixture: ComponentFixture<StudentnamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentnamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentnamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
