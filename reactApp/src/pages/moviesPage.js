import { useQuery } from 'react-query';
import { getMovies } from "../api/movies-api";

const MoviesPage = () => {
    const { data, error, isLoading, isError } = useQuery('discover', getMovies);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    const movies = data;
    const moviesDisplay = (
        <div>
            {movies.map(movie => (
                <li key={movie.id}>
                    {movie.id},{movie.title}<br />
                </li>
            ))}
        </div>
    );

    return (
        <div>
            <h2>Movies</h2>
            {moviesDisplay}
        </div>
    );
}

export default MoviesPage;