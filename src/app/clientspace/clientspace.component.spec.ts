import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientspaceComponent } from './clientspace.component';

describe('ClientspaceComponent', () => {
  let component: ClientspaceComponent;
  let fixture: ComponentFixture<ClientspaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientspaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
