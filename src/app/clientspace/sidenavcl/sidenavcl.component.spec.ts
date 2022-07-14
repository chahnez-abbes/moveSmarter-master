import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavclComponent } from './sidenavcl.component';

describe('SidenavclComponent', () => {
  let component: SidenavclComponent;
  let fixture: ComponentFixture<SidenavclComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavclComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavclComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
