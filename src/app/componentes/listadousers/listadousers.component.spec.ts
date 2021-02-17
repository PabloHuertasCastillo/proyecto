import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadousersComponent } from './listadousers.component';

describe('ListadousersComponent', () => {
  let component: ListadousersComponent;
  let fixture: ComponentFixture<ListadousersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadousersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadousersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
