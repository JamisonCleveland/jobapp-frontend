import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsPage } from './personal-details.page';

describe('PersonalDetailsComponent', () => {
  let component: PersonalDetailsPage;
  let fixture: ComponentFixture<PersonalDetailsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDetailsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
