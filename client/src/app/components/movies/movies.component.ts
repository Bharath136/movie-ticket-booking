import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Movie {
  title: string;
  genre: string;
  duration: number;
  releaseDate: Date;
  director: string;
  cast: string[];
  language: string;
  rating: number;
  ticketPrice: number;
  seatsAvailable: number;
}

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  movies: any[] = []
  isLoading = false

  filteredMovies : any[] = [];
  searchTerm: string = '';

  constructor(private http:HttpClient){
    this.isLoading = true
    this.http.get<any[]>('http://localhost:5100/movies').subscribe((res) => {
      this.filteredMovies = res;
      this.movies = res
      this.isLoading = false
    })
  }

  filterMovies(): void {
    this.filteredMovies = this.movies.filter(movie => {
      return movie.title.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }

}

