import React from 'react';
import { Popular } from '../../commons/types';
import MovieBoxCarousel from '../molecules/MovieBoxCarousel';
import styled from 'styled-components';
//metodo di richiamo per il css della lista dei film 
const Container = styled.div`
  margin-bottom:22px;
  display: flex;
  flex-wrap: wrap;
`;

interface MovieBoxCarouselProps {
  popular: Popular[];
}

function MovieBoxListCarousel(props: MovieBoxCarouselProps) {
  const { popular } = props;
  const popularAppoggio = [];

// filtraggio dei migliori 10 film 
  for (var i = 0; i < popular.length; i++) {
    if(i < 10){
      popularAppoggio.push(popular[i]);
    }
  }

  //viene ritornato la lista e inviato al component movieboxcarousel che gestisce la visualizzazione interna del box
  return (
    <Container>
      {popularAppoggio.map(m => (
        <MovieBoxCarousel key={m.id} popular={m} />
      ))}
    </Container>
  );
}

export default MovieBoxListCarousel;
