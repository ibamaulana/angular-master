import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableBasicExample } from './table-basic-example.component';

describe('TableBasicExample', () => {
  let component: TableBasicExample;
  let fixture: ComponentFixture<TableBasicExample>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableBasicExample ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableBasicExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
