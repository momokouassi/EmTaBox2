import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtbMailDetailsComponent } from './etb-mail-details.component';

describe('EtbMailDetailsComponent', () => {
  let component: EtbMailDetailsComponent;
  let fixture: ComponentFixture<EtbMailDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtbMailDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtbMailDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
