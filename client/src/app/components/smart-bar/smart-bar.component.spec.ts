import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartBarComponent } from './smart-bar.component';

describe('SmartBarComponent', () => {
  let component: SmartBarComponent;
  let fixture: ComponentFixture<SmartBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
