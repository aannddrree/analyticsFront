import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleBancoComponent } from './controle-banco.component';

describe('ControleBancoComponent', () => {
  let component: ControleBancoComponent;
  let fixture: ComponentFixture<ControleBancoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleBancoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleBancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
