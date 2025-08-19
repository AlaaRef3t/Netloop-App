import React, { useContext, useState } from "react";
import ProfileImg from '../../assets/profile.jpg'
import { PostContext } from "../../Context/PostContext";

export default function AddPost({ callback }) {
  let { addNewPost } = useContext(PostContext)
  const [isLoading, setIsLoading] = useState(false)


  async function handleAddPost(e) {
    e.preventDefault();
    setIsLoading(true)
    let formData = new FormData();

    let body = e.target.body.value;
    let image = e.target.image.files[0];

    formData.append("body", body)
    if (image) {
      formData.append("image", image)

    }
    let response = await addNewPost(formData);
    //   console.log(response , "from response ");
    setIsLoading(false)
    callback()

  };

  return (
    <form
      onSubmit={handleAddPost}
      className="bg-white rounded-lg shadow p-4 w-full max-w-xl mx-auto mt-6"
    >

      <div className="flex items-center gap-3">
        <img
          src={ProfileImg}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <textarea
          type="text"
          name="body"
          placeholder="What's on your mind?"
          className="flex-1 bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <hr className="my-3" />

      <div className="flex justify-between items-center text-gray-600 text-sm font-medium">
        <div className="flex gap-3">
          <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition">
            📷
            <span>Photo/Video</span>
            <input type="file" name="image" className="hidden" />
          </label>

          <button
            type="button"
            className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition"
          >
            😀
            <span>Feeling/Activity</span>
          </button>
        </div>
{isLoading?<button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
        >
          Posting... 
        </button> : <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition cursor-pointer"
        >
          Add Post
        </button>}
        
      </div>
    </form>
  );
}
