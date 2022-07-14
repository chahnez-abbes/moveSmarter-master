import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavendeurComponent } from './sidenavendeur.component';

describe('SidenavendeurComponent', () => {
  let component: SidenavendeurComponent;
  let fixture: ComponentFixture<SidenavendeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavendeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavendeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
