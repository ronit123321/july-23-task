import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import Home from '.';
import { Provider } from 'react-redux';
import {
  loadMovieDetails,
  loadMoviesList,
  resetMovieList,
  updateMovieDetail,
  updatePageNumber,
  updateSearchCriteria,
} from '../../store/actions';

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

describe('homepage', () => {
  const mockStore = configureMockStore();

  let store: any;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('default case no search param provided', () => {
    store = mockStore({
      moviesList: [],
      searchCriteria: '',
      selectedMovieDetails: null,
    });

    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(
      component.container.querySelector('#search-input')?.textContent
    ).toBe('');
    expect(component.container.querySelector('#invalid-search')).toBe(null);
    expect(component.container.querySelector('#no-search')).not.toBe(null);
    expect(component.container.querySelector('#no-search')?.textContent).toBe(
      'Enter Movie Title To Search'
    );
  });

  test('search param provided no results', () => {
    store = mockStore({
      moviesList: [],
      searchCriteria: 'test',
      selectedMovieDetails: null,
    });

    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(component.container.querySelector('#no-search')).toBe(null);
    expect(component.container.querySelector('#invalid-search')).not.toBe(null);
    expect(
      component.container.querySelector('#invalid-search')?.textContent
    ).toBe('No Results Found');
  });

  test('search param provided with results', () => {
    store = mockStore({
      moviesList,
      searchCriteria: 'esd',
      selectedMovieDetails: null,
    });

    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(component.container.querySelector('#no-search')).toBe(null);
    expect(component.container.querySelector('#invalid-search')).toBe(null);
    expect(component.container.querySelectorAll('.movie-card').length).toBe(3);
  });

  test('display details on defined conditions', () => {
    store = mockStore({
      moviesList,
      searchCriteria: 'esd',
      selectedMovieDetails: moviesList[2],
    });

    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(component.container.querySelector('#no-search')).toBe(null);
    expect(component.container.querySelector('#invalid-search')).toBe(null);
    expect(component.container.querySelector('#movie-info-view')).not.toBe(
      null
    );
  });

  test('should dispatch fetch movie list and replace state with new data', () => {
    store = mockStore({
      moviesList: [],
      searchCriteria: '',
      selectedMovieDetails: null,
      pageNumber: 1,
      totalResults: 0,
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(store.getActions()[0]).toStrictEqual(loadMoviesList('', 1, false));
  });

  test('should dispatch fetch movie list and append state with new data', () => {
    store = mockStore({
      moviesList: [],
      searchCriteria: '',
      selectedMovieDetails: null,
      pageNumber: 2,
      totalResults: 0,
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(store.getActions()[0]).toStrictEqual(loadMoviesList('', 2, true));
  });

  test('should dispatch update search event', () => {
    store = mockStore({
      moviesList: [],
      searchCriteria: '',
      selectedMovieDetails: null,
      pageNumber: 1
    });

    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const inputEl = component.container.querySelector(
      '#search-input'
    ) as HTMLInputElement;
    const buttonEl = component.container.querySelector(
      '#search-button'
    ) as HTMLButtonElement;

    fireEvent.change(inputEl, { target: { value: 'test' } });

    fireEvent.click(buttonEl);

    expect(store.getActions()[0]).toStrictEqual(loadMoviesList('', 1, false));
    expect(store.getActions()[1]).toStrictEqual(resetMovieList());
    expect(store.getActions()[2]).toStrictEqual(updateSearchCriteria('test'));
  });

  test('should not dispatch search event on same params', () => {
    store = mockStore({
      moviesList: [],
      searchCriteria: 'test',
      selectedMovieDetails: null,
      pageNumber: 1
    });

    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const inputEl = component.container.querySelector(
      '#search-input'
    ) as HTMLInputElement;
    const buttonEl = component.container.querySelector(
      '#search-button'
    ) as HTMLButtonElement;

    fireEvent.change(inputEl, { target: { value: 'test' } });

    fireEvent.click(buttonEl);
    expect(store.getActions().length).toBe(1);
    expect(store.getActions()[0]).toStrictEqual(loadMoviesList('test', 1, false));
  });

  test('should dispatch movie selected event', () => {
    store = mockStore({
      moviesList,
      searchCriteria: 'esd',
      selectedMovieDetails: null,
      pageNumber: 1
    });

    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const cardEl = component.container.querySelector(
      '#card-title-link-tt0092942'
    ) as HTMLDivElement;

    fireEvent.click(cardEl);

    expect(store.getActions()[0]).toStrictEqual(loadMoviesList('esd', 1, false));

    expect(store.getActions()[1]).toStrictEqual(loadMovieDetails('tt0092942'));
  });

  test('should emit load more results on hasMore condition', () => {
    store = mockStore({
      moviesList,
      searchCriteria: 'test',
      selectedMovieDetails: null,
      pageNumber: 1,
      totalResults: 100,
    });

    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const scrollEl = component.container.querySelector(
      '#scrollableDiv'
    ) as HTMLDivElement;
    fireEvent.scroll(scrollEl, { target: { scrollY: 100 } });

    expect(store.getActions()[0]).toStrictEqual(loadMoviesList('test', 1, false));

    expect(store.getActions()[1]).toStrictEqual(updatePageNumber(2));
  });

  test('on movie details close request', () => {
    store = mockStore({
      moviesList,
      searchCriteria: 'test',
      selectedMovieDetails: moviesList[2],
      pageNumber: 1,
      totalResults: 100,
    });

    const component = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const closeBtn = component.container.querySelector(
      `#movie-detail-poster-${moviesList[2].imdbID}`
    ) as HTMLImageElement;

    fireEvent.click(closeBtn);

    expect(store.getActions()[0]).toStrictEqual(loadMoviesList('test', 1, false));

    expect(store.getActions()[1]).toStrictEqual(updateMovieDetail(null));
  });
});
