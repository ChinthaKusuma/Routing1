// Write your JS code here
import './index.css'

const Contact = props => {
  // eslint-disable-next-line
  const {item} = props

  return (
    <div className="home1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/contact-blog-img.png"
        alt="contact"
        className="img2"
      />
      <h1 className="para">Contact</h1>
    </div>
  )
}
export default Contact
