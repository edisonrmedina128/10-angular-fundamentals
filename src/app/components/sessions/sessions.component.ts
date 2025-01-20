import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sessions',
  imports: [],
  standalone: true,
  templateUrl: './sessions.component.html',
  styleUrl: './sessions.component.scss'
})
export class SessionsComponent implements OnInit{
  ngOnInit(): void {
    console.log(this.sessions);
  }

  

  @Input() sessions: {
    title: string;
    speakers: { name: string; logo: string; image: string }[];
    videoThumbnail: string;
  }[]=[];

  @Output() videoClick = new EventEmitter<string>();

  onVideoClick(title: string): void {
    this.videoClick.emit(title);
  }


}
