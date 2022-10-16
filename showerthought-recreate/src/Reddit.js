import { useEffect, useState } from "react";

export default function Reddit() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/showerthoughts.json")
      .then((res) => res.json())
      .then((res) => setPosts(res.data.children));
  }, []);

  return (
    <div className="container">
      <h1>r/showerthoughts</h1>
      <ul>
        {posts.length !== 0 ? (
          posts.map((post) => (
            <li key={post.data.id}>
              <a
                className="linkTab"
                href={post.data.url}
                target="_blank"
                rel="noreferrer"
              >
                {post.data.title}
              </a>{" "}
              <em>{post.data.author_fullname}</em>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
}
