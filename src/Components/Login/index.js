import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import {Redirect} from 'react-router-dom'

class LoginPage extends Component {
  state = {
    UsernameSearch: '',
    Userpassword: '',
    showErrorMsg: false,
    errMsg: '',
  }

  Username = event => {
    this.setState({UsernameSearch: event.target.value})
  }

  Password = event => {
    this.setState({Userpassword: event.target.value})
  }

  OnSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  OnFailure = err => {
    console.log('Entering OnFailure')
    this.setState({showErrorMsg: true, errMsg: err})
  }

  SubmitForm = async event => {
    event.preventDefault()
    const {UsernameSearch, Userpassword} = this.state
    const UserDetail = {username: UsernameSearch, password: Userpassword}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(UserDetail),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.OnSubmitSuccess(data.jwt_token)
    } else {
      this.OnFailure(data.error_msg)
    }
  }

  render() {
    const {UsernameSearch, Userpassword, errMsg, showErrorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="main-container">
        <div className="small-container">
          <div className="img-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
              className="images"
            />
          </div>
          <form className="form-container" onSubmit={this.SubmitForm}>
            <div className="label-from">
              <label className="label-text" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="input"
                placeholder="Username"
                onChange={this.Username}
                value={UsernameSearch}
              />
            </div>
            <div className="label-from">
              <label className="label-text" htmlFor="password">
                Password
              </label>
              <input
                type="text"
                className="input"
                placeholder="password"
                id="password"
                onChange={this.Password}
                value={Userpassword}
              />
            </div>
            <button type="submit" className="loginbut">
              Login
            </button>
            {showErrorMsg && <p className="err">{errMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
