import { Movie, Genre, Popular } from '../commons/types';
import { MOVIE_DB_KEY, MOVIE_DB_PATH } from '../commons/constants';

function movieAdapter(rawMovie: any): Movie {
  return {
    adult: rawMovie.adult,
    backdropPath: rawMovie.backdrop_path,
    genreIds: rawMovie.genre_ids,
    id: rawMovie.id,
    originalLanguage: rawMovie.original_language,
    originalTitle: rawMovie.original_title,
    overview: rawMovie.overview,
    popularity: rawMovie.popularity,
    posterPath: rawMovie.poster_path,
    releaseDate: rawMovie.release_date,
    title: rawMovie.title,
    video: rawMovie.video,
    voteAverage: rawMovie.vote_average,
    voteCount: rawMovie.vote_count,
  };
}

export interface MoviesByNameResponse {
  movies: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

function moviePopularAdapter(rawMovie: any): Popular {
  return {
    adult: rawMovie.adult,
    backdropPath: rawMovie.backdrop_path,
    genreIds: rawMovie.genre_ids,
    id: rawMovie.id,
    originalLanguage: rawMovie.original_language,
    originalTitle: rawMovie.original_title,
    overview: rawMovie.overview,
    popularity: rawMovie.popularity,
    posterPath: rawMovie.poster_path,
    releaseDate: rawMovie.release_date,
    title: rawMovie.title,
    video: rawMovie.video,
    voteAverage: rawMovie.vote_average,
    voteCount: rawMovie.vote_count,
    originalName: rawMovie.original_name,
    mediaType: rawMovie.media_type,
    firstAirDate:rawMovie.first_air_date,
    name:rawMovie.name,
  };
}

export interface MoviesPopularResponse {
  popular: Popular[];
  page: number;
  totalPages: number;
  totalResults: number;
}

export type MoviesGenresResponse = Genre[];

export default {
  searchByName: async (name: string): Promise<MoviesByNameResponse> => {
    try {
      const url = `${MOVIE_DB_PATH}/3/search/movie?api_key=${MOVIE_DB_KEY}&query=${name}`;
      const res = await fetch(url);
      const body = await res.json();

      // this is a pretty simplified way handle failed requests
      // - we should expose a custom error to our users
      // - we should handle 204 and check if res.json() crashes
      if (!res.ok) throw new Error(body.errors.join(','));

      return {
        movies: body.results.map(movieAdapter),
        page: body.page,
        totalPages: body.total_pages,
        totalResults: body.total_results,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getGenres: async (): Promise<MoviesGenresResponse> => {
    try {
      const url = `${MOVIE_DB_PATH}/3/genre/movie/list?api_key=${MOVIE_DB_KEY}`;
      const res = await fetch(url);
      const body = await res.json();

      if (!res.ok) throw new Error(body.errors.join(','));

      return body.genres;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  getMoviePopular: async (): Promise<MoviesPopularResponse> => {
    try {
      const url = `${MOVIE_DB_PATH}/3/trending/movie/week?api_key=${MOVIE_DB_KEY}`;
      const res = await fetch(url);
      const body = await res.json();

      if (!res.ok) throw new Error(body.errors.join(','));

      return {
        popular: body.results.map(moviePopularAdapter),
        page: body.page,
        totalPages: body.total_pages,
        totalResults: body.total_results,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
