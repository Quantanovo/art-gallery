export interface ArtPiece {
  id: number;
  imageUrl: string;
  title: string;
}

export interface ArtCategory {
  categoryTitle: string; // e.g., "Oil Paintings", "Sketches"
  pieces: ArtPiece[];
}