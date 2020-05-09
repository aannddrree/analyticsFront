import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleContaComponent } from './controle-conta.component';

describe('ControleContaComponent', () => {
  let component: ControleContaComponent;
  let fixture: ComponentFixture<ControleContaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleContaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleContaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
