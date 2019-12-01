import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnersMainComponent } from './partners-main.component';

describe('PartnersMainComponent', () => {
  let component: PartnersMainComponent;
  let fixture: ComponentFixture<PartnersMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnersMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnersMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
