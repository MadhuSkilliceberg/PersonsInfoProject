import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContactsComponent } from './profile-contacts.component';

describe('ProfileContactsComponent', () => {
  let component: ProfileContactsComponent;
  let fixture: ComponentFixture<ProfileContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileContactsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
