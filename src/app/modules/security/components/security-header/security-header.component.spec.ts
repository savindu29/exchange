import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityHeaderComponent } from './security-header.component';

describe('SecurityHeaderComponent', () => {
  let component: SecurityHeaderComponent;
  let fixture: ComponentFixture<SecurityHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SecurityHeaderComponent]
    });
    fixture = TestBed.createComponent(SecurityHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
