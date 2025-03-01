import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import "./PostItem.css";

const PostItem = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="post">
      <img src={post.imageUrl} alt="Post" className="post-image" />
      <div className="post-info">
        <img src={post.profilePicture} alt="Author" className="author-img" />
        <div>
          <h3>@{post.author}</h3>
          <p>{post.text}</p>
          <div className="tags">
            {post.tags.map((tag, index) => (
              <span key={index} className="tag">#{tag}</span>
            ))}
          </div>
        </div>
      </div>
      <button className={`like-btn ${liked ? "liked" : ""}`} onClick={() => setLiked(!liked)}>
        <FaHeart /> {liked ? "Лайкнуто!" : "Лайк"}
      </button>
    </div>
  );
};

export default PostItem;
