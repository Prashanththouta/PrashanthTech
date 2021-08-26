/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FlexboxLearnComponent } from './flexbox-learn.component';

describe('FlexboxLearnComponent', () => {
  let component: FlexboxLearnComponent;
  let fixture: ComponentFixture<FlexboxLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlexboxLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexboxLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
