import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLogComponent } from './tasklog.component';

describe('TaskLogComponent', () => {
  let component: TaskLogComponent;
  let fixture: ComponentFixture<TaskLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
