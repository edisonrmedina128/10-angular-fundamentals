import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersListComponentComponent } from './speakers-list-component.component';

describe('SpeakersListComponentComponent', () => {
  let component: SpeakersListComponentComponent;
  let fixture: ComponentFixture<SpeakersListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakersListComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakersListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
