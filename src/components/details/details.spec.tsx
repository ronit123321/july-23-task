import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { DetailsPage } from '.';

const movieInfo = {
  Title: 'ESD',
  Year: '1987',
  Rated: 'N/A',
  Released: '16 Mar 1987',
  Runtime: '98 min',
  Genre: 'Family',
  Director: 'Anna Sokolowska',
  Writer: 'Malgorzata Musierowicz, Anna Sokolowska',
  Actors:
    'Elzbieta Helman, Krzysztof Ibisz, Halina Labonarska, Janusz Michalowski',
  Plot: 'N/A',
  Language: 'Polish',
  Country: 'Poland',
  Awards: 'N/A',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BMjI4NTMwMDUtNDk4Mi00ZGJjLWI3NGYtNWRiNTUyYjdkNjVhXkEyXkFqcGdeQXVyNjIxMzk1NA@@._V1_SX300.jpg',
  Ratings: [{ Source: 'Internet Movie Database', Value: '4.5/10' }],
  Metascore: 'N/A',
  imdbRating: '4.5',
  imdbVotes: '10',
  imdbID: 'tt0092943',
  Type: 'movie',
  DVD: 'N/A',
  BoxOffice: 'N/A',
  Production: 'N/A',
  Website: 'N/A',
  Response: 'True',
};

describe('details component', () => {
  const closeDetailsMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('display movie complete info', () => {
    const component = render(
      <DetailsPage movie={movieInfo} closeDetails={closeDetailsMock} />
    );
    expect(
      component.container.querySelector(`#movie-title-${movieInfo.imdbID}`)
        ?.textContent
    ).toBe(`${movieInfo.Title} (${movieInfo.Year})`);
  });

  test('should emit close details view on click', () => {
    const component = render(
      <DetailsPage movie={movieInfo} closeDetails={closeDetailsMock} />
    );

    const backBtn = component.container.querySelector(
      `#movie-detail-poster-${movieInfo.imdbID}`
    ) as HTMLImageElement;

    fireEvent.click(backBtn);

    expect(closeDetailsMock).toHaveBeenCalled()

  })

});
