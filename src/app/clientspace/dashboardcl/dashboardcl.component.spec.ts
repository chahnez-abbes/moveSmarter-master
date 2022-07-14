import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardclComponent } from './dashboardcl.component';

describe('DashboardclComponent', () => {
  let component: DashboardclComponent;
  let fixture: ComponentFixture<DashboardclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
