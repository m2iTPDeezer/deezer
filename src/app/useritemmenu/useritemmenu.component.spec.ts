import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UseritemmenuComponent } from './useritemmenu.component';

describe('UseritemmenuComponent', () => {
  let component: UseritemmenuComponent;
  let fixture: ComponentFixture<UseritemmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UseritemmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UseritemmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
