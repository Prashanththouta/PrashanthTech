/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PosCustomercreationComponent } from './pos-customercreation.component';

describe('PosCustomercreationComponent', () => {
  let component: PosCustomercreationComponent;
  let fixture: ComponentFixture<PosCustomercreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosCustomercreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosCustomercreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
