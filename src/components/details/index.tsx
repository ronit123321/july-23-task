import React from 'react';
import { MovieDetail } from '../../models/movie';
import {
  ContentWrapper,
  DetailsWrapper,
  ImageWrapper,
  InfoContent,
  InfoWrapper,
  SidebarWrapper,
  BackIcon,
  BackIconImg
} from '../styled-components/details-styled';
import backIcon from '../../assets/close.png'

type DetailsPageType = {
  movie: MovieDetail;
  closeDetails:() => void
};

export const DetailsPage: React.FC<DetailsPageType> = ({ movie, closeDetails }) => {
  return (
    <div id="movie-info-view">
      <div>
        <ImageWrapper src={movie.Poster} alt="" />
        <BackIcon>
          <BackIconImg id={`movie-detail-poster-${movie.imdbID}`} src={backIcon} alt="" onClick={() => closeDetails()}/>
        </BackIcon>
      </div>

      <DetailsWrapper>
        <SidebarWrapper>
          <h3 id={`movie-title-${movie.imdbID}`}>
            {movie.Title} ({movie.Year})
          </h3>
          <InfoWrapper>
            Director: <InfoContent>{movie.Director}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Actors: <InfoContent>{movie.Actors}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Writer: <InfoContent>{movie.Writer}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Language: <InfoContent>{movie.Language}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Country: <InfoContent>{movie.Country}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Genre: <InfoContent>{movie.Genre}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Rated: <InfoContent>{movie.Rated}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Released: <InfoContent>{movie.Released}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Runtime: <InfoContent>{movie.Runtime}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Ratings: <InfoContent>{movie.imdbRating}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            BoxOffice: <InfoContent>{movie.BoxOffice}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Production: <InfoContent>{movie.Production}</InfoContent>
          </InfoWrapper>
          <InfoWrapper>
            Website: <InfoContent>{movie.Website}</InfoContent>
          </InfoWrapper>
        </SidebarWrapper>

        <ContentWrapper>
          <p>{movie.Plot}</p>
        </ContentWrapper>
      </DetailsWrapper>
    </div>
  );
};
