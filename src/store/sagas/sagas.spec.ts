import React from 'react';
import { put } from 'redux-saga/effects';
import { fetchMovieDetailsById, fetchMovieList } from '.';
import {
  loadMovieDetails,
  loadMoviesList,
  updateMovieDetail,
  updateMoviesList,
  updateMoviesListPaginated,
  updateTotalResult,
} from '../actions';

jest.mock('./utils', () => ({
  extractJSON: () => [],
}));

describe('rootSaga', () => {
  let gen: any;
  let response: any;
  let responseNan: any = NaN;

  afterEach(() => {
    expect(gen.next().done).toBeTruthy();
  });

  describe('fetchMovieList', () => {
    test('success with refresh', () => {
      gen = fetchMovieList(loadMoviesList('test', 1, false));
      expect(gen.next().value.payload.args[0]).toEqual(
        'https://www.omdbapi.com/?apikey=b9bd48a6&s=test&type=movie&page=1'
      );
      expect(gen.next().value).toEqual([]);
      expect(gen.next().value).toEqual(put(updateMoviesList(response)));
      expect(gen.next().value).toEqual(put(updateTotalResult(responseNan)));
    });

    test('success with append result', () => {
      gen = fetchMovieList(loadMoviesList('test', 1, true));
      expect(gen.next().value.payload.args[0]).toEqual(
        'https://www.omdbapi.com/?apikey=b9bd48a6&s=test&type=movie&page=1'
      );
      expect(gen.next().value).toEqual([]);
      expect(gen.next().value).toEqual(
        put(updateMoviesListPaginated(response))
      );
    });

    test('failure', () => {
      gen = fetchMovieList(loadMoviesList('test', 1, false));
      expect(gen.next().value.payload.args[0]).toEqual(
        'https://www.omdbapi.com/?apikey=b9bd48a6&s=test&type=movie&page=1'
      );
      expect(gen.throw(Error).value).toEqual(put(updateMoviesList([])));
      expect(gen.next().value).toEqual(put(updateTotalResult(0)));
    });
  });

  describe('fetchMovieDetailsById', () => {
    test('success with refresh', () => {
      gen = fetchMovieDetailsById(loadMovieDetails('23e4232'));
      expect(gen.next().value.payload.args[0]).toEqual(
        'https://www.omdbapi.com/?apikey=b9bd48a6&i=23e4232'
      );

      expect(gen.next().value).toEqual([]);
      expect(gen.next().value).toEqual(put(updateMovieDetail(response)));
    });
  });
});
