import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadingSection } from './components/heading-section/heading-section';
import { ArtSection } from './components/art-section/art-section';
import { ArtCategory } from './models/art.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeadingSection, ArtSection],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  portfolio: ArtCategory[] = [
    {
      categoryTitle: 'Cityscapes',
      pieces: [
        { id: 1, title: 'The Ocean', imageUrl: 'assets/images/paintings/cityscape1.jpg' },
        { id: 2, title: 'Mountain Mist', imageUrl: 'assets/images/paintings/cityscape2.jpg' }
      ]
    },
    {
      categoryTitle: 'Landscapes',
      pieces: [
        { id: 3, title: 'Study 01', imageUrl: 'assets/images/paintings/cityscape3.jpg' }
      ]
    },
    {
      categoryTitle: 'People',
      pieces: [
        { id: 4, title: 'Study 01', imageUrl: 'assets/images/paintings/cityscape4.jpg' }
      ]
    }
  ];
}
