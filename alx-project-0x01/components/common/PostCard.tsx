import React from "react";

type PostCardProps = {
  title: string;
  body: string;
};

const PostCard: React.FC<PostCardProps> = ({ title, body }) => (
  <div className="border p-4 rounded shadow">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p>{body}</p>
  </div>
);

export default PostCard;
