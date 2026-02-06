
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './../styles/App.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addPost = () => {
    if (!author || !content) return;
    const newPost = {
      id: Date.now(),
      author,
      title,
      content,
      reactions: [0, 0, 0, 0, 0] // 5 reactions, last one stays 0
    };
    setPosts([newPost, ...posts]);
    setAuthor("");
    setTitle("");
    setContent("");
  };

  const reactToPost = (index, reactionIndex) => {
    setPosts(posts.map((post, i) => {
      if (i === index && reactionIndex < 4) {
        const newReactions = [...post.reactions];
        newReactions[reactionIndex]++;
        return { ...post, reactions: newReactions };
      }
      return post;
    }));
  };

  return (
    <div>
      <h2>Posts</h2>
      <div>
        <select id="postAuthor" value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="">Select Author</option>
          <option value="User 1">User 1</option>
          <option value="User 2">User 2</option>
          <option value="User 3">User 3</option>
        </select>
        <input
          id="postTitle"
          type="text"
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          id="postContent"
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button onClick={addPost}>Submit</button>
      </div>
      <div className="posts-list">
        {posts.map((post, index) => (
          <div className="post" key={post.id}>
            <h3>{post.title || "No Title"}</h3>
            <p>{post.content}</p>
            <p><b>Author:</b> {post.author}</p>
            <div>
              {post.reactions.map((count, reactionIndex) => (
                <button
                  key={reactionIndex}
                  onClick={() => reactToPost(index, reactionIndex)}
                >
                  {count}
                </button>
              ))}
            </div>
            <button className="button">Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

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

const Notifications = () => {
  const [notifications, setNotifications] = React.useState([]);

  const refreshNotifications = () => {
    setNotifications([
      "Notification 1",
      "Notification 2",
      "Notification 3"
    ]);
  };

  return (
    <div>
      <h2>Notifications</h2>
      <button className="button" onClick={refreshNotifications}>Refresh Notifications</button>
      <section className="notificationsList">
        {notifications.map((note, i) => (
          <div key={i}>{note}</div>
        ))}
      </section>
    </div>
  );
};

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

export default App;
