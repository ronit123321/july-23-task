import React from 'react';
import movieApp from '.';
import { AppState } from '../../models/state';
import { APP_CONSTANTS } from '../constants';

const moviesListA = [
  {
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjI4NTMwMDUtNDk4Mi00ZGJjLWI3NGYtNWRiNTUyYjdkNjVhXkEyXkFqcGdeQXVyNjIxMzk1NA@@._V1_SX300.jpg',
    Title: 'ESD',
    Type: 'movie',
    Year: '1987',
    imdbID: 'tt0092941',
  },
];

const moviesListB = [
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

describe('movieApp', () => {
  let initialStore: AppState;

  beforeEach(() => {
    initialStore = {
      moviesList: [],
      searchCriteria: '',
      selectedMovieDetails: null,
      pageNumber: 1,
      totalResults: 0,
    };
  });

  test('resetMoviesList', () => {
    initialStore.pageNumber = 2;
    initialStore.totalResults = 150;

    const newState = movieApp(initialStore, {
      type: APP_CONSTANTS.RESET_MOVIE_LIST,
    });

    expect(newState).toStrictEqual({
      moviesList: [],
      searchCriteria: '',
      selectedMovieDetails: null,
      pageNumber: 1,
      totalResults: 0,
    });
  });

  test('refreshMoviesList', () => {
    const newState = movieApp(initialStore, {
      type: APP_CONSTANTS.UPDATE_MOVIES_LIST,
      payload: moviesListA
    });

    expect(newState).toStrictEqual({
      moviesList: moviesListA,
      searchCriteria: '',
      selectedMovieDetails: null,
      pageNumber: 1,
      totalResults: 0,
    });
  });

  test('addPagedMovieListData', () => {
    initialStore.moviesList = moviesListA
    const newState = movieApp(initialStore, {
        type: APP_CONSTANTS.UPDATE_MOVIES_LIST_PAGINATED,
        payload: moviesListB
      });
  
      expect(newState).toStrictEqual({
        moviesList: moviesListA.concat(moviesListB),
        searchCriteria: '',
        selectedMovieDetails: null,
        pageNumber: 1,
        totalResults: 0,
      });
  });

  test('updateSearchCriteria', () => {
    initialStore.moviesList = moviesListA
    const newState = movieApp(initialStore, {
        type: APP_CONSTANTS.UPDATE_SEARCH_CRITERIA,
        payload: 'test'
      });
  
      expect(newState).toStrictEqual({
        moviesList: moviesListA,
        searchCriteria: 'test',
        selectedMovieDetails: null,
        pageNumber: 1,
        totalResults: 0,
      });
  });

  test('updateMovieDetails', () => {
    initialStore.moviesList = moviesListB
    const newState = movieApp(initialStore, {
        type: APP_CONSTANTS.UPDATE_MOVIE_DETAILS,
        payload: moviesListB[0]
      });
  
      expect(newState).toStrictEqual({
        moviesList: moviesListB,
        searchCriteria: '',
        selectedMovieDetails: moviesListB[0],
        pageNumber: 1,
        totalResults: 0,
      });
  });

  test('updateTotalResult', () => {
    initialStore.totalResults = 10
    const newState = movieApp(initialStore, {
        type: APP_CONSTANTS.UPDATE_TOTAL_MOVIES,
        payload: 100
      });
  
      expect(newState).toStrictEqual({
        moviesList: [],
        searchCriteria: '',
        selectedMovieDetails: null,
        pageNumber: 1,
        totalResults: 100,
      });
  });

  test('updatePageNumber', () => {
    initialStore.pageNumber = 10
    const newState = movieApp(initialStore, {
        type: APP_CONSTANTS.UPDATE_PAGE_NUMBER,
        payload: 3
      });
  
      expect(newState).toStrictEqual({
        moviesList: [],
        searchCriteria: '',
        selectedMovieDetails: null,
        pageNumber: 3,
        totalResults: 0,
      });
  });
});
