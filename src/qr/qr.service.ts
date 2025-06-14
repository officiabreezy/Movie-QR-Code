import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { MovieService } from '../movie/movie.service';


 export interface Movie {
  Title: string;
  image: string;
}

@Injectable()
export class QrService {
  private readonly map = new Map<string, Movie[]>();

  constructor(private movieService: MovieService) {}

  generateNewLink(): string {
    const id = uuidv4();
    const movies = this.movieService.getRandomMovies();
    this.map.set(id, movies);

    // Remove after 60 seconds
    setTimeout(() => this.map.delete(id), 60000);
    return id;
  }

  getMoviesById(id: string): Movie[] | null {
    return this.map.get(id) || null;
  }
}
