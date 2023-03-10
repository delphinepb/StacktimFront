import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnaissanceComponent } from './connaissance.component';

describe('ConnaissanceComponent', () => {
  let component: ConnaissanceComponent;
  let fixture: ComponentFixture<ConnaissanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnaissanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
