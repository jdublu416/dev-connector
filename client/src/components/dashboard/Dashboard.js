import React, { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {getCurrentProfile} from '../../actions/profileActions';
import PropTypes from 'prop-types';

const Dashboard = ({ getCurrentProfile, auth, profile }) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return (
    <Fragment>
      <h1 className='large text-primary'>Dashboard</h1>
      <p className='lead'>
        <i className='fas fa-user' /> Welcome John Doe
      </p>
      <div className='dash-buttons'>
        <Link to='#!' className='btn btn-light'>
          <i className='fas fa-user-circle text-primary' /> Edit Profile
        </Link>
        <Link to='#!' className='btn btn-light'>
          <i className='fab fa-black-tie text-primary' /> Add Experience
        </Link>
        <Link to='#!' className='btn btn-light'>
          <i className='fas fa-graduation-cap text-primary' /> Add Education
        </Link>
      </div>

      <h2 className='my-2'>Experience Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Company</th>
            <th className='hide-sm'>Title</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tech Guy Web Solutions</td>
            <td className='hide-sm'>Senior Developer</td>
            <td className='hide-sm'>02-03-2009 - 01-02-2014</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
          <tr>
            <td>Traversy Media</td>
            <td className='hide-sm'>Instructor & Developer</td>
            <td className='hide-sm'>02-03-2015 - Now</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className='my-2'>Education Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>School</th>
            <th className='hide-sm'>Degree</th>
            <th className='hide-sm'>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Northern Essex</td>
            <td className='hide-sm'>Associates</td>
            <td className='hide-sm'>02-03-2007 - 01-02-2009</td>
            <td>
              <button className='btn btn-danger'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className='my-2'>
        <button className='btn btn-danger'>
          <i className='fas fa-user-minus' />
          Delete My Account
        </button>
      </div>
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
