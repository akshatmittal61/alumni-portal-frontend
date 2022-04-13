import React, { useContext, useState } from "react";
import Button from "../Button/Button";
import GlobalContext from "../Context/GloablContext";
import Popup from "../Popup/Popup";
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
		<Popup close={close} title="Create a new post" width="60%" height="60%">
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
		</Popup>
	);
};

export default WriteNewPost;
