import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyProfileAboutComponent } from './company-profile-about.component';

describe('CompanyProfileAboutComponent', () => {
  let component: CompanyProfileAboutComponent;
  let fixture: ComponentFixture<CompanyProfileAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyProfileAboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyProfileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
