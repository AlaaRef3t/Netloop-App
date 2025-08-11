
import { useState } from "react";
import userImage from '../../assets/userProfile.jpg'
import userPostImage from '../../assets/postsImage.jpg'
import { Link } from "react-router-dom";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

export default function PostCard({ post }) {
    // console.log(post);

    const [showComments, setShowComments] = useState(false);

    return (
        <div className="card bg-base-100 shadow-md p-4 max-w-xl mx-auto my-6">

            <Link to={`/postDetails/${post?._id}`}>
                <div className="flex items-center gap-3 mb-3">
                    <div className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={post?.user?.photo} alt="User" />
                        </div>
                    </div>
                    <div>
                        <p className="font-bold">{post?.user?.name}</p>
                        <p className="text-sm text-gray-400">{post?.createdAt}</p>
                    </div>
                </div>

                <p className="mb-3">
                    {post?.body}
                </p>

                <img src={post?.image ? post?.image : userPostImage} className="rounded-lg mb-4 w-full h-[400px] " alt="Post" />


            </Link>


            <div className="flex gap-3 text-sm text-gray-500 justify-around">
                <button className="btn btn-ghost btn-md"><SlLike size={18} /> Like</button>
                <button
                    className="btn btn-ghost btn-md"
                    onClick={() => setShowComments(!showComments)}
                >
                    <FaRegComment size={18} /> Comment
                </button>
                <button className="btn btn-ghost btn-md"><FaShare size={18} /> Share</button>
            </div>

            {/* Toggle Comments Section */}
            {showComments && (
                <div className="mt-4">

                    {post?.comments?.map((comment) => <div key={comment?._id}>
                        <div className="mb-2 flex justify-between gap-3 items-center">
                            <div className="flex items-center">
                                <div className=" avatar">
                                    <div className="w-8 h-8 rounded-full ">
                                        <img
                                            src={comment?.commentCreator?.photo.includes("undefined") ? userImage : comment?.commentCreator?.photo}
                                            alt="Commenter"
                                        />
                                    </div>
                                </div>
                                <p>{comment?.commentCreator?.name} </p>
                            </div>
                            <div className="chat-bubble w-full">{comment?.content}</div>
                        </div>
                    </div>)}



                    {/* New Comment Input */}
                    <form className="flex  gap-5 content-between items-center">
                        <input
                            type="text"
                            name="content"
                            placeholder="Write a comment..."
                            className="input input-bordered w-full"
                        />
                        <button className="px-3 py-2 bg-blue-400 text-white rounded-xl">
                            Add
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
}