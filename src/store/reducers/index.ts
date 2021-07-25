import { AppState } from '../../models/state';
import { APP_CONSTANTS } from '../constants';

const initialState: AppState = {
  moviesList: [],
  searchCriteria: '',
  selectedMovieDetails: null,
  pageNumber: 1,
  totalResults: 0,
};

const resetMoviesList = (state: AppState): AppState => {
  return {
    ...state,
    moviesList: [],
    selectedMovieDetails: null,
    pageNumber: 1,
    totalResults: 0,
    searchCriteria: '',
  };
};

const refreshMoviesList = (state: AppState, action: any): AppState => {
  return {
    ...state,
    moviesList: action.payload,
  };
};

const addPagedMovieListData = (state: AppState, action: any): AppState => {
  const appendedList = state.moviesList.concat(action.payload);
  return {
    ...state,
    moviesList: appendedList,
  };
};

const updateSearchCriteria = (state: AppState, action: any): AppState => {
  return {
    ...state,
    searchCriteria: action.payload,
  };
};

const updateMovieDetails = (state: AppState, action: any): AppState => {
  return {
    ...state,
    selectedMovieDetails: action.payload,
  };
};

const updateTotalResult = (state: AppState, action: any): AppState => {
  return {
    ...state,
    totalResults: action.payload,
  };
};

const updatePageNumber = (state: AppState, action: any): AppState => {
  return {
    ...state,
    pageNumber: action.payload,
  };
};

export default function movieApp(state: AppState = initialState, action: any) {
  switch (action.type) {
    case APP_CONSTANTS.UPDATE_MOVIES_LIST:
      return refreshMoviesList(state, action);
    case APP_CONSTANTS.UPDATE_MOVIES_LIST_PAGINATED:
      return addPagedMovieListData(state, action);
    case APP_CONSTANTS.UPDATE_SEARCH_CRITERIA:
      return updateSearchCriteria(state, action);
    case APP_CONSTANTS.UPDATE_MOVIE_DETAILS:
      return updateMovieDetails(state, action);
    case APP_CONSTANTS.UPDATE_TOTAL_MOVIES:
      return updateTotalResult(state, action);
    case APP_CONSTANTS.UPDATE_PAGE_NUMBER:
      return updatePageNumber(state, action);
    case APP_CONSTANTS.RESET_MOVIE_LIST:
      return resetMoviesList(state);
    default:
      return state;
  }
}
