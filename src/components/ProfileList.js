// import React from 'react';
// import ProfileCard from './ProfileCard';

// const ProfileList = ({ profiles }) => {
//   return (
//     <div className="profile-list">
//       {profiles.map(profile => (
//         <ProfileCard key={profile.id} profile={profile} />
//       ))}
//     </div>
//   );
// };

// export default ProfileList;


import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles }) => {
  return (
    <div className="profile-list">
      {profiles.length === 0 ? ( // Check if profiles array is empty
        <div className="no-results-message">
          No products found.
        </div>
      ) : (
        profiles.map(profile => (
          <ProfileCard key={profile.id} profile={profile} />
        ))
      )}
    </div>
  );
};

export default ProfileList;
