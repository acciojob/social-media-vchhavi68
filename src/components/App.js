
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './../styles/App.css';

const Posts = () => (
  <div>
    <h2>Posts</h2>
    <div className="posts-list">
      {/* Posts will be rendered here */}
    </div>
  </div>
);
const Users = () => (
  <div>
    <h2>Users</h2>
    <ul>
      <li>User 1</li>
      <li>User 2</li>
      <li>User 3</li>
    </ul>
  </div>
);

const Notifications = () => (
  <div>
    <h2>Notifications</h2>
    <button className="button">Refresh Notifications</button>
    <section className="notificationsList"></section>
  </div>
);

const App = () => {
  return (
    <Router>
    <div className="App">
    <h1>GenZ</h1>
        <nav>
          <Link to="/">Posts</Link> |{" "}
          <Link to="/users">Users</Link> |{" "}
          <Link to="/notifications">Notifications</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
    </div>
  </Router>
  );
};

export default App
