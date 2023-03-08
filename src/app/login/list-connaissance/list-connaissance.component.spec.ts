import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConnaissanceComponent } from './list-connaissance.component';

describe('ListConnaissanceComponent', () => {
  let component: ListConnaissanceComponent;
  let fixture: ComponentFixture<ListConnaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConnaissanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListConnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
