import { Movie, Genre, Popular } from '../../commons/types';

export interface MoviesState {
  movies: Movie[];
  genres: Genre[];
  popular: Popular[];
  page: number | null;
  totalPages: number | null;
  totalResults: number | null;
  loading: boolean;
  didSearch: boolean;
  error: Error | null;
}

export const GET_MOVIES_REQUEST = 'GET_MOVIES_REQUEST';
export const GET_MOVIES_LOADING = 'GET_MOVIES_LOADING';
export const GET_MOVIES_SUCCESS = 'GET_MOVIES_SUCCESS';
export const GET_MOVIES_FAILURE = 'GET_MOVIES_FAILURE';

export interface GetMoviesRequest {
  type: typeof GET_MOVIES_REQUEST;
  payload: string;
}

export interface GetMoviesLoading {
  type: typeof GET_MOVIES_LOADING;
}

export interface GetMoviesSuccess {
  type: typeof GET_MOVIES_SUCCESS;
  payload: {
    movies: Movie[];
    page: number | null;
    totalPages: number | null;
    totalResults: number | null;
  };
}

export interface GetMoviesFailure {
  type: typeof GET_MOVIES_FAILURE;
  payload: Error;
}

export const GET_MOVIES_POPULAR_REQUEST = 'GET_MOVIES_POPULAR_REQUEST';
export const GET_MOVIES_POPULAR_LOADING = 'GET_MOVIES_POPULAR_LOADING';
export const GET_MOVIES_POPULAR_SUCCESS = 'GET_MOVIES_POPULAR_SUCCESS';
export const GET_MOVIES_POPULAR_FAILURE = 'GET_MOVIES_POPULAR_FAILURE';

export interface GetMoviesPopularRequest {
  type: typeof GET_MOVIES_POPULAR_REQUEST;
}

export interface GetMoviesPopularLoading {
  type: typeof GET_MOVIES_POPULAR_LOADING;
}

export interface GetMoviesPopularSuccess {
  type: typeof GET_MOVIES_POPULAR_SUCCESS;
  payload: {
    popular: Popular[];
    page: number | null;
    totalPages: number | null;
    totalResults: number | null;
  };
}

export interface GetMoviesPopularFailure {
  type: typeof GET_MOVIES_POPULAR_FAILURE;
  payload: Error;
}

export const GET_MOVIES_GENRES_REQUEST = 'GET_MOVIES_GENRES_REQUEST';
export const GET_MOVIES_GENRES_SUCCESS = 'GET_MOVIES_GENRES_SUCCESS';
export const GET_MOVIES_GENRES_FAILURE = 'GET_MOVIES_GENRES_FAILURE';

export interface GetMoviesGenresRequest {
  type: typeof GET_MOVIES_GENRES_REQUEST;
}

export interface GetMoviesGenresSuccess {
  type: typeof GET_MOVIES_GENRES_SUCCESS;
  payload: Genre[];
}

export interface GetMoviesGenresFailure {
  type: typeof GET_MOVIES_GENRES_FAILURE;
  payload: Error;
}

export type MoviesActionTypes =
  | GetMoviesRequest
  | GetMoviesLoading
  | GetMoviesSuccess
  | GetMoviesFailure
  | GetMoviesPopularRequest
  | GetMoviesPopularLoading
  | GetMoviesPopularSuccess
  | GetMoviesPopularFailure
  | GetMoviesGenresRequest
  | GetMoviesGenresSuccess
  | GetMoviesGenresFailure;
