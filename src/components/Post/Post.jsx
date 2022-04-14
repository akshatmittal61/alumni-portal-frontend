import React from "react";
import "./post.css";

const Post = ({ post, likePost }) => {
	const { author, content, likes, comments } = post;
	return (
		<div className="post">
			<div className="post-author">
				<div className="post-author-image">
					<img src={author.avatar} alt={author.name} />
				</div>
				<div className="post-author-details">
					<span className="post-author-name">{author.name}</span>
					<span className="post-author-username">
						@{author.username}
					</span>
				</div>
			</div>
			<div className="post-content">{content}</div>
			<div className="post-stats">
				<button
					className="post-stat-btn post-stat-like"
					onClick={() => likePost(post.id)}
				>
					<span className="material-icons">
						{likes.status ? "favorite" : "favorite_border"}
					</span>
					{likes.count !== 0 && <span>{likes.count}</span>}
				</button>
				<button className="post-stat-btn post-stat-comment">
					<span className="material-icons">chat_bubble_outline</span>
					{comments.length !== 0 && <span>{comments.length}</span>}
				</button>
			</div>
		</div>
	);
};

export default Post;
