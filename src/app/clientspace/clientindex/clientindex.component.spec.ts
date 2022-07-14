import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientindexComponent } from './clientindex.component';




describe('ClientindexComponent', () => {
  let component: ClientindexComponent;
  let fixture: ComponentFixture<ClientindexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientindexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
