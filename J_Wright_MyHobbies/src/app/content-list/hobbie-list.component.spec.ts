import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbieListComponent } from './hobbie-list.component';

describe('ContentListComponent', () => {
  let component: HobbieListComponent;
  let fixture: ComponentFixture<HobbieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
