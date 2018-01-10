import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtbSearchBoxComponent } from './etb-search-box.component';

describe('EtbSearchBoxComponent', () => {
  let component: EtbSearchBoxComponent;
  let fixture: ComponentFixture<EtbSearchBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtbSearchBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtbSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
