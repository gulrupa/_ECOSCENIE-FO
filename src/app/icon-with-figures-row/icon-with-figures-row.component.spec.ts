import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconWithFiguresRowComponent } from './icon-with-figures-row.component';

describe('IconWithFiguresRowComponent', () => {
  let component: IconWithFiguresRowComponent;
  let fixture: ComponentFixture<IconWithFiguresRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconWithFiguresRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconWithFiguresRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
