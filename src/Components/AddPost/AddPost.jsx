import React from "react";
import ProfileImg from '../../assets/profile.jpg'


export default function AddPost() {
  return (
    <div className="bg-white rounded-lg shadow p-4 w-full max-w-xl mx-auto mt-6">
      {/* أعلى الصندوق */}
      <div className="flex items-center gap-3">
        <img
          src={ProfileImg}
          alt="profile"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          name="body"
          placeholder="What's on your mind?"
          className="flex-1 bg-gray-100 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <hr className="my-3" />

      {/* خيارات أسفل الصندوق */}
      <div className="flex justify-between text-gray-600 text-sm font-medium">
        <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-3 py-2 rounded-lg transition">
          📷
          <span>Photo/Video</span>
          <input type="file" name="image" className="hidden" />
        </label>

        <button className="flex items-center gap-2 hover:bg-gray-100 px-3 py-2 rounded-lg transition">
          😀
          <span>Feeling/Activity</span>
        </button>
      </div>
    </div>
  );
}
