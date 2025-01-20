import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WideSectionComponent } from './wide-section.component';

describe('WideSectionComponent', () => {
  let component: WideSectionComponent;
  let fixture: ComponentFixture<WideSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WideSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WideSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
