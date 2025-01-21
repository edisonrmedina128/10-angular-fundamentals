import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-session',
  imports: [],
  standalone: true,
  templateUrl: './session.component.html',
  styleUrl: './session.component.scss'
})
export class SessionComponent {
  @Input() sessions: any[] = []; 
  @Output() videoClick = new EventEmitter<string>(); 

  topics:String[] = [
    'Introduction',
    'v0 & AI SDK',
    'Previews & Feature Flags', 
    'Compute & Next.js 15',
    'Security'
  ];
  

  trackBySessionTitle(index: number, session: any): string {
    return session.title;
  }

  trackBySpeakerName(index: number, speaker: any): string {
    return speaker.name;
  }

  onVideoClick(title: string): void {
    this.videoClick.emit(title);
  }
}
