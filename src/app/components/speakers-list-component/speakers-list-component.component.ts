import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speakers-list-component',
  imports: [],
  templateUrl: './speakers-list-component.component.html',
  styleUrl: './speakers-list-component.component.scss'
})
export class SpeakersListComponentComponent {
  @Input() speakers: string[] = [];
}
