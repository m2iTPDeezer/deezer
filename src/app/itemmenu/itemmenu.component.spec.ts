import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemmenuComponent } from './itemmenu.component';

describe('ItemmenuComponent', () => {
  let component: ItemmenuComponent;
  let fixture: ComponentFixture<ItemmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
