import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sessions',
  imports: [],
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss'
})
export class SessionsComponent {

  @Input() sessions: {
    title: string;
    speakers: { name: string; logo: string; image: string }[];
    videoThumbnail: string;
  }[] = [];

  @Output() videoClick = new EventEmitter<string>(); // Emitir evento al hacer clic en un video

  // Track By para optimizar la renderización de la tabla
  

  trackBySpeakerName(index: number, speaker: any): string {
    return speaker.name;
  }

  // Manejar clic en el video
  onVideoClick(title: string): void {
    this.videoClick.emit(title);
  }
  
}
