import { Component } from '@angular/core';
import { MediaCardComponent } from '../media-card/media-card.component';

@Component({
  selector: 'app-home',
  imports: [MediaCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  books = [
    {
      title: 'The Great Gatsby',
      date: new Date('2021-03-15'),
      rating: 4,
    },
    {
      title: 'To Kill a Mockingbird',
      date: new Date('2023-07-22'),
      rating: 5,
    },
    {
      title: '1984',
      date: new Date('2020-11-08'),
      rating: 5,
    },
    {
      title: 'Pride and Prejudice',
      date: new Date('2022-01-30'),
      rating: 4,
    },
    {
      title: 'The Catcher in the Rye',
      date: new Date('2024-05-12'),
      rating: 3,
    },
  ];
}
