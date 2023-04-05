import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddRessComponent } from './dialog-add-ress.component';

describe('DialogAddRessComponent', () => {
  let component: DialogAddRessComponent;
  let fixture: ComponentFixture<DialogAddRessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddRessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogAddRessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
