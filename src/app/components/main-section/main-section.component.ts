import { Component } from '@angular/core';
import { SessionComponent } from '../session/session.component';
import { SessionsComponent } from '../sessions/sessions.component';
import { SpeakersComponent } from '../speakers/speakers.component';
import { VideoComponent } from '../video/video.component';
import { WideSectionComponent } from '../wide-section/wide-section.component';

@Component({
  selector: 'app-main-section',
  imports: [
    VideoComponent,
    SessionComponent,
    SessionsComponent,
    SpeakersComponent,
    WideSectionComponent
  ],
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.scss'
})
export class MainSectionComponent {
  
  navLinksWideSession = [
    { text: 'Enterprise', url: '/enterprise' },
    { text: 'Get a Demo', url: '/get-a-demo' },
    { text: 'Privacy Policy', url: '/privacy' },
    { text: 'Event Terms & Conditions', url: '/events' }
  ];

  sessionsActive = [
    {
      title: 'AI for Enterprise Teams',
      speakers: [
        { name: 'Paige Bailey', logo: 'google.avif', image: 'paige-bailey.avif' },
        { name: 'John Smith', logo: 'google.avif', image: 'paige-bailey.avif' }
      ],
      videoThumbnail: 'thumb-ai-for-enterprise-teams.avif'
    },
    {
      title: 'Betting on the Web: Ensuring Fine-Tuned Performance',
      speakers: [
        { name: 'Alice Johnson', logo: 'google.avif', image: 'paige-bailey.avif' },
        { name: 'Robert Lee', logo: 'google.avif', image: 'paige-bailey.avif' },
        { name: 'Emma Davis', logo: 'google.avif', image: 'paige-bailey.avif' }
      ],
      videoThumbnail: 'thumb-ai-for-enterprise-teams.avif'
    },
    {
      title: 'Cloud Computing Trends 2025',
      speakers: [
        { name: 'Michael Brown', logo: 'google.avif', image: 'paige-bailey.avif' },
        { name: 'Sophia Carter', logo: 'google.avif', image: 'paige-bailey.avif' }
      ],
      videoThumbnail: 'thumb-ai-for-enterprise-teams.avif'
    },
    {
      title: 'Exploring AI Ethics',
      speakers: [
        { name: 'Lucas Green', logo: 'google.avif', image: 'paige-bailey.avif' },
        { name: 'Emily White', logo: 'google.avif', image: 'paige-bailey.avif' }
      ],
      videoThumbnail: 'thumb-ai-for-enterprise-teams.avif'
    }
  ];
  

  handleVideoClick($event: string) {
    alert('Video clicked');
  }

}
