// Thumbnail

import './index.css'

const Thumbnail = props => {
  const {each, checkBothImages} = props
  const {thumbnailUrl, id} = each

  const checkImages = () => {
    checkBothImages(id)
    // console.log('Thumbnail Component')
  }

  return (
    <li className="list-item">
      <button type="button" onClick={checkImages} className="thumbnail-btn">
        <img className="thumbnails" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnail
