import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Nueva2Page } from './nueva2.page';

describe('Nueva2Page', () => {
  let component: Nueva2Page;
  let fixture: ComponentFixture<Nueva2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Nueva2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Nueva2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
