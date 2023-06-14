import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShabtComponent } from './shabt.component';

describe('ShabtComponent', () => {
  let component: ShabtComponent;
  let fixture: ComponentFixture<ShabtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShabtComponent]
    });
    fixture = TestBed.createComponent(ShabtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
