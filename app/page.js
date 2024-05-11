"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(process.env.API_URL); // Check the API_URL value
    axios
      .get("/api/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error); 
      });
  }, []);

  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </main>
      <div className="flex justify-end px-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-md"
          placeholder="Search..."
        />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">
          Search
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border border-gray-200 p-4">
            <Image
              src={post.image}
              className="w-full h-48 object-cover mb-4"
              alt="Post Image"
              width="200"
              height="200"
            />
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
