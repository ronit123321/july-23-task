import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/card';
import { SearchBar } from '../../components/searchbar';
import {
  loadMovieDetails,
  loadMoviesList,
  updateMovieDetail,
  updateSearchCriteria,
} from '../../store/actions';
import { DetailsPage } from '../../components/details';
import './home.css';

function Home() {
  const dispatch = useDispatch();

  const [selectedMovie, setSelectedMovie] = React.useState<any | null>(null);

  const moviesList = useSelector((state: any) => state.moviesList);
  const searchCriteria = useSelector((state: any) => state.searchCriteria);
  const movieDetails = useSelector((state: any) => state.selectedMovieDetails);

  React.useEffect(() => {
    dispatch(loadMoviesList(searchCriteria));
  }, [dispatch, searchCriteria]);

  const displayContent = (): React.ReactChild => {
    if (moviesList.length) {
      return moviesList.map((movie: any) => (
        <Card
          movie={movie}
          key={movie.imdbID}
          cardClicked={(movie: any) => {
            dispatch(loadMovieDetails(movie.imdbID));
            setSelectedMovie(movie);
          }}
        />
      ));
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
        movie={movieDetails}
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
          dispatch(updateMovieDetail(null));
          dispatch(updateSearchCriteria(value));
        }}
      />
      {!selectedMovie && (
        <div className={moviesList.length ? 'grid-container' : ''}>{displayContent()}</div>
      )}
      {movieDetails && <div>{displayMovieDetails()}</div>}
    </div>
  );
}

export default Home;
