// Write your JS code here
import './index.css'

const About = props => {
  // eslint-disable-next-line
  const {item} = props

  return (
    <div className="home1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/about-blog-img.png"
        alt="about"
        className="img2"
      />
      <h1 className="para">ABOUT</h1>
      <p className="para">I love to create Iam a front developer</p>
    </div>
  )
}
export default About
