// Write your JS code here
import './index.css'

const NotFound = props => {
  // eslint-disable-next-line
  const {item} = props

  return (
    <div className="home1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="home"
        className="img2"
      />
      <h1 className="para">Not Found</h1>
    </div>
  )
}
export default NotFound
