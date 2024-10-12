import React, { useState } from "react";
import { Link } from "react-router-dom";
import MapComponent from "./MapComponent";

const ProfileCard = ({ profile }) => {
  const [showMap, setShowMap] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleSummaryClick = () => {
    setShowMap((prev) => !prev);
  };

  const maxLength = 100;
  const isDescriptionLong = profile.description.length > maxLength;

  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>
        {showFullDescription
          ? profile.description
          : `${profile.description.substring(0, maxLength)}...`}
        {isDescriptionLong && (
          <span
            onClick={() => setShowFullDescription((prev) => !prev)}
            style={{ color: "blue", cursor: "pointer" }}
          >
            {showFullDescription ? " Read Less" : " Read More"}
          </span>
        )}
      </p>
      <Link to={`/profile/${profile.id}`}>View Details</Link>
      <button onClick={handleSummaryClick}>Summary</button>
      {showMap && (
        <MapComponent lat={profile.latitude} lng={profile.longitude} />
      )}
    </div>
  );
};

export default ProfileCard;
