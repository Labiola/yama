import React from 'react';
import { useDispatch, useSelector } from './store';
import BaseLayout from './components/layouts/BaseLayout';
import SearchBox from './components/molecules/SearchBox';
import Header from './components/organisms/Header';
import Footer from './components/organisms/Footer';
import MovieBoxList from './components/organisms/MovieBoxList';
import Separator from './components/atoms/Separator';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { movies, error } = useSelector(({ moviesState }) => moviesState);
  console.log({ movies, error });

  return (
    <BaseLayout header={<Header />} footer={<Footer />}>
      <SearchBox
        placeholder="Type a title of a movie"
        error={error}
        onSearch={v => dispatch({ type: 'GET_MOVIES', payload: v })}
      />
      <Separator />
      <MovieBoxList movies={movies} />
    </BaseLayout>
  );
};

export default App;
