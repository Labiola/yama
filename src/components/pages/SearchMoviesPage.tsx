import React from 'react';
import { useDispatch, useSelector } from '../../store';
import SearchLayout from '../layouts/SearchLayout';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';
import SearchBox from '../molecules/SearchBox';
import MovieBoxList from '../organisms/MovieBoxList';
import MovieBoxListCarousel from '../organisms/MovieBoxListCarousel';


function SearchMoviesPage() {
  const dispatch = useDispatch();
  const { movies, genres, error, loading, didSearch, popular } = useSelector(
    ({ moviesState }) => moviesState
  );

  React.useEffect(() => {
    dispatch({ type: 'GET_MOVIES_GENRES_REQUEST' });
  }, [dispatch]);

  React.useEffect(() => {
    dispatch({ type: 'GET_MOVIES_POPULAR_REQUEST' });
   }, [dispatch]);

  const moviesSearchBox = (
    <SearchBox
      placeholder="Search a movie"
      error={error}
      loading={loading}
      onSearch={v => dispatch({ type: 'GET_MOVIES_REQUEST', payload: v })}
    />
  );

  return (
    <SearchLayout
      header={<Header />}
      //inserito la lista deli 10 migliori film
      movieBoxCarousel={
        <MovieBoxListCarousel popular={popular}/>
      }
      searchBox={moviesSearchBox}
      showSeparator={movies.length > 0}
      list={
        <MovieBoxList didSearch={didSearch} movies={movies} genres={genres} />
      }
      footer={<Footer />}
    />
  );
}

export default SearchMoviesPage;
