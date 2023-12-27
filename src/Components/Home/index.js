import './index.css'
import {Link} from 'react-router-dom'
import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div className="home-main-container">
      <h1 className="job-heading">Find The Jobs That Fits Your Life</h1>
      <p className="para">
        Millions of peoples are searching for jobs, salary, information ,
        company reviews find the job that fits your abilities and potential{' '}
      </p>
      <Link to="/jobs">
        <button className="find-btn">Find Jobs</button>
      </Link>
    </div>
  </>
)

export default Home
