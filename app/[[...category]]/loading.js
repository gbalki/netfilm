import { CategoriesLoading } from "@/components/categories/loading"
import FeatureMovieLoading from "@/components/futured-movie/loading"
import MoviesSectionLoading from "@/components/movies-section/loading"

function Loading() {
  return (
    <div>
        <FeatureMovieLoading/>
        <CategoriesLoading/>
        <MoviesSectionLoading/>
        <MoviesSectionLoading/>
        <MoviesSectionLoading/>
    </div>
  )
}

export default Loading