import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFormularioComponent } from './edit-formulario.component';

describe('EditFormularioComponent', () => {
  let component: EditFormularioComponent;
  let fixture: ComponentFixture<EditFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFormularioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
