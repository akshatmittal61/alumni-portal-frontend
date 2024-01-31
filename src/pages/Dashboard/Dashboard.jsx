import React, { useContext, useState } from "react";
import GlobalContext from "../../components/Context/GloablContext";
import Post from "../../components/Post/Post";
import WriteNewPost from "../../components/WriteNewPost/WriteNewPost";
import "./dashboard.css";

const Dashboard = () => {
	const { user, openNav, breakpoint } = useContext(GlobalContext);
	const [showWritePostBox, setShowWritePostBox] = useState(false);
	const [posts, setPosts] = useState([
		{
			id: 0,
			content:
				"whenever i feel sad, it pretty much always turns out that i'm either hungry, dehydrated, sleep-deprived, or having a deep existential crisis!",
			author: {
				name: "Akshat Mittal",
				email: "akshatmittal2506@gmail.com",
				username: "akshatmittal61",
				avatar: "https://github.com/akshatmittal61.png",
			},
			likes: {
				status: true,
				count: 4,
			},
			comments: [
				{
					id: "656asdc6a",
					content: "It was a good one",
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://github.com/akshatmittal61.png",
					},
					time: "Fri Apr 15 2022 16:35:00 GMT+0530 (India Standard Time)",
					likes: {
						status: false,
						count: 1,
					},
				},
			],
		},
		{
			id: 1,
			content:
				"whenever i feel sad, it pretty much always tuhenever i feel sad, it pretty much always tuhenever i feel sad, it pretty much always turns out that i'm either hungry, dehydrated, sleep-deprived, or having a deep existential crisis!",
			author: {
				name: "Varun Prohit",
				email: "varunprohit222@gmail.com",
				username: "VarunProhit",
				avatar: "https://github.com/VarunProhit.png",
			},
			likes: {
				status: false,
				count: 3,
			},
			comments: [
				{
					id: "656asdc6a",
					content: "dkvjbdvbflab aca aacdkvjbdvbflab aca aacdkvjbdvbflab aca aacdkvjbdvbflab aca aacdkvjbdvbflab aca aacdkvjbdvbflab aca aacdkvjbdvbflab aca aacdkvjbdvbflab aca aacdkvjbdvbflab aca aacdkvjbdvbflab aca aacdkvjbdvbflab aca aac",
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://github.com/akshatmittal61.png",
					},
					time: "Fri Apr 15 2022 16:35:00 GMT+0530 (India Standard Time)",
					likes: {
						status: false,
						count: 1,
					},
				},
				{
					id: "656assdvc6a",
					content: "It was a good one",
					author: {
						name: "Tichita",
						email: "tichita473@gmail.com",
						username: "tichita7",
						avatar: "https://github.com/tichita7.png",
					},
					time: "Fri Apr 15 2022 16:35:00 GMT+0530 (India Standard Time)",
					likes: {
						status: true,
						count: 6,
					},
				},
			],
		},
		{
			id: 3,
			content:
				"whenever i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-deprived, or having a deep existential crisis!",
			author: {
				name: "Tichita",
				email: "tichita473@gmail.com",
				username: "tichita7",
				avatar: "https://github.com/tichita7.png",
			},
			likes: {
				status: false,
				count: 3,
			},
			comments: [
				{
					id: "656asdc6a",
					content: "It was a good one",
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://github.com/akshatmittal61.png",
					},
					time: "Fri Apr 15 2022 16:35:00 GMT+0530 (India Standard Time)",
					likes: {
						status: false,
						count: 1,
					},
				},
			],
		},
	]);
	const likePost = (id) => {
		let newPosts = [];
		posts.forEach((post) => {
			if (post.id === id)
				newPosts = [
					...newPosts,
					{
						...post,
						likes: {
							status: !post.likes.status,
							count: post.likes.status
								? post.likes.count - 1
								: post.likes.count + 1,
						},
					},
				];
			else newPosts = [...newPosts, post];
		});
		setPosts(newPosts);
	};
	const submitComment = (id, comment) => {
		let newPosts = [];
		posts.forEach((post) => {
			if (post.id === id) {
				const newPost = {
					...post,
					comments: [
						...post.comments,
						{
							id: "a6s54a6s4a6",
							content: comment.content,
							author: { ...user },
							time: comment.time,
							likes: {
								status: false,
								count: 0,
							},
						},
					],
				};
				newPosts = [...newPosts, newPost];
			} else newPosts = [...newPosts, post];
		});
		setPosts(newPosts);
	};
	return (
		<section className="dashboard-container">
			<div className="dashboard-head">
				<div className="dashboard-write">
					<div className="dashboard-write-avatar">
						<img src={user.avatar} alt={user.name} />
					</div>
					<div
						className="dashboard-write-block"
						onClick={() => setShowWritePostBox(true)}
					>
						<span>Add a new post...</span>
					</div>
				</div>
			</div>
			<div className="dashboard-body">
				<div className="dashboard-posts">
					<div
						className={`responsive-masonry responsive-masonry-layout-${
							breakpoint("mobile")
								? "1"
								: breakpoint("tab")
								? openNav
									? "1"
									: "2"
								: openNav
								? "2"
								: "3"
						}`}
					>
						{posts.map((post, index) => (
							<div
								className={`responsive-masonry-box`}
								key={index}
							>
								<Post
									addComment={submitComment}
									post={post}
									likePost={likePost}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
			{showWritePostBox && (
				<WriteNewPost close={() => setShowWritePostBox(false)} />
			)}
		</section>
	);
};

export default Dashboard;
