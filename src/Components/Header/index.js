import './index.css'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const LogOutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <nav className="navbar">
      <div className="nav-item">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            className="logo-nav"
          />
        </div>
        <div className="heading">
          <Link to="/" className="link">
            <p className="home">Home</p>
          </Link>
          <Link to="/jobs" className="link">
            <p className="home"> Jobs</p>
          </Link>
        </div>
        <div className="button-container">
          <button type="button" className="logoutbtn" onClick={LogOutButton}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
