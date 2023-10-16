import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudianteTaskComponent } from './estudiante-task.component';

describe('EstudianteTaskComponent', () => {
  let component: EstudianteTaskComponent;
  let fixture: ComponentFixture<EstudianteTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstudianteTaskComponent]
    });
    fixture = TestBed.createComponent(EstudianteTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
