import {Component} from 'react'
import Cookies from 'js-cookie'
import ProfileDetails from '../ProfileDetails'
import Header from '../Header'
import './index.css'

class JobSection extends Component {
  state = {profileinf: []}

  componentDidMount() {
    this.getProfileData()
  }

  getProfileData = async () => {
    const apiUrl = 'https://apis.ccbp.in/profile'
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const UpdatedProfile = data.profile_details.map(each => ({
        name: each.name,
        profileimage: each.profile_image_url,
        short: each.short_bio,
      }))
      console.log(response)
      this.setState({profileinf: UpdatedProfile})
    }
  }

  render() {
    return (
      <>
        <Header />
        <div className="job-section-container">
          <div className="small-container">
            <div className="rightsidediv">
              <div>
                <ProfileDetails />
              </div>
            </div>
            <div className="leftsidediv">
              <h1>hii</h1>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default JobSection
