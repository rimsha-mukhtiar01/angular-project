import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesLine } from './sales-line';

describe('SalesLine', () => {
  let component: SalesLine;
  let fixture: ComponentFixture<SalesLine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SalesLine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesLine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
