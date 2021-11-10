import React from 'react';
import { Movie, Genre } from '../../commons/types';
import MovieBox from '../molecules/MovieBox';
import Subtitle from '../atoms/Subtitle';

const movieBoxListContainerStyle = {
  marginTop: 20,
};

interface MovieBoxListProps {
  didSearch: boolean;
  movies: Movie[];
  genres: Genre[];
}
function MovieBoxList(props: MovieBoxListProps) {
  const { didSearch, movies, genres } = props;

  return (
    <div style={movieBoxListContainerStyle}>
      {movies.map(m => (
        <MovieBox key={m.id} movie={m} genres={genres} />
      ))}
      {didSearch && movies.length === 0 && (
        <Subtitle level={3}>
          There are no movies with this title{' '}
          <span role="img" aria-label="sad face">
            😔
          </span>
        </Subtitle>
      )}
    </div>
  );
}

export default MovieBoxList;
