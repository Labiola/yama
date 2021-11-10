export type Colors =
  | 'primary'
  | 'info'
  | 'link'
  | 'success'
  | 'warning'
  | 'danger';

export const colorsMap = {
  primary: 'hsl(171, 100%, 41%)',
  info: 'hsl(204, 86%,  53%)',
  link: 'hsl(217, 71%,  53%)',
  success: 'hsl(141, 71%,  48%)',
  warning: 'hsl(48,  100%, 67%)',
  danger: 'hsl(348, 100%, 61%)',
};

export type Sizes = 'small' | 'normal' | 'medium' | 'large';

export type TextSizes = 1 | 2 | 3 | 4 | 5 | 6;

export type Levels = 1 | 2 | 3 | 4 | 5 | 6;

export type Alignments = 'center' | 'justify' | 'left' | 'right';

export type IconType = 'chevron';

export const alignmentsMap = {
  center: 'has-text-centered',
  justify: 'has-text-justified',
  left: 'has-text-left',
  right: 'has-text-right',
};

export interface Movie {
  posterPath: string | null;
  adult: boolean;
  backdropPath: string | null;
  genreIds: number[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface Popular {
  posterPath: string | null;
  backdropPath: string | null;
  genreIds: number[];
  id: number;
  adult:boolean;
  mediaType: string;
  originalTitle: string;
  originalLanguage: string;
  originalName: string;
  overview: string;
  title: string;
  popularity: number;
  firstAirDate: string;
  releaseDate: string;
  name: string;
  video: boolean;
  voteAverage: number;
  voteCount: number;
}
