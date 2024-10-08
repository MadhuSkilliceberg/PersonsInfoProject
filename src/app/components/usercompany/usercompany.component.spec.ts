import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCompanyComponent } from './usercompany.component';

describe('UserCompanyComponent', () => {
  let component: UserCompanyComponent;
  let fixture: ComponentFixture<UserCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
