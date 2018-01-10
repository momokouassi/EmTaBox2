import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtbWriteMailComponent } from './etb-write-mail.component';

describe('EtbWriteMailComponent', () => {
  let component: EtbWriteMailComponent;
  let fixture: ComponentFixture<EtbWriteMailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtbWriteMailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtbWriteMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
