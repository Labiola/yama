import React from 'react';
import styled from 'styled-components';
import { Popular } from '../../commons/types';
import { MOVIE_DB_IMAGE_PATH } from '../../commons/constants';
import BoxList from '../atoms/BoxList';
import Title from '../atoms/Title';
import Image from '../atoms/Image';

const InfoContainer = styled.div`
  margin-top: 20px;
  display: inline-block;

  @media (min-width: 800px) {
    display: flex;
  }
`;

const imageStyle = {
  borderRadius: 6,
};

const styleBox = {
  width: '20%',
};

const titleMovie = {
  marginTop: 10,
};

const ContainerImage = styled.div`
  float: left;
  padding-left:55px;

  @media (min-width: 800px) {
    float: none;
  }
`;

//ho creato una interfaccia che prende il valore che manda il padre del component
interface MovieBoxCarouselProps {
  popular: Popular;
}

//ho creato una funzione che viene chiamata ovunque serva che mostra i dati all'interno del box costruito
function MovieBoxCarousel(props: MovieBoxCarouselProps) {
  const { popular } = props;

  return (
    <BoxList style={styleBox}>
      <InfoContainer>
        <ContainerImage>
          <Image
            imageStyle={imageStyle}
            src={`${MOVIE_DB_IMAGE_PATH}w200${popular.posterPath}`}
          />
        </ContainerImage>
      </InfoContainer>
      <Title style={titleMovie} level={1} size={5} alignment="center">
        {popular.title} ({popular.releaseDate.slice(0, 4)})
      </Title>
    </BoxList>
  );
}

export default MovieBoxCarousel;
