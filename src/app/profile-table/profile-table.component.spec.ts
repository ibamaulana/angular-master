import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileTable } from './profile-table.component';

describe('ProfileTable', () => {
  let component: ProfileTable;
  let fixture: ComponentFixture<ProfileTable>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileTable ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
