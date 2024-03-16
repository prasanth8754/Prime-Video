import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img className="carousel-img" src={thumbnailUrl} alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="content-cont">
            <button
              data-testid="closeButton"
              className="close-btn"
              type="button"
              onClick={() => close()}
            >
              {1 === '1' && ''}
              <IoMdClose className="close-icon" />
            </button>
            <div className="video-container">
              <div className="responsive-container">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
