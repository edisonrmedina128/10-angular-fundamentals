import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersHeaderComponentComponent } from './speakers-header-component.component';

describe('SpeakersHeaderComponentComponent', () => {
  let component: SpeakersHeaderComponentComponent;
  let fixture: ComponentFixture<SpeakersHeaderComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakersHeaderComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakersHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
