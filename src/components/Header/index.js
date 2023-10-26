// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  // eslint-disable-next-line
  const {item} = props
  return (
    <div className="header1">
      <div>
        <img
          src=" https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          className="img1"
          alt="wave"
        />
      </div>
      <ul className="ul1">
        <li>
          <Link to="/" className="para1">
            HOME
          </Link>
        </li>
        <li>
          <Link to="/about" className="para1">
            ABOUT
          </Link>
        </li>
        <li>
          <Link to="/contact" className="para1">
            CONTACT
          </Link>
        </li>
      </ul>
    </div>
  )
}
export default Header
