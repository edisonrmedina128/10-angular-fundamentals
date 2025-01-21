import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakersGalleryComponentComponent } from './speakers-gallery-component.component';

describe('SpeakersGalleryComponentComponent', () => {
  let component: SpeakersGalleryComponentComponent;
  let fixture: ComponentFixture<SpeakersGalleryComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakersGalleryComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakersGalleryComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
