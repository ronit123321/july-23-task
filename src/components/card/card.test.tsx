import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '.';

const moviesList = [
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjI4NTMwMDUtNDk4Mi00ZGJjLWI3NGYtNWRiNTUyYjdkNjVhXkEyXkFqcGdeQXVyNjIxMzk1NA@@._V1_SX300.jpg',
    Title: 'ESD',
    Type: 'movie',
    Year: '1987',
    imdbID: 'tt0092941',
  },
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjI4NTMwMDUtNDk4Mi00ZGJjLWI3NGYtNWRiNTUyYjdkNjVhXkEyXkFqcGdeQXVyNjIxMzk1NA@@._V1_SX300.jpg',
    Title: 'ESD',
    Type: 'movie',
    Year: '1987',
    imdbID: 'tt0092942',
  },
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjI4NTMwMDUtNDk4Mi00ZGJjLWI3NGYtNWRiNTUyYjdkNjVhXkEyXkFqcGdeQXVyNjIxMzk1NA@@._V1_SX300.jpg',
    Title: 'ESD',
    Type: 'movie',
    Year: '1987',
    imdbID: 'tt0092943',
  },
];

describe('card component', () => {
  const cardClickedMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('display movie info', () => {
    const component = render(
      <Card movie={moviesList[1]} cardClicked={cardClickedMock} />
    );

    expect(component.container.getElementsByTagName('img')[0].src).toBe(
      moviesList[1].Poster
    );

    expect(
      component.container.querySelector(
        `#card-title-link-${moviesList[1].imdbID}`
      )?.textContent
    ).toBe(`${moviesList[1].Title} (${moviesList[1].Year})`);
  });

  test('emit event on movie click', () => {
    const component = render(
      <Card movie={moviesList[1]} cardClicked={cardClickedMock} />
    );

    const linkEl = component.container.querySelector(
      `#card-title-link-${moviesList[1].imdbID}`
    ) as HTMLElement;

    const posterEl = component.container.querySelector(
      `#card-poster-link-${moviesList[1].imdbID}`
    ) as HTMLElement;

    fireEvent.click(linkEl);

    expect(cardClickedMock).toHaveBeenCalledWith(moviesList[1])

    fireEvent.click(posterEl);

    expect(cardClickedMock).toHaveBeenCalledWith(moviesList[1])

  });
});
