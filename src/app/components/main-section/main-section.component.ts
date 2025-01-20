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
      title: 'AI for enterprise teams',
      speakers: [
        { name: 'Paige Bailey', logo: 'google.avif', image: 'paige-bailey.avif' },
        { name: 'Paige Bailey', logo: 'google.avif', image: 'paige-bailey.avif' }
      ],
      videoThumbnail: 'thumb-ai-for-enterprise-teams.avif'
    },
    {
      title: 'Betting on the web: Ensuring fine-tuned performance',
      speakers: [
        { name: 'Paige Bailey', logo: 'google.avif', image: 'paige-bailey.avif' },
        { name: 'Paige Bailey', logo: 'google.avif', image: 'paige-bailey.avif' },
        { name: 'Paige Bailey', logo: 'google.avif', image: 'paige-bailey.avif' }
      ],
      videoThumbnail: 'thumb-ai-for-enterprise-teams.avif'
    },
    {
      title: 'Maintaining performance across dynamic commerce sites',
      speakers: [
        { name: 'John Doe', logo: 'amazon.avif', image: 'john-doe.avif' },
        { name: 'Jane Smith', logo: 'amazon.avif', image: 'jane-smith.avif' }
      ],
      videoThumbnail: 'thumb-commerce-performance.avif'
    },
    {
      title: 'Architecting for scale: Building resilient systems',
      speakers: [
        { name: 'Alice Johnson', logo: 'microsoft.avif', image: 'alice-johnson.avif' },
        { name: 'Bob Brown', logo: 'microsoft.avif', image: 'bob-brown.avif' }
      ],
      videoThumbnail: 'thumb-resilient-systems.avif'
    },
    {
      title: 'The future of AI: Opportunities and risks',
      speakers: [
        { name: 'Eve Adams', logo: 'openai.avif', image: 'eve-adams.avif' },
        { name: 'Charlie Taylor', logo: 'openai.avif', image: 'charlie-taylor.avif' },
        { name: 'Dana Lee', logo: 'openai.avif', image: 'dana-lee.avif' }
      ],
      videoThumbnail: 'thumb-future-ai.avif'
    },
    {
      title: 'Enhancing developer experience with modern tools',
      speakers: [
        { name: 'Sophia White', logo: 'vercel.avif', image: 'sophia-white.avif' },
        { name: 'Liam Gray', logo: 'vercel.avif', image: 'liam-gray.avif' }
      ],
      videoThumbnail: 'thumb-developer-tools.avif'
    },
    {
      title: 'Optimizing frontend performance for global audiences',
      speakers: [
        { name: 'Emma Davis', logo: 'google.avif', image: 'emma-davis.avif' },
        { name: 'Noah Wilson', logo: 'google.avif', image: 'noah-wilson.avif' },
        { name: 'Olivia Martinez', logo: 'google.avif', image: 'olivia-martinez.avif' }
      ],
      videoThumbnail: 'thumb-frontend-performance.avif'
    }
  ];
  

  handleVideoClick($event: string) {
    alert('Video clicked');
  }

}
