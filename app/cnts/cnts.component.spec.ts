import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CntsComponent } from './cnts.component';

describe('CntsComponent', () => {
  let component: CntsComponent;
  let fixture: ComponentFixture<CntsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CntsComponent]
    });
    fixture = TestBed.createComponent(CntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
