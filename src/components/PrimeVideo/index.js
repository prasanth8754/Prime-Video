import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachItem => eachItem.categoryId === 'COMEDY',
  )

  return (
    <div className="bg-cont">
      <img
        className="website-banner"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="total-carousel-cont">
        <div className="carousel-cont">
          <h1 className="category-heading">Action Movies</h1>
          <MoviesSlider moviesList={actionMoviesList} />
        </div>

        <div className="carousel-cont">
          <h1 className="category-heading">Comedy Movies</h1>
          <MoviesSlider moviesList={comedyMoviesList} />
        </div>
      </div>
    </div>
  )
}

export default PrimeVideo
