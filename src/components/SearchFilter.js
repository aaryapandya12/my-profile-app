import React, { useState, useEffect, useCallback } from "react";

const SearchFilter = ({ profiles, setFilteredProfiles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const filterProfiles = useCallback(() => {
    const filtered = profiles.filter((profile) => {
      const matchesName = profile.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesLocation = filterLocation
        ? profile.location.toLowerCase().includes(filterLocation.toLowerCase())
        : true;
      return matchesName && matchesLocation;
    });

    setFilteredProfiles(filtered);
  }, [profiles, searchTerm, filterLocation, setFilteredProfiles]);

  useEffect(() => {
    filterProfiles();
  }, [filterProfiles]);

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <input
        type="text"
        placeholder="Filter by location..."
        value={filterLocation}
        onChange={(e) => setFilterLocation(e.target.value)}
      />

      <button onClick={filterProfiles}>Search</button>
    </div>
  );
};

export default SearchFilter;
