import BlogList from '../BlogList'
import './index.css'

const Home = () => (
  <div className="home-container">
    <img
      className="profile-image"
      src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
      alt="profile pic"
    />
    <h1 className="profile-heading">Wade Warren</h1>
    <p className="profile-description">Software developer at UK</p>

    <div className="home-card-container">
      <BlogList />
    </div>
  </div>
)

export default Home
