import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, to, from, description }
}) => (
  <div className='p-1'>
    <h3 className='text-dark'>{school}</h3>
    <p>
      <Moment format='YYYY/MM/DD'>{from}</Moment> -{' '}
      {!to ? 'Present' : <Moment format='YYYY/MM/DD'>{to}</Moment>}
    </p>
    <p>
        <strong>Degree: </strong> {degree}
    </p>
    <p>
        <strong>Description: </strong> {description}
    </p>
    <p>
        <strong>Field Of Study: </strong> {fieldofstudy}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
