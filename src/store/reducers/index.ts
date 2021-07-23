import { APP_CONSTANTS } from '../constants';

const initialState = {
  moviesList: [],
  searchCriteria: '',
  selectedMovieDetails: null,
};

const updateMoviesList = (state: any, action: any) => {
  return {
    ...state,
    moviesList: action.payload,
  };
};

const updateSearchCriteria = (state: any, action: any) => {
  return {
    ...state,
    searchCriteria: action.payload,
  };
};

const updateMovieDetails = (state: any, action: any) => {
  return {
    ...state,
    selectedMovieDetails: action.payload,
  };
};

export default function toDoApp(state = initialState, action: any) {
  switch (action.type) {
    case APP_CONSTANTS.UPDATE_MOVIES_LIST:
      return updateMoviesList(state, action);
    case APP_CONSTANTS.UPDATE_SEARCH_CRITERIA:
      return updateSearchCriteria(state, action);
    case APP_CONSTANTS.UPDATE_MOVIE_DETAILS:
      return updateMovieDetails(state, action);
    default:
      return state;
  }
}
