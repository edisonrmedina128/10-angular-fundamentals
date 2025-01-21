import { Component } from '@angular/core';
import { SpeakersGalleryComponentComponent } from '../speakers-gallery-component/speakers-gallery-component.component';
import { SpeakersHeaderComponentComponent } from '../speakers-header-component/speakers-header-component.component';
import { SpeakersListComponentComponent } from '../speakers-list-component/speakers-list-component.component';

@Component({
  selector: 'app-speakers',
  imports: [
    SpeakersHeaderComponentComponent,
    SpeakersGalleryComponentComponent,
    SpeakersListComponentComponent
  ],
  standalone: true,
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.scss'
})
export class SpeakersComponent {
  description: string =
    'A conference for builders leading the latest innovations in the AI and developer experience ecosystem.';
  speakersNames: string[] = [
    'Guillermo Rauch',
    'Paige Bailey',
    'Lee Robinson',
    'Sarah Guo',
    'Guillermo Rauch',
    'Paige Bailey',
    'Lee Robinson',
    'Sarah Guo',
    'Guillermo Rauch',
    'Paige Bailey',
    'Lee Robinson',
    'Sarah Guo',
  ];

  speakersData = [
    { name: 'Guillermo Rauch', image: 'guillermo-rauch.jpg' },
    { name: 'Paige Bailey', image: 'guillermo-rauch.jpg' },
    { name: 'Lee Robinson', image: 'guillermo-rauch.jpg' },
    { name: 'Sarah Guo', image: 'guillermo-rauch.jpg' },
  ];
  
}
