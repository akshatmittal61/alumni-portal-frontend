import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import GlobalContext from "../../Context/GloablContext";
import Popup from "../../Popup/Popup";
import "./comments.css";

const Comments = ({ close, comments, submit }) => {
	const { user } = useContext(GlobalContext);
	const [userComment, setUserComment] = useState({
		content: "",
		time: "",
	});
	const handleChange = (e) => {
		setUserComment({
			content: e.target.value,
			time: Date(),
		});
	};
	const handleReset = () => {
		setUserComment({
			content: "",
			time: "",
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setUserComment({
			content: userComment.content,
			time: Date(),
		});
		submit(userComment);
		setUserComment({
			content: "",
			time: "",
		});
	};
	const likeComment = (id) => {
		console.log(`Like a comment with id: ${id}`);
	};
	return (
		<Popup close={close}>
			<div className="comments">
				<div className="comments-add">
					<div className="comments-add-author">
						<img src={user.avatar} alt={user.name} />
					</div>
					<form
						className="comments-add-form"
						onReset={handleReset}
						onSubmit={handleSubmit}
					>
						<textarea
							value={userComment.content}
							onChange={handleChange}
							placeholder="Your comment here"
						></textarea>
						<div className="comments-add-form-group">
							<Button
								text="Cancel"
								type="reset"
								variant="neuro"
							/>
							<Button
								text="Post"
								type="submit"
								variant="neuro"
								disabled={userComment.content === ""}
							/>
						</div>
					</form>
				</div>
				<div className="comments-others">
					{comments.map((comment, index) => (
						<div className="comment" key={index}>
							<div className="post">
								<div className="post-author">
									<div className="post-author-image">
										<Link
											to={`/users/${comment.author.username}`}
										>
											<img
												src={comment.author.avatar}
												alt={comment.author.name}
											/>
										</Link>
									</div>
									<div className="post-author-details">
										<Link
											to={`/users/${comment.author.username}`}
											className="post-author-name"
										>
											{comment.author.name}
										</Link>
										<span className="post-author-time">
											{comment.time}
										</span>
									</div>
								</div>
								<div className="post-content">
									{comment.content}
								</div>
								<div className="post-stats">
									<button
										className="post-stats-btn post-stats-like"
										onClick={() => likeComment(comment.id)}
									>
										<span className="material-icons">
											{comment.likes.status
												? "favorite"
												: "favorite_border"}
										</span>
										{comment.likes.count !== 0 && (
											<span>{comment.likes.count}</span>
										)}
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Popup>
	);
};

export default Comments;
