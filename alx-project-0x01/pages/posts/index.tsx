import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => (
  <div>
    <Header />
    <main className="p-8 space-y-4">
      <h1 className="text-3xl font-semibold mb-4">Posts</h1>
      <PostCard title="First Post" body="This is the body of the first post." />
      <PostCard title="Second Post" body="This is the body of the second post." />
    </main>
  </div>
);

export default PostsPage;
