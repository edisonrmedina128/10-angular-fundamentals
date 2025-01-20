import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-wide-section',
  imports: [],
  standalone: true,
  templateUrl: './wide-section.component.html',
  styleUrl: './wide-section.component.scss'
})
export class WideSectionComponent {
  @Input() navLinksWideSession!: { text: string; url: string }[]; // Links del menú
}
