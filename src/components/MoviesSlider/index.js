import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {moviesList} = props

  const settings = {
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {moviesList.map(eachItem => (
        <MovieItem movieDetails={eachItem} key={eachItem.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider
