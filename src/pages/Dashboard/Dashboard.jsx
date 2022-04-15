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
				"whenever i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-deprived, or having a deep existential crisis!",
			author: {
				name: "Akshat Mittal",
				email: "akshatmittal2506@gmail.com",
				username: "akshatmittal61",
				avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
			},
			likes: {
				status: false,
				count: 3,
			},
			comments: [
				{
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
					},
					text: "It was a good one",
				},
			],
		},
		{
			id: 1,
			content:
				"whenever i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-der i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-der i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-der i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-der i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-der i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-deprived, or having a deep existential crisis!",
			author: {
				name: "Akshat Mittal",
				email: "akshatmittal2506@gmail.com",
				username: "akshatmittal61",
				avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
			},
			likes: {
				status: false,
				count: 3,
			},
			comments: [
				{
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
					},
					text: "It was a good one",
				},
			],
		},
		{
			id: 2,
			content:
				"whenever i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-deprived, or having a deep existential crisis!",
			author: {
				name: "Akshat Mittal",
				email: "akshatmittal2506@gmail.com",
				username: "akshatmittal61",
				avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
			},
			likes: {
				status: false,
				count: 3,
			},
			comments: [
				{
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
					},
					text: "It was a good one",
				},
			],
		},
		{
			id: 3,
			content:
				"whenever i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-deprived,i’m either hungry, dehydrated, sleep-deprived,i’m either hungry, dehydrated, sleep-deprived, or having a deep existential crisis!",
			author: {
				name: "Akshat Mittal",
				email: "akshatmittal2506@gmail.com",
				username: "akshatmittal61",
				avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
			},
			likes: {
				status: false,
				count: 3,
			},
			comments: [
				{
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
					},
					text: "It was a good one",
				},
			],
		},
		{
			id: 4,
			content: "whenever i feel sad, it pretty much always txcrisis!",
			author: {
				name: "Akshat Mittal",
				email: "akshatmittal2506@gmail.com",
				username: "akshatmittal61",
				avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
			},
			likes: {
				status: false,
				count: 3,
			},
			comments: [
				{
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
					},
					text: "It was a good one",
				},
			],
		},
		{
			id: 5,
			content:
				"whenever i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, sleep-deprived, or having a deep existential crisis!",
			author: {
				name: "Akshat Mittal",
				email: "akshatmittal2506@gmail.com",
				username: "akshatmittal61",
				avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
			},
			likes: {
				status: false,
				count: 3,
			},
			comments: [
				{
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
					},
					text: "It was a good one",
				},
			],
		},
		{
			id: 6,
			content:
				"whenever i feel sad, it pretty much always turns out that i’m either hungry, dehydrated, surns out that i’m either hungry, dehydrated, sleep-deprived, or having a deep existential crisis!",
			author: {
				name: "Akshat Mittal",
				email: "akshatmittal2506@gmail.com",
				username: "akshatmittal61",
				avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
			},
			likes: {
				status: false,
				count: 3,
			},
			comments: [
				{
					author: {
						name: "Akshat Mittal",
						email: "akshatmittal2506@gmail.com",
						username: "akshatmittal61",
						avatar: "https://avatars.githubusercontent.com/u/84612609?v=4",
					},
					text: "It was a good one",
				},
			],
		},
	]);
	const likePost = (id) => {
		let newPosts = [];
		console.log("Like Post");
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
								<Post post={post} likePost={likePost} />
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
