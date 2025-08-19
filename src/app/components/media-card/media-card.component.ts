import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-media-card',
  imports: [],
  templateUrl: './media-card.component.html',
  styleUrl: './media-card.component.scss',
})
export class MediaCardComponent {
  @Input('title') title: string = '';
  @Input('rating') rating: number = 0;
  @Input('date') date: Date = new Date();
}
