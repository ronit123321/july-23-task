import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card';
import { SearchBar } from '../../components/searchbar';
import {
  loadMovieDetails,
  loadMoviesList,
  resetMovieList,
  updateMovieDetail,
  updatePageNumber,
  updateSearchCriteria,
} from '../../store/actions';
import { DetailsPage } from '../../components/details';
import InfiniteScroll from 'react-infinite-scroll-component';
import './home.css';
import { AppState } from '../../models/state';
import { MovieQuickInfo } from '../../models/moviesQuery';
import { MovieDetail } from '../../models/movie';
import { ScrolableBody } from '../../components/styled-components/home-styled.components';

function Home() {
  const dispatch = useDispatch();

  const [selectedMovie, setSelectedMovie] = React.useState<any | null>(null);

  const moviesList = useSelector((state: AppState) => state.moviesList);
  const searchCriteria = useSelector((state: AppState) => state.searchCriteria);
  const movieDetails = useSelector(
    (state: AppState) => state.selectedMovieDetails
  );
  const pageNumber = useSelector((state: AppState) => state.pageNumber);
  const totalResults = useSelector((state: AppState) => state.totalResults);

  React.useEffect(() => {
    if (pageNumber === 1)
      dispatch(loadMoviesList(searchCriteria, pageNumber, false));
    else dispatch(loadMoviesList(searchCriteria, pageNumber, true));
  }, [searchCriteria, pageNumber]);

  const displayContent = (): React.ReactChild => {
    if (moviesList.length) {
      return (
        <ScrolableBody id="scrollableDiv">
          <InfiniteScroll
            dataLength={moviesList.length}
            next={() => {
              dispatch(updatePageNumber(pageNumber + 1));
            }}
            hasMore={moviesList.length < totalResults}
            inverse={false}
            loader={<h4>Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {moviesList.map((movie: any) => (
              <Card
                movie={movie}
                key={movie.imdbID}
                cardClicked={(movie: MovieQuickInfo) => {
                  dispatch(loadMovieDetails(movie.imdbID));
                  setSelectedMovie(movie);
                }}
              />
            ))}
          </InfiniteScroll>
        </ScrolableBody>
      );
    } else {
      if (searchCriteria === '') {
        return (
          <div className="empty-page" id="no-search">
            Enter Movie Title To Search
          </div>
        );
      } else {
        return (
          <div className="empty-page" id="invalid-search">
            No Results Found
          </div>
        );
      }
    }
  };

  const displayMovieDetails = (): React.ReactChild => {
    return (
      <DetailsPage
        movie={movieDetails as MovieDetail}
        closeDetails={() => {
          setSelectedMovie(null);
          dispatch(updateMovieDetail(null));
        }}
      />
    );
  };

  return (
    <div className="content-wrapper">
      <SearchBar
        onSearch={(value: string) => {
          setSelectedMovie(null);
          dispatch(resetMovieList())
          dispatch(updateSearchCriteria(value));
        }}
      />
      {!selectedMovie && (
        <div className={moviesList.length ? 'grid-container' : ''}>
          {displayContent()}
        </div>
      )}
      {movieDetails && <div>{displayMovieDetails()}</div>}
    </div>
  );
}

export default Home;
