import React from 'react';
import '../css/profile_card.css';
import Profiles from '../data/constants';

function ProfileCard() {
  return (
    
    <div className="profile-container">
        
      {Profiles.map((profile, index) => (
        <div className="profile-card" key={index}>
          <div className="profile-image"></div>
          <div className="profile-details">
            <h2>{profile.name}</h2>
            <p>{profile.expertise}</p>
            {/* Add more details as needed */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProfileCard;
