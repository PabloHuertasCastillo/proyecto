import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudContactosComponent } from './crud-contactos.component';

describe('CrudContactosComponent', () => {
  let component: CrudContactosComponent;
  let fixture: ComponentFixture<CrudContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudContactosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
