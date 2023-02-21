import FeaturedMovie  from '@/components/futured-movie'

function MovieContainer({ movie }) {
    return (
        <FeaturedMovie movie={movie} isCompact={false} />
    )
}

export default MovieContainer;