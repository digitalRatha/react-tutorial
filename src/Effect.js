import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Effect() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('Blank');
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      setPosts(resp.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div className="row container">
        <div className="col-3"></div>
        <div className="col-6 ">
          <div className="list-group">
            {posts.map((post) => (
              <button
                key={post.id}
                type="button"
                className="list-group-item list-group-item-action"
              >
                {post.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
