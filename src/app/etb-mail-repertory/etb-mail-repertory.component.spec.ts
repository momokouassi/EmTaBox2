import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtbMailRepertoryComponent } from './etb-mail-repertory.component';

describe('EtbMailRepertoryComponent', () => {
  let component: EtbMailRepertoryComponent;
  let fixture: ComponentFixture<EtbMailRepertoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtbMailRepertoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtbMailRepertoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
