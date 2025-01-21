import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speakers-gallery-component',
  imports: [],
  templateUrl: './speakers-gallery-component.component.html',
  styleUrl: './speakers-gallery-component.component.scss'
})
export class SpeakersGalleryComponentComponent {
  @Input() speakers: { name: string; image: string }[] = [];
}
