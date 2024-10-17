import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProfileList from "./components/ProfileList";
import ProfileDetails from "./components/ProfileDetails";
import AdminPanel from "./components/AdminPanel";
import SearchFilter from "./components/SearchFilter";
import profilesData from "./data/profiles.json";
import { ClipLoader } from "react-spinners";
import Footer from "./components/Footer"; 

const App = () => {
  const [profiles, setProfiles] = useState([]);
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProfiles(profilesData);
      setFilteredProfiles(profilesData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1 className="navbar-title">ViewSphere</h1>

          <SearchFilter
            profiles={profiles}
            setFilteredProfiles={setFilteredProfiles}
          />
          
          <div className="navbar-links">
            <Link to="/">Home</Link>
            <Link to="/admin" style={{ marginLeft: "10px" }}>
              Admin Panel
            </Link>
          </div>
        </nav>

        <h1>Profiles</h1>

        {loading ? (
          <div className="loading-indicator">
            <ClipLoader color={"#123abc"} loading={loading} size={50} />
          </div>
        ) : (
          <Routes>
            <Route
              path="/profile/:id"
              element={<ProfileDetails profiles={profiles} />}
            />
            <Route
              path="/admin"
              element={
                <AdminPanel profiles={profiles} setProfiles={setProfiles} />
              }
            />
            <Route
              path="/"
              element={<ProfileList profiles={filteredProfiles} />}
            />
          </Routes>
        )}

        <Footer />
      </div>
    </Router>
  );
};

export default App;
