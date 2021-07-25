import React from 'react';
import { MovieQuickInfo } from '../../models/moviesQuery';
import {
  CardContent,
  CardInfoLink,
  CardInfoWrapper,
  CardPoster,
  CardWrapper,
} from './card-styled';

type CardType = {
  movie: MovieQuickInfo;
  cardClicked: (movie: MovieQuickInfo) => void;
};

const Card: React.FC<CardType> = ({ movie, cardClicked }) => {
  return (
    <CardWrapper className="movie-card">
      <CardContent className="card-content white-text">
        <CardPoster
          id={`card-poster-link-${movie.imdbID}`}
          src={movie.Poster}
          alt=""
          onClick={() => cardClicked(movie)}
        />
      </CardContent>
      <CardInfoWrapper className="card-action">
        <CardInfoLink id={`card-title-link-${movie.imdbID}`} onClick={() => cardClicked(movie)}>
          {movie.Title} ({movie.Year})
        </CardInfoLink>
      </CardInfoWrapper>
    </CardWrapper>
  );
};

export default Card;
