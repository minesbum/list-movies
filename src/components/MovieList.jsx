import { MovieCard } from "./MovieCard";
import { useFavourites } from "../hooks/useFavourites";

export const MovieList = (props) => {
  const { list } = props;
  const [favourites, addFavourite] = useFavourites();

  function handleFavouriteClick(movieName) {
    addFavourite(movieName)
  }


  return (
    <ul>
      {list.map((movie) => (
        <MovieCard
          key={movie.name}
          name={movie.name}
          onFavouriteClick={handleFavouriteClick}
          isFavourite={favourites.includes(movie.name)}
        />
      ))}
    </ul>
  );
};