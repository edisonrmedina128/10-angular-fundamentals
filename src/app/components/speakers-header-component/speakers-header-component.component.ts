import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speakers-header-component',
  imports: [],
  templateUrl: './speakers-header-component.component.html',
  styleUrl: './speakers-header-component.component.scss'
})
export class SpeakersHeaderComponentComponent {
  @Input() description!: string;
  @Input() count!: number;
}
