import './index.css'

const Home = props => {
  // eslint-disable-next-line
  const {item} = props

  return (
    <div className="home1">
      <img
        src="https://assets.ccbp.in/frontend/react-js/home-blog-img.png"
        alt="home"
        className="img2"
      />
      <h1 className="para">HOME</h1>
    </div>
  )
}
export default Home
