import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { FaRegComment, FaShare } from "react-icons/fa";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import userImage from '../../assets/userProfile.jpg';
import userPostImage from '../../assets/postsImage.jpg';
import { PostContext } from "../../Context/PostContext";
import moment from "moment";


export default function PostCard({ post, callback }) {
    let { addComment, deleteUserPost } = useContext(PostContext);
    const [showComments, setShowComments] = useState(false);
    const [moreComments, setMoreComments] = useState(1);
    const [commentContent, setCommentContent] = useState("");
    const [comments, setComments] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        setComments(post.comments);
    }, [post.comments]);

    async function handleAddComment(e) {
        e.preventDefault();
        let response = await addComment({ content: commentContent, post: post._id });
        setComments(response);
        setCommentContent("");
    }

    async function handleDelete(id) {
        let response = await deleteUserPost(id)
        callback()
        console.log(response);

    }



    return (
        <div className="card bg-base-100 shadow-md p-4 max-w-xl mx-auto my-6 relative">


            <div className="absolute top-2 right-2">
                <button
                    className="p-2 cursor-pointer rounded-full hover:bg-gray-200"
                    onClick={() => setShowMenu(!showMenu)}
                >
                    <HiOutlineDotsHorizontal size={20} />
                </button>

                {showMenu && (
                    <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg overflow-hidden z-10">

                        <button
                            onClick={() => handleDelete(post._id)}
                            className="cursor-pointer w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>

            <Link to={`/postDetails/${post?._id}`}>
                <div className="flex items-center gap-3 mb-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={post?.user?.photo} alt="User" />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">{post?.user?.name}</p>
                        <p className="text-sm text-gray-400">
                            {moment((post?.createdAt)).fromNow()}
                        </p>
                    </div>
                </div>

                <p className="mb-3">{post?.body}</p>
                <img
                    src={post?.image ? post?.image : userPostImage}
                    className="rounded-lg mb-4 w-full h-[400px]"
                    alt="Post"
                />
            </Link>

            <div className="flex gap-3 text-sm text-gray-500 justify-around">
                <button className="btn btn-ghost btn-md"><SlLike size={18} /> Like</button>
                <button
                    className="btn btn-ghost btn-md"
                    onClick={() => setShowComments(!showComments)}
                >
                    <FaRegComment size={18} /> Comment {comments?.length}
                </button>
                <button className="btn btn-ghost btn-md"><FaShare size={18} /> Share</button>
            </div>

            {showComments && (
                <div className="mt-4">
                    {comments?.slice(0, moreComments).map((comment) => (
                        <div key={comment?._id}>
                            <div className="mb-2 flex justify-between gap-3 items-center ">
                                <div className="flex items-center">
                                    <div className="avatar me-1">
                                        <div className="w-8 h-8 rounded-full">
                                            <img
                                                src={comment?.commentCreator?.photo.includes("undefined") ? userImage : comment?.commentCreator?.photo}
                                                alt="Commenter"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col ">
                                        <p className="text-sm font-bold">{comment?.commentCreator?.name}</p>
                                        <span className="text-sm text-slate-400">{moment(comment.createdAt).fromNow()}</span>
                                    </div>
                                </div>
                                <div className="chat-bubble w-full">{comment?.content}</div>
                            </div>
                        </div>
                    ))}
                    {/* show more comments */}
                    {comments?.length > moreComments && (
                        <div className="text-center py-2">
                            <button onClick={() => setMoreComments(moreComments + 2)} className="btn btn-sm py-4">
                                Show More Comments
                            </button>
                        </div>
                    )}
                    {/* add comment */}
                    <form onSubmit={handleAddComment} className="flex gap-5 content-between items-center">
                        <input
                            type="text"
                            name="content"
                            value={commentContent}
                            onChange={(e) => setCommentContent(e.target.value)}
                            placeholder="Write a comment..."
                            className="input input-bordered w-full"
                        />
                        <button className="cursor-pointer px-3 py-2 bg-blue-400 text-white rounded-xl">
                            Add
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}
