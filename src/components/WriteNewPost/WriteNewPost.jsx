import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import GlobalContext from "../Context/GloablContext";
import "./write-new-post.css";

const WriteNewPost = ({ close }) => {
	const { user } = useContext(GlobalContext);
	const [post, setPost] = useState({
		text: "",
	});
	const handleChange = (e) => {
		const { name, value } = e.target;
		setPost({
			...post,
			[name]: value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(post);
		setPost({
			text: "",
		});
	};
	return (
		<section className="write-new-post">
			<div className="write-new-post-box" data-aos="zoom-in">
				<div className="write-new-post-head">
					<span className="write-new-post-head-title">
						Create a new Post
					</span>
					<button className="icon" onClick={close}>
						<span className="material-icons">close</span>
					</button>
				</div>
				<div className="write-new-post-body">
					<div className="write-new-post-body-top">
						<div className="write-new-post-body-avatar">
							<img src={user.avatar} alt={user.name} />
						</div>
						<div className="write-new-post-body-name">
							<span>{user.name}</span>
							<span>{user.status}</span>
						</div>
					</div>
					<div className="write-new-post-body-content">
						<form onSubmit={handleSubmit}>
							<textarea
								placeholder="Write something here"
								name="text"
								value={post.text}
								onChange={handleChange}
                                autoFocus
							></textarea>
							<Button text="Post" type="submit" />
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WriteNewPost;
