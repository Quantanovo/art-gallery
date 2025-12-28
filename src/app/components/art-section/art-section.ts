import { Component, Input } from '@angular/core';
import { ArtPiece } from '../../models/art.model';

@Component({
  selector: 'app-art-section',
  standalone: true,
  templateUrl: './art-section.html',
  styleUrl: './art-section.scss',
})
export class ArtSection {
  @Input() title: string = '';
  @Input() artPieces: ArtPiece[] = [];
}
