import Movies from '@/mocks/movies.json';
import Genres from '@/mocks/genres.json';
import FeaturedMovie from '@/components/futured-movie';
import Categories from '@/components/categories';
import MoviesSection from '@/components/movies-section';

function index() {
    return (
        <div>
            <FeaturedMovie movie={Movies.results[0]} />
            <Categories categories={Genres.genres.slice(0,5)}/>
            <MoviesSection title='POPULAR Films' movies={Movies.results.slice(1,7)}/>
            <MoviesSection title='YOUR Favorites' movies={Movies.results.slice(7,13)}/>
        </div>
    )
}

export default index